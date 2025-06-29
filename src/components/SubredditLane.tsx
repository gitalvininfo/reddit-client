import { useSubredditData } from '@/hooks/useSubredditData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Props = {
  subreddit: string;
};

function SubredditLane({ subreddit }: Props) {
  const { data } = useSubredditData(subreddit);

  return (
    <Accordion type="single" collapsible>
      {data?.data.children.map(({ data }) => (
        <AccordionItem value={data.id}>
          <AccordionTrigger>
            <div className="flex">
              <span className="font-bold me-5">{data.ups}</span> {data.title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>{data.selftext}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default SubredditLane;
