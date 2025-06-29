import { useSubredditData } from '@/hooks/useSubredditData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function App() {
  const { data } = useSubredditData('angular');

  console.log({ data });

  return (
    <div className="max-w-7xl min-w-7xl">
      <div className="grid grid-cols-3 gap-4 h-full">
        <div className="border-2 border-green-100 p-3">
          <Accordion type="single" collapsible>
            {data?.data.children.map(({ data }) => (
              <AccordionItem value={data.id}>
                <AccordionTrigger>
                  <div className="flex">
                    <span className="font-bold me-5">{data.ups}</span>{' '}
                    {data.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>{data.selftext}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="border-2 border-green-100">02</div>
        <div className="border-2 border-green-100">03</div>
      </div>
    </div>
  );
}

export default App;
