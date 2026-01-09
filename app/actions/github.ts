'use server';

import fetchContributions from '@/lib/fetchContributions';

export async function getContributionsByYear(year: number) {
  const data = await fetchContributions(year);

  return data;
}
