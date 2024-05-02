import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }
  
  const FAQList: FAQProps[] = [
    {
      question: "What is Feathery?",
      answer: "Feathery is a place where you can share what you're learning, connect with others, and explore new stuff.",
      value: "item-1",
    },
    {
      question: "How do I start on Feathery?",
      answer:
        "Just sign up, create your profile, start documenting and sharing your projects and progress, and connect with others!",
      value: "item-2",
    },
    {
      question:
        "Is Feathery free?",
      answer:
        "Yes, it's totally free to use. Just sign up and you're good to go!",
      value: "item-3",
    },
    {
      question: "What can I share on Feathery?",
      answer: "You can share anything related to what you're learning or doing. Like updates, thoughts, or cool resources you find.",
      value: "item-4",
    },
    {
      question:
        "How do I connect with others on Feathery?",
      answer:
        "You can join discussions, make study groups, or message people directly. It's all about learning and connecting together!",
      value: "item-5",
    },
  ];
  
export default function FAQ(){
    return (
      <section
        id="faq"
        className="container py-24 sm:py-32"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Questions
          </span>
        </h2>
  
        <Accordion
          type="single"
          collapsible
          className="w-full AccordionRoot"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
            >
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
  
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
  
        {/* <h3 className="font-medium mt-4">
          Still have questions?{" "}
          <a
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Contact us
          </a>
        </h3> */}
      </section>
    );
  };
  