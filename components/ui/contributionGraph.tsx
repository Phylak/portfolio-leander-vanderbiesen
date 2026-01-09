import { contributionsCollection } from '@/app/types';

type Props = {
  contributionsCollection: contributionsCollection;
};

const weekDaySpans = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const daySpan = (day: string) => {
  return (
    <span className="text-xs text-muted-foreground font-mono h-3 leading-3">
      {day}
    </span>
  );
};

const ContributionGraph: React.FC<Props> = ({ contributionsCollection }) => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-1 mr-2">
        {weekDaySpans.map((day, index) => (
          <div key={index}>{daySpan(day)}</div>
        ))}
      </div>
      
    </div>
  );
};

export default ContributionGraph;
