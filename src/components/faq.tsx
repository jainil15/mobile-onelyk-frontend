import React from "react";
import { Separator } from "./ui/separator";
import { Card, CardDescription, CardTitle } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
const FaqComponent = () => {
  return (
    <div>
      <span>
        <CardTitle>FAQ</CardTitle>
      </span>
      <div className="flex flex-col gap-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Question One: This Question</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Question One: This Question</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Question One: This Question</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqComponent;
