import React from "react";
import { Separator } from "./ui/separator";
import { Card, CardDescription, CardTitle } from "./ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

type Faq = {
	question: string;
	answer: string;
};
const getFaq = async (guestSessionId: string) => {
	const faq = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/guestApi/${guestSessionId}/workflow`,
	);
	return faq.json().then((data) => {
		console.log(data);
		return data.result.homeFlow.frequentlyAskedQuestions;
	});
};
const GUEST_STATUS_MAPPING = {
	Reservation: "homeFlow",
	inHouse: "inHouseFlow",
	checkedOut: "checkedOutFlow",
};
const FaqComponent = () => {
	const { guestSessionId } = useParams();
	const {
		data: faqs,
		isLoading,
		isError,
	} = useQuery<Faq[]>({
		queryKey: ["workflow", guestSessionId],
		queryFn: () => getFaq(guestSessionId as string),
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>Error...</div>;
	}
	return (
		<div>
			<span>
				<CardTitle>Frequently Asked Questions</CardTitle>
			</span>
			<div className="flex flex-col gap-4">
				<Accordion type="single" collapsible>
					{faqs.map((faq, index) => (
						<AccordionItem value={`item-${index + 1}`}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};
export default FaqComponent;
