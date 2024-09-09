"use client";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { baseUrl } from "@/environment/environment";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";
import { useParams } from "next/navigation";

type GuestStatus = {
	currentStatus: string;
	lateCheckOutStatus: string;
	earlyCheckInStatus: string;
	reservationStatus: string;
	preArrivalStatus: string;
};

type Guest = {
	_id: string;
	propertyId: string;
	countryCode: string;
	phoneNumber: string;
	checkIn: string; // ISO date string
	checkOut: string; // ISO date string
	firstName: string;
	lastName: string;
	email: string;
	active: boolean;
	createdAt: string; // ISO date string
	updatedAt: string; // ISO date string
	roomNumber: string;
	status: GuestStatus;
};

interface Response {
	message: string;
	result: {
		guest: Guest;
	};
}

const showOnlineCheckInButton = (status: GuestStatus) => {
	return (
		status.preArrivalStatus === "Not Applied" &&
		status.currentStatus === "Reservation"
	);
};
const getHeader = (status: GuestStatus) => {
	switch (status.currentStatus) {
		case "Reservation":
			switch (status.reservationStatus) {
				case "Confirmed":
					return "Reservation Confirmed";
				case "Cancelled":
					return "Reservation Cancelled";
			}
		case "In House":
			return "In House";
		case "Checked Out":
			return "Checked Out";
	}
};

const Modal = () => {
	const { guestSessionId } = useParams();
	const { data, isLoading, isError } = useQuery<Response>({
		queryKey: ["guest", guestSessionId],
	});
	if (isLoading) {
		return <Skeleton className="w-full h-[200px]" />;
	}
	if (isError) {
		return <div>Error</div>;
	}
	const guest = data?.result?.guest;
	if (!guest) {
		return <div>No Guest Found</div>;
	}
	console.log(guest);
	return (
		<Card className="self-center w-full bg-secondary">
			<CardHeader>
				<CardDescription>Current Status</CardDescription>
				<CardTitle className="font-medium">{getHeader(guest.status)}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex w-full justify-between">
					<div>
						<CardDescription>Check In</CardDescription>
						<div>
							<p>{new Date(guest.checkIn).toDateString()}</p>
						</div>
					</div>
					<div>
						<CardDescription>Check Out</CardDescription>
						<div>
							<p>{new Date(guest.checkOut).toDateString()}</p>
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex-col  items-start gap-2">
				<CardDescription>Up Next</CardDescription>
				<div className="flex flex-col gap-2 w-full justify-between">
					{showOnlineCheckInButton(guest.status) && (
						<Button className="w-full">Online Check In</Button>
					)}
					<Button
						className="w-full hover:bg-primary-foreground "
						variant="outline"
					>
						View Add Ons
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
};

export default Modal;
