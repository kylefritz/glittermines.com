import "./index.css";
import { Analytics } from "@vercel/analytics/react"

export function App() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
      <Analytics />
      <h1 className="text-5xl font-bold leading-tight">Errrbody.biz</h1>
      <h2 className="text-3xl font-bold my-4 leading-tight">Post & find gigs w/ people you <em>kind of</em> know</h2>
      <p className="text-pink-500 font-bold">
        Go to the thread to get started.
      </p>
      <p className="text-xs my-4 leading-tight">
        Link not posted here to keep out spam.
      </p>
    </div>
  );
}

export default App;
