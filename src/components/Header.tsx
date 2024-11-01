import React from 'react';
import { FileText, Eye, Github, Save, Download } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  isPreviewMode: boolean;
  onPreviewToggle: () => void;
  onSave: () => void;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Header({ isPreviewMode, onPreviewToggle, onSave, onFileUpload }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Markdown Editor</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={onPreviewToggle}
              variant="primary"
            >
              {isPreviewMode ? <FileText className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
              {isPreviewMode ? 'Edit' : 'Preview'}
            </Button>
            <Button
              onClick={onSave}
              variant="secondary"
            >
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <label className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
              <Download className="h-4 w-4 mr-2" />
              Open
              <input
                type="file"
                accept=".md,.markdown"
                onChange={onFileUpload}
                className="hidden"
              />
            </label>
            <a
              href="https://github.com/markdown-it/markdown-it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}