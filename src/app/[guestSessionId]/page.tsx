"use client";
import AddOns from "@/components/addon";
import FaqComponent from "@/components/faq";
import Modal from "@/components/modal";
import Support from "@/components/support";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";

const getGuest = async (guestSessionId: string) => {
	const guest = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/guestApi/${guestSessionId}/guest`,
	);
	return guest.json();
};

export default function Home({
	params,
}: { params: { guestSessionId: string } }) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["guest", params.guestSessionId],
		queryFn: () => getGuest(params.guestSessionId),
	});
	return (
		// TODO: max-w-[400px] min-w-[360px]

		<section className=" w-full flex flex-col gap-5 p-4">
			<Modal />

			<AddOns />

			<FaqComponent />

			<div className="sticky bottom-0 flex  items-center  bg-background  w-full z-50 ">
				<ScrollArea>
					<Support />
					<ScrollBar orientation="horizontal" />
				</ScrollArea>
			</div>
		</section>
	);
}
