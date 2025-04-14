// import React, { useState } from "react";
// import {
//   ClipboardIcon,
//   CheckIcon,
//   CodeBracketIcon,
//   EyeIcon,
// } from "@heroicons/react/24/outline";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// import { motion, AnimatePresence } from "framer-motion";
// import Portfolio from "./HeroSections/PortfolioHero"; // your actual component
// import Home from "./HomePage/MainHome/HomeSecond";

// export default function ComponentPreviewCard({ components }) {
//   const [showCode, setShowCode] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const codeString = `
// import React from "react";

// export function BackgroundBeamsDemo() {
//   return (
//         <div className="relative flex align-middle items-center justify-center pl-18 pr-18 bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(255,255,255,1))] w-full h-screen   dark:bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(0,0,0,1))]">
//         <div className="flex align-middle items-center justify-center  w-full h-screen">
//           <motion.div
//             initial={{ y: 25, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 4, ease: "easeIn" }}
//             className=" flex flex-col items-center relative z-10">
//             <h1 className="text-semihero-second tracking-widest dark:text-white">
//               Sweet, Minimalistic & Snacky
//             </h1>
//             <h1 className="text-hero-second tracking-wide font-bold drop-shadow-[3px_3px_1px_#b07a42] dark:text-white dark:drop-shadow-[2px_2px_1px_#653818]">
//               Chai
//               <span className=" text-chai dark:text-chai-dark drop-shadow-[3px_3px_1px_#b07a42]">
//                 UI{" "}
//                 <motion.div
//                   animate={{ y: ["100%", "-100%"] }}
//                   transition={{
//                     duration: 0.6,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     ease: "easeOut",
//                   }}
//                   className="  absolute top-0 right-4 w-[30px] h-[30px] rounded-full
//                   bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(255,255,255,1))]
//                   dark:bg-[linear-gradient(360deg,_rgba(141,64,2,1),_rgba(255,255,255,1))]
//                   "></motion.div>
//               </span>
//             </h1>
//             {/* random testing  */}

//             {/* random testing  */}
//             <h1 className="text-semihero-second tracking-widest dark:text-white">
//               take a sip of our componenet’s
//             </h1>

//             <div>
//               {/* get the button component  */}
//               <Button width={"250px"} height={"60px"} text={"18px"} />
//             </div>
//           </motion.div>
//           <motion.div
//             initial={{ x: -25, y: 45, opacity: 0 }}
//             animate={{ x: 0, y: 0, opacity: 1 }}
//             transition={{ duration: 3, ease: "easeInOut" }}
//             className="relative z-10  flex items-center justify-end w-[50%]">
//             {/* shake animation and image  */}

//             <motion.img
//               key={key}
//               onClick={handleToggle}
//               animate={isShaking ? shake : {}}
//               whileHover={{ scale: 1.25 }}
//               className="w-[70%] h-[70%] cursor-pointer"
//               src={HeroLogos[theme]}
//               alt="hero"
//             />

//             {/* shake animation and image  */}
//           </motion.div>
//         </div>
//         {/* for the wave animation  */}
//         <motion.div
//           initial={{ y: 25, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 6, ease: "easeIn" }}
//           className="absolute w-full h-[70%] top-[40%]">
//           <WaveAnimation />
//         </motion.div>
//         {/* wave animation ends  */}
//       </div>
//   );
// }
//   `;

//   const copyCode = () => {
//     navigator.clipboard.writeText(codeString);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="bg-white dark:bg-black rounded-xl shadow-md border border-neutral-800 p-4 space-y-4">
//       {/* Toolbar */}
//       <div className="flex justify-between items-center dark:text-white text-black text-l">
//         <div className="flex items-center gap-2">
//           <EyeIcon className="h-5 w-5" />
//           Preview
//         </div>
//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => setShowCode(!showCode)}
//             className="flex items-center gap-1 hover:text-blue-400 transition">
//             <CodeBracketIcon className="h-5 w-5" />
//             {showCode ? "Hide Code" : "Show Code"}
//           </button>
//           <button
//             onClick={copyCode}
//             className="flex items-center gap-1 hover:text-green-400 transition">
//             {copied ? (
//               <CheckIcon className="h-5 w-5" />
//             ) : (
//               <ClipboardIcon className="h-5 w-5" />
//             )}
//             {copied ? "Copied" : "Copy"}
//           </button>
//         </div>
//       </div>

//       {/* Code block */}
//       <AnimatePresence>
//         {showCode && (
//           <motion.pre
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -5 }}
//             className="bg-neutral-800 text-white p-4 rounded-md overflow-x-auto text-sm">
//             <SyntaxHighlighter language="jsx" style={oneDark} showLineNumbers>
//               {codeString}
//             </SyntaxHighlighter>
//           </motion.pre>
//         )}
//       </AnimatePresence>

//       {/* Preview */}
//       <div className="rounded-md overflow-hidden  p-4">

//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  ClipboardIcon,
  CheckIcon,
  CodeBracketIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion, AnimatePresence } from "framer-motion";

export default function ComponentPreviewCard({ codeString, PreviewComponent }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-black rounded-xl shadow-md border border-neutral-800 p-4 space-y-4">
      {/* Toolbar */}
      <div className="flex justify-between items-center dark:text-white text-black text-l">
        <div className="flex items-center gap-2">
          <EyeIcon className="h-5 w-5" />
          Preview
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1 hover:text-blue-400 transition">
            <CodeBracketIcon className="h-5 w-5" />
            {showCode ? "Hide Code" : "Show Code"}
          </button>
          <button
            onClick={copyCode}
            className="flex items-center gap-1 hover:text-green-400 transition">
            {copied ? (
              <CheckIcon className="h-5 w-5" />
            ) : (
              <ClipboardIcon className="h-5 w-5" />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      {/* Code block */}
      <AnimatePresence>
        {showCode && (
          <motion.pre
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="bg-neutral-800 text-white p-4 rounded-md overflow-x-auto text-sm">
            <SyntaxHighlighter language="jsx" style={oneDark} showLineNumbers>
              {codeString}
            </SyntaxHighlighter>
          </motion.pre>
        )}
      </AnimatePresence>

      {/* Preview */}
      <div className="rounded-md overflow-hidden bg-gray-50 dark:bg-neutral-900 p-4">
        <PreviewComponent />
      </div>
    </div>
  );
}
