

import { type Repository } from "@/types";
import { ResponsiveContainer } from "recharts";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import starImage from "/star.png"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { calculateMostStarredRepos } from "@/utils";

function StarredRepos({repositories}:{repositories:Repository[]}) {
    // Calculate most starred repositories and return array of {repo: string, stars: number}
  const popularRepos = calculateMostStarredRepos(repositories);

  // Configuration for the chart's styling and labels
  const chartConfig = {
    repo: {
      label: "Repository",
      color: "#e11c47", // Red color for the bars
    },
  } satisfies ChartConfig;

  return (
    <div className='glassmorphism py-2'>
       <div className='flex flex-row justify-center '>
       <img src={starImage} alt="" className='w-8 h-8 dark:invert'/>
      <h2 className="text-2xl font-semibold text-center mb-4">Popular Repos</h2>

      </div>
      {/* ChartContainer: Custom wrapper component that handles responsive sizing and theme */}
      <ChartContainer config={chartConfig} className="w-full">
        <ResponsiveContainer  width="100%" height={300}>
          {/* BarChart: Main chart component from recharts */}
        {/* accessibilityLayer adds ARIA labels for better screen reader support */}
        <BarChart accessibilityLayer data={popularRepos}>
          {/* CartesianGrid: Adds horizontal guide lines (vertical disabled) */}
          <CartesianGrid vertical={false}  />

          {/* XAxis: Horizontal axis showing repository names */}
          {/* tickFormatter truncates long repository names to 10 characters */}
          <XAxis
            dataKey="repo"
            tickLine={false}
            tickMargin={10}
            tick={{ fill: "var(--background)", fontSize: 12 }}
            tickFormatter={(value) => value.slice(0, 10)}
          />

          {/* YAxis: Vertical axis showing star counts */}
          <YAxis dataKey="stars" tick={{ fill: "var(--background)", fontSize: 12 }}/>

          {/* ChartTooltip: Custom tooltip component that appears on hover */}
          {/* ChartTooltipContent: Renders the actual content inside the tooltip */}
          <ChartTooltip content={<ChartTooltipContent />} />

          {/* Bar: The actual bar elements of the chart */}
          {/* fill uses CSS variable for consistent theming */}
          {/* radius adds rounded corners to the bars */}
          <Bar dataKey="stars" fill="var(--color-primary)" radius={4} />
        </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}

export default StarredRepos
