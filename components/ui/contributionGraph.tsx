import { contributionsCollection } from '@/app/types';
import { getContributionLevel, levelColors } from '@/lib/utils';
import React, { useMemo } from 'react';

type Props = {
  contributionsCollection: contributionsCollection;
};

const ContributionGraph: React.FC<Props> = ({ contributionsCollection }) => {
  const weeks = contributionsCollection.contributionCalendar.weeks;

  const maxDailyCount = useMemo(() => {
    return Math.max(
      ...weeks.flatMap(week =>
        week.contributionDays.map(day => day.contributionCount)
      )
    );
  }, [weeks]);

  const monthLabelData = useMemo(() => {
    return weeks.reduce(
      (acc, week, index) => {
        const firstDayOfMonth = week.contributionDays[0].date;
        const monthName = new Date(firstDayOfMonth).toLocaleString('en-GB', {
          month: 'short',
        });

        if (index === 0 || monthName !== acc[acc.length - 1].name) {
          acc.push({ name: monthName, index });
        }
        return acc;
      },
      [] as { name: string; index: number }[]
    );
  }, [weeks]);

  return (
    <div className="flex flex-col gap-2 rounded-lg">
      <div className="grid grid-flow-col auto-cols-[10px] gap-[3px] text-xs text-muted-foreground ml-9">
        {monthLabelData.map((month, i) => (
          <span key={i} style={{ gridColumnStart: month.index + 1 }}>
            {month.name}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <div className="grid grid-rows-7 text-xs text-muted-foreground pr-1 leading-[10px] gap-y-[3px]">
          <span className="row-start-2">Mon</span>
          <span className="row-start-4">Wed</span>
          <span className="row-start-6">Fri</span>
        </div>

        <div className="grid grid-flow-col grid-rows-7 auto-cols-[10px] gap-[3px]">
          {weeks.map((week, weekIndex) => (
            <React.Fragment key={weekIndex}>
              {week.contributionDays.map(day => {
                const level = getContributionLevel(
                  day.contributionCount,
                  maxDailyCount
                );

                return (
                  <div
                    key={day.date}
                    className={`w-[10px] h-[10px] rounded-[2px] ${levelColors[level as keyof typeof levelColors]}`}
                    style={{
                      gridRowStart: day.weekday + 1,
                    }}
                    title={`${day.contributionCount} contributions on ${day.date}`}
                  />
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;
