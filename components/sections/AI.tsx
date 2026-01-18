'use client';

import { useCallback, useEffect, useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { DynamicIcon } from 'lucide-react/dynamic';
import Button from '../ui/Button';
import { getGoogleGenAIResponse } from '@/app/actions/googleAI';
import { AIModelValue } from '@/app/types';

const AI_MODELS = [
  { value: AIModelValue.GEMINI_FLASH_LATEST, label: 'Gemini Flash Latest' },
  {
    value: AIModelValue.GEMINI_FLASH_LITE_LATEST,
    label: 'Gemini Flash Lite Latest',
  },
  { value: AIModelValue.GEMINI_3_PRO_PREVIEW, label: 'Gemini 3 Pro Preview' },
  {
    value: AIModelValue.GEMINI_3_FLASH_PREVIEW,
    label: 'Gemini 3 Flash Preview',
  },
  { value: AIModelValue.GEMINI_2_5_FLASH, label: 'Gemini 2.5 Flash' },
  { value: AIModelValue.GEMINI_2_5_PRO, label: 'Gemini 2.5 Pro' },
  { value: AIModelValue.GEMINI_2_5_FLASH_LITE, label: 'Gemini 2.5 Flash Lite' },
] as const;

const MAX_INPUT_LENGTH = 10000;

const AISection: React.FC = () => {
  const [inputCode, setInputCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [AIModel, setAIModel] = useState(AIModelValue.GEMINI_FLASH_LATEST);

  const handleReviewCode = useCallback(async () => {
    if (inputCode.length > MAX_INPUT_LENGTH) {
      setReview(null);
      setHasError(true);
      return;
    }

    setIsLoading(true);
    setHasError(false);

    const response = await getGoogleGenAIResponse(inputCode, AIModel);

    if (!response) {
      setReview(null);
      setHasError(true);
      setIsLoading(false);
      return;
    }

    setReview(response);
    console.log('AI Response:', response);
    setIsLoading(false);
  }, [inputCode, AIModel]);

  return (
    <section id="askAI" className="section-padding">
      <div className="container-narrow">
        <SectionHeading count="05" title="AI code review" />
        <div className="glass rounded-xl flex flex-col p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/20">
              <DynamicIcon name="code-xml" className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold">AI Code Reviewer</h3>
              <p className="text-muted-foreground text-sm">
                Paste your code for instant AI feedback
              </p>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="model-select"
              className="text-xs text-muted-foreground mb-2 block"
            >
              Select AI Model
            </label>
            <select
              id="model-select"
              name="model-select"
              value={AIModel}
              onChange={e => setAIModel(e.target.value as AIModelValue)}
              className="w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {AI_MODELS.map(model => (
                <option key={model.value} value={model.value}>
                  {model.label}
                </option>
              ))}
            </select>
          </div>
          <textarea
            className="flex w-full rounded-md border px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[150px] font-mono text-sm bg-background/50 border-border/50 mb-4 resize-none"
            placeholder="// Paste your code here...
            function example() {
              // Your code...
            }"
            onChange={value => setInputCode(value.target.value)}
          ></textarea>
          <Button
            variant="hero"
            size="lg"
            className="mb-4"
            onClick={handleReviewCode}
            disabled={isLoading || inputCode.trim() === ''}
          >
            {isLoading ? (
              <>
                <DynamicIcon name="loader-2" className="w-4 h-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <DynamicIcon name="sparkles" className="w-4 h-4" />
                Review Code
              </>
            )}
          </Button>
          {review && (
            <div className="bg-background/50 rounded-lg p-4 border border-border/50 max-h-[300px] overflow-y-auto">
              <h5 className="text-sm font-semibold text-primary mb-2">
                AI Review:
              </h5>
              <div className="prose prose-sm prose-invert max-w-none text-muted-foreground">
                <pre className="whitespace-pre-wrap text-xs font-sans">
                  {review}
                </pre>
              </div>
            </div>
          )}

          {!review && !isLoading && !hasError && (
            <p className="text-xs text-muted-foreground text-center">
              Try it! Paste any code snippet to see AI-powered code analysis in
              action. Max length is 10000 characters.
            </p>
          )}
          {hasError && !review && (
            <p className="text-xs text-error-foreground text-center">
              Something went wrong. Try again later or switch to a different
              model (rate limit).
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AISection;
