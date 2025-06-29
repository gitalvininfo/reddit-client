import { fetchSubreddit } from '@/services/reddit-service';
import { useQuery } from '@tanstack/react-query';

export const useSubredditData = (subreddit: string) => {
  return useQuery({
    queryKey: ['subreddit', subreddit],
    queryFn: () => fetchSubreddit(subreddit),
  });
};
