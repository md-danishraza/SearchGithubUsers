// CommitGraph.tsx or CommitGraph.jsx
import GitHubCalendar from "react-github-calendar";

function CommitGraph({ username }:{username:string}) {
  return (
    <div className="glassmorphism p-4 mt-4 text-center flex justify-center flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">Commit Activity</h2>
      {/* This calendar automatically fetches contributions for the user */}
      <GitHubCalendar username={username} colorScheme="light" />
    </div>
  );
}

export default CommitGraph;
