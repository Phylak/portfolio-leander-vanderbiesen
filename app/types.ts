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

export enum AIModelValue {
  GEMINI_FLASH_LATEST = 'gemini-flash-latest',
  GEMINI_FLASH_LITE_LATEST = 'gemini-flash-lite-latest',
  GEMINI_3_PRO_PREVIEW = 'gemini-3-pro-preview',
  GEMINI_3_FLASH_PREVIEW = 'gemini-3-flash-preview',
  GEMINI_2_5_FLASH = 'gemini-2.5-flash',
  GEMINI_2_5_PRO = 'gemini-2.5-pro',
  GEMINI_2_5_FLASH_LITE = 'gemini-2.5-flash-lite',
}