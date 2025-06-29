import { create } from 'zustand';

interface AppState {
  subreddits: string[];
  addSubreddit: (subreddit: string) => void;
}

const useSubredditStore = create<AppState>((set) => ({
  subreddits: ['angular', 'react'],
  addSubreddit: (subreddit: string) =>
    set((state) => ({ subreddits: [...state.subreddits, subreddit] })),
}));

export default useSubredditStore;
