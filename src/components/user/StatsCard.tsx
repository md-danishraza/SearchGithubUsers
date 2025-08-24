import { Card, CardTitle, CardDescription } from '../ui/card';

type StatsCardProps = {
  title: string;
  count: number;
};

function StatsCard({ title, count }: StatsCardProps) {
  return (
    <Card className='p-2 glassmorphism'>
      <div className='flex flex-row justify-between items-center p-2'>
        <CardTitle>{title}</CardTitle>
        <CardDescription className='text-primary text-2xl'>{count}</CardDescription>
      </div>
    </Card>
  );
}

export default StatsCard;