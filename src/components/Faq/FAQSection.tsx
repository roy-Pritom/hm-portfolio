
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const faqs = [
  {
    question: "How can I pay for my appointment?",
    answer: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow."
  },
  {
    question: "What can I expect at my first consultation?",
    answer: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow."
  },
  {
    question: "What are your opening hours?",
    answer: "We are open Monday through Friday from 9:00 AM to 6:00 PM. Weekend appointments are available upon request. Our last appointment slot is typically 5:00 PM to ensure we can provide full attention to each client."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide emergency services 24/7 for existing clients. For emergencies, please call our emergency hotline. New clients requiring emergency services will be evaluated on a case-by-case basis."
  },
  {
    question: "Are your services covered by insurance?",
    answer: "Many of our services are covered by major insurance providers. We recommend contacting your insurance company to verify coverage. We can provide necessary documentation and assist with insurance claims."
  }
]

export default function FAQSection() {
  return (
    <div className="md:container md:mx-auto pt-10">
      <div className="text-center mb-4">
        <h2 className="lg:text-3xl ms:text-[22px] text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our services, appointments, and policies.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 ">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-4 data-[state=open]:bg-gray-50 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex gap-4 items-center text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold">
                    {faq.question}
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4 pt-2 pl-12">
                <p className="text-[15px] leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Still have questions? We&#39;re here to help!
        </p>
        <div className="inline-flex items-center justify-center gap-4">
            <Link href="/contact">
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
            Contact Us
          </button>
            </Link>
          <Link href="tel:+8801861714318"> 

          <button className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors">
            Schedule Call
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

