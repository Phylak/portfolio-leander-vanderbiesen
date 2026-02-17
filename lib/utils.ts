import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function downloadResume() {
  try {
    const response = await fetch('/CV-Leander-Vanderbiesen.pdf');

    if (!response.ok) {
      throw new Error('Download failed');
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV-Leander-Vanderbiesen.pdf';
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (e) {
    console.error('Something went wrong downloading file:', e);
  }
}

export function getContributionLevel(count: number, maxCount: number): number {
  if (count === 0) return 0;

  const step = maxCount / 4;

  if (count <= step) return 1;
  if (count <= step * 2) return 2;
  if (count <= step * 3) return 3;

  return 4;
}

export const levelColors = {
  0: 'bg-muted/30',
  1: 'bg-primary/30',
  2: 'bg-primary/60',
  3: 'bg-primary/80',
  4: 'bg-primary',
};
