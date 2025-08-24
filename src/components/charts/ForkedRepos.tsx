import type { Repository } from '@/types'
import { ResponsiveContainer } from "recharts";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import forkImage from "/fork.png"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { calculateMostForkedRepos } from "@/utils";
function ForkedRepos({repositories}:{repositories:Repository[]}) {
    // Calculate most forked repositories and return array of {repo: string, count: number}
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  // Define chart configuration for styling and labels
  const chartConfig = {
    repo: {
      label: "Repository",
      color: "#facd12",
    },
  } satisfies ChartConfig;

  return (
    <div className='glassmorphism py-2 '>
      <div className='flex flex-row justify-center'>
      <img src={forkImage} alt="" className='w-8 h-8 dark:invert'/>
      <h2 className="text-2xl font-semibold text-center mb-4">Forked Repos</h2>

      </div>
      {/* ChartContainer handles responsive sizing and theme variables */}
      <ChartContainer config={chartConfig} className="w-full">
        <ResponsiveContainer width="100%" height={300}>
          {/* BarChart is the main container for the bar chart visualization */}
        {/* accessibilityLayer adds ARIA labels for better screen reader support */}
        <BarChart accessibilityLayer data={mostForkedRepos}>
          {/* CartesianGrid adds background gridlines, vertical lines disabled */}
          <CartesianGrid vertical={false} />

          {/* XAxis configures the horizontal axis */}
          <XAxis
            dataKey="repo" // Uses 'repo' property from data for labels
            tickLine={true} // Shows small lines at each tick mark
            tickMargin={10} // Space between tick line and label
            axisLine={false} // Hides the main axis line
            tickFormatter={(value) => value.slice(0, 10)} // Truncates long repo names
          />

          {/* YAxis configures the vertical axis, showing fork counts */}
          <YAxis dataKey="count" />

          {/* ChartTooltip shows details when hovering over bars */}
          <ChartTooltip content={<ChartTooltipContent />} />

          {/* Bar component defines the actual bars in the chart */}
          {/* Uses CSS variable for color and rounded corners (radius) */}
          <Bar dataKey="count" fill="var(--color-primary)" radius={4} />
        </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}

export default ForkedRepos
