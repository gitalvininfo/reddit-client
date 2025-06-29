import SubredditLane from './components/SubredditLane';
import AddSubredditDialog from './components/AddSubredditDialog';
import useSubredditStore from './stores/subredditStore';

function App() {
  const subreddits = useSubredditStore((state) => state.subreddits);

  return (
    <>
      <div className="max-w-7xl min-w-7xl">
        <div className="grid grid-cols-3 gap-4 h-full">
          {subreddits.map((subreddit) => (
            <div key={subreddit} className="border-2 border-green-100 p-2">
              <SubredditLane subreddit={subreddit} />
            </div>
          ))}
          <div className="border-2 border-green-100">
            <AddSubredditDialog />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
