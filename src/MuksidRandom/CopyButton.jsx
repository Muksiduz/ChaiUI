import { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const InstallCard = ({ command = "npm install your-package" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full  mt-6 max-w-8xl mx-auto p-4 rounded-xl border shadow-sm bg-white dark:bg-neutral-900 dark:border-neutral-700">
      <div className="flex items-center gap-4 justify-between">
        <code className="w-full  h-full text-sm md:text-base text-gray-800 dark:text-gray-200 font-mono">
          <SyntaxHighlighter language="jsx" style={oneDark} showLineNumbers>
            {command}
          </SyntaxHighlighter>
        </code>
        <button
          onClick={handleCopy}
          className="flex dark:text-white items-center gap-1 text-sm px-3 py-1.5  rounded-md border border-gray-300 dark:border-neutral-600 
                     hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
          {copied ? (
            <>
              <CheckIcon className="w-5 h-5 text-green-500" />
              Copied
            </>
          ) : (
            <>
              <ClipboardIcon className="w-5 h-5 text-gray-600 dark:text-white " />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default InstallCard;
