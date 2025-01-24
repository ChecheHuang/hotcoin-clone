import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { qaAccordions } from '@/config/list'

const QA = () => {
  return (
    <div className="mt-[100px]">
      <h1 className="my-[62px] text-center text-[28px] font-semibold">
        常见问题
      </h1>
      <div>
        <Accordion type="multiple" className="w-full">
          {qaAccordions.map(({ title, description }) => (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger className="text-base font-semibold">
                {title}
              </AccordionTrigger>
              <AccordionContent>{description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default QA
