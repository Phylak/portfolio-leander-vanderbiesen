import { UserContributions } from "@/app/types";

export default async function fetchContributions(year: number): Promise<UserContributions | null> {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
        user(login: "phylak") {
            contributionsCollection(from: "${from}", to: "${to}") {
            contributionCalendar {
                totalContributions
                weeks {
                contributionDays {
                    contributionCount
                    date
                    weekday
                    color
                }
                }
            }
            }
        }
    }`,
      }),
      next: { revalidate: 14400 }, // Revalidate every 4 hours
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub contributions');
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(`GitHub GraphQL error: ${data.errors[0].message}`);
    }

    return data;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return null;
  }
}
