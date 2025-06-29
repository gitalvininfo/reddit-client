import SubredditLane from './components/SubredditLane';

function App() {
  const subreddits = ['angular', 'react'];

  return (
    <div className="max-w-7xl min-w-7xl">
      <div className="grid grid-cols-3 gap-4 h-full">
        {subreddits.map((subreddit) => (
          <div className="border-2 border-green-100 p-2">
            <SubredditLane subreddit={subreddit} />
          </div>
        ))}
        <div className="border-2 border-green-100">03</div>
      </div>
    </div>
  );
}

export default App;
