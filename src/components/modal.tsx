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

const Modal = () => {
  return (
    //
    <Card className="self-center w-full">
      <CardHeader>
        <CardDescription>Current Status</CardDescription>
        <CardTitle className="font-medium">Reservation Confirmed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full justify-between">
          <div>
            <CardDescription>Check In</CardDescription>
            <div>
              <p>{new Date("2024-12-12").toDateString()}</p>
            </div>
          </div>
          <div>
            <CardDescription>Check Out</CardDescription>
            <div>
              <p>{new Date("2024-12-22").toDateString()}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <CardDescription>Up Next</CardDescription>
        <div className="flex gap-2 w-full justify-between">
          <Button className="w-full">Early Check In</Button>
          <Button className="w-full" variant="outline">
            Pre-arrival Check In
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Modal;
