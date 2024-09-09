import React from "react";

import { Skeleton } from "./ui/skeleton";
import { CardDescription, CardTitle } from "./ui/card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
const CarouselSkeleton = () => (
  <div className="flex flex-col space-y-3">
    <Skeleton className="h-[75px] w-[75px] rounded-xl" />
  </div>
);
const AddOns = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <CardTitle>Amenities</CardTitle>
        <CardDescription>For more comfortable stay</CardDescription>
      </div>
      <ScrollArea>
        <div className="flex gap-2 pb-3">
          {[...Array(10)].map((_, i) => (
            <CarouselSkeleton key={i} />
          ))}
        </div>
        <ScrollBar className="h-[0.4em]" orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default AddOns;
