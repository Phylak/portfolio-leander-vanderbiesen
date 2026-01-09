export interface UserContributions {
  data: {
    user: {
      contributionsCollection: contributionsCollection;
    };
  };
}

export interface contributionsCollection {
  contributionCalendar: {
    totalContributions: number;
    weeks: Week[];
  };
}

type Week = {
  contributionDays: ContributionDay[];
};

type ContributionDay = {
  contributionCount: number;
  date: string;
  weekday: number;
  color: string;
};
