'use client';

import { contributionsCollection } from '@/app/types';
import SectionHeading from '../ui/SectionHeading';
import { useCallback, useEffect, useState } from 'react';
import Button from '../ui/Button';
import { getContributionsByYear } from '@/app/actions/github';
import { DynamicIcon } from 'lucide-react/dynamic';
import ContributionGraph from '../ui/contributionGraph';
import { levelColors } from '@/lib/utils';
import useWindowSize from '@/lib/hooks/useWindowSize';

const years = [2026, 2025, 2024, 2023, 2022, 2021];

type Props = {
  userContributionsCollection: contributionsCollection;
};

const Github: React.FC<Props> = ({ userContributionsCollection }) => {
  const [contributions, setContributions] = useState<contributionsCollection>(
    userContributionsCollection
  );
  const [activeYear, setActiveYear] = useState<number>(
    new Date().getFullYear()
  );

  const updateContributions = useCallback(async (year: number) => {
    const data = await getContributionsByYear(year);

    if (!data) {
      return;
    }

    setActiveYear(year);
    setContributions(data.data.user.contributionsCollection);
  }, []);

  return (
    <section id="github" className="section-padding">
      <div className="container-narrow">
        <SectionHeading count="04" title="Github Activity" />
        <div className="glass p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <DynamicIcon
                name="github"
                size="24"
                className="mr-2 text-primary"
              />
              Contribution graph
            </h3>
            <p className="text-right md:text-left text-xs text-muted-foreground font-mono">
              Total contributions:{' '}
              <span className="text-primary">
                {contributions.contributionCalendar.totalContributions}
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="overflow-x-auto mr-8 xl:mr-0">
              <ContributionGraph contributionsCollection={contributions} />
            </div>
            <div>
              {years.map(year => (
                <div key={year} className="mb-2">
                  <Button
                    onClick={async () => await updateContributions(year)}
                    variant={activeYear === year ? 'default' : 'outline'}
                    size={useWindowSize().width! < 768 ? 'sm' : 'default'}
                    aria-label={`View contributions for year ${year}`}
                  >
                    {year}
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Less</span>
            {[0, 1, 2, 3, 4].map(level => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${levelColors[level as keyof typeof levelColors]}`}
              />
            ))}
            <span className="text-xs text-muted-foreground">More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
