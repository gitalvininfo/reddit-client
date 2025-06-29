import type { SubReddit } from '@/interface/subreddit';
import { apiRequest } from '@/utils/axios-client';

export const fetchSubreddit = async (subreddit: string): Promise<SubReddit> => {
  const response = await apiRequest({ url: `/${subreddit}.json` });
  return response.data;
};
