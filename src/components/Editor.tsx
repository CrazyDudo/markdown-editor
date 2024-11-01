import React from 'react';
import { MarkdownPreview } from './MarkdownPreview';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  isPreviewMode: boolean;
}

export function Editor({ value, onChange, isPreviewMode }: EditorProps) {
  if (isPreviewMode) {
    return (
      <div className="p-6 prose dark:prose-invert max-w-none">
        <MarkdownPreview content={value} />
      </div>
    );
  }

  return (
    <div className="flex h-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-1/2 p-6 bg-gray-50 dark:bg-gray-900 font-mono text-sm resize-none focus:outline-none dark:text-gray-300"
        placeholder="Enter your markdown here..."
      />
      <div className="w-1/2 p-6 border-l border-gray-200 dark:border-gray-700 prose dark:prose-invert max-w-none">
        <MarkdownPreview content={value} />
      </div>
    </div>
  );
}