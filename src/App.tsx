import React, { useState } from 'react';
import { Header } from './components/Header';
import { Editor } from './components/Editor';
import { defaultMarkdown } from './utils/defaultMarkdown';

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleSave = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMarkdown(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        isPreviewMode={isPreviewMode}
        onPreviewToggle={() => setIsPreviewMode(!isPreviewMode)}
        onSave={handleSave}
        onFileUpload={handleFileUpload}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden min-h-[calc(100vh-12rem)]">
          <Editor
            value={markdown}
            onChange={setMarkdown}
            isPreviewMode={isPreviewMode}
          />
        </div>
      </main>
    </div>
  );
}

export default App;