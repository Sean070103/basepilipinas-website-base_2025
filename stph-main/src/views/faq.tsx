import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Faq() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full flex flex-col gap-4 p-8 max-w-[1040px]">
        <p className="text-2xl md:text-4xl font-bold">FAQs</p>
        <p className="text-sm">Answers to your most common questions</p>

        <div className="flex flex-col gap-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Base Philippines?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
                excepturi esse commodi corrupti aliquam rerum deleniti cum
                magnam fugiat expedita omnis adipisci, est, officia libero unde
                aperiam, quisquam consectetur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is Superteam Philippines?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
                excepturi esse commodi corrupti aliquam rerum deleniti cum
                magnam fugiat expedita omnis adipisci, est, officia libero unde
                aperiam, quisquam consectetur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is Superteam Philippines?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
                excepturi esse commodi corrupti aliquam rerum deleniti cum
                magnam fugiat expedita omnis adipisci, est, officia libero unde
                aperiam, quisquam consectetur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is Superteam Philippines?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
                excepturi esse commodi corrupti aliquam rerum deleniti cum
                magnam fugiat expedita omnis adipisci, est, officia libero unde
                aperiam, quisquam consectetur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is Superteam Philippines?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
                excepturi esse commodi corrupti aliquam rerum deleniti cum
                magnam fugiat expedita omnis adipisci, est, officia libero unde
                aperiam, quisquam consectetur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is Superteam Philippines?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
                excepturi esse commodi corrupti aliquam rerum deleniti cum
                magnam fugiat expedita omnis adipisci, est, officia libero unde
                aperiam, quisquam consectetur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
