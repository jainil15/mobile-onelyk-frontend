import AddOns from "@/components/addon";
import FaqComponent from "@/components/faq";
import Modal from "@/components/modal";
import Support from "@/components/support";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
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
