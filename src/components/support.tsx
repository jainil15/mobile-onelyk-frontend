"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Cross, CrossIcon, MessageSquare, XIcon } from "lucide-react";
import { Close } from "@radix-ui/react-dialog";
const SupportItemCard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <Card className="min-w-[310px] bg-secondary overflow-clip h-45">
      <CardHeader>
        <CardDescription className="flex gap-2 items-center justify-between">
          Respond Immediately{" "}
          <button onClick={() => setIsOpen(false)}>
            <XIcon />
          </button>
        </CardDescription>
        <CardTitle className="text-nowrap">Frontend Desk Support</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>+11234567890</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <a
            href="sms:+11234567890"
            className="w-full flex items-center justify-center gap-2"
          >
            <MessageSquare />
            Chat Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  ) : null;
};

const Support = () => {
  return (
    <div className="flex gap-2  ">
      <SupportItemCard />
      <SupportItemCard />
    </div>
  );
};

export default Support;
