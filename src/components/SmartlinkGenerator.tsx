import { useState } from "react";
import { motion } from "framer-motion";
import { Clipboard, PlusCircle } from "lucide-react";

// Define TypeScript type for Smartlink data
type Smartlink = {
  id: string;
  url: string;
  platform: string;
  clicks: number;
  createdAt: string;
};

// Mock data for Smartlinks
const mockSmartlinkData: Smartlink[] = [
  { id: "A1B2C3", url: "https://resonance.app/smartlink/A1B2C3", platform: "Twitter", clicks: 134, createdAt: "Jun 20, 2024" },
  { id: "D4E5F6", url: "https://resonance.app/smartlink/D4E5F6", platform: "Instagram", clicks: 78, createdAt: "Jun 19, 2024" },
  { id: "G7H8I9", url: "https://resonance.app/smartlink/G7H8I9", platform: "Website", clicks: 220, createdAt: "Jun 18, 2024" },
];

const SmartlinkGenerator: React.FC = () => {
  const [smartLink, setSmartLink] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const generateSmartLink = () => {
    const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    setSmartLink(`https://resonance.app/smartlink/${randomId}`);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(smartLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Smartlink Generator</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Generate and share Smartlinks to track podcast engagement across platforms.
          </p>
        </div>
        <button 
          onClick={generateSmartLink}
          className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          <PlusCircle className="w-4 h-4 mr-2" /> Generate Smartlink
        </button>
      </div>

      {smartLink && (
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg flex items-center justify-between mb-6">
          <p className="text-sm font-medium text-gray-900 dark:text-white break-all">{smartLink}</p>
          <button
            onClick={copyToClipboard}
            className="flex items-center text-purple-600 dark:text-purple-400 text-sm font-medium"
          >
            {copied ? "Copied!" : "Copy"}
            <Clipboard className="ml-2 w-4 h-4" />
          </button>
        </div>
      )}

      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">📌 How to Use Smartlinks?</h3>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
        <li>Copy the generated Smartlink.</li>
        <li>Share it on social media, websites, or newsletters.</li>
        <li>Track analytics such as referral sources and click timestamps.</li>
      </ul>

      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">📊 Recent Smartlink Activity</h3>
      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
        <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="py-2">Smartlink</th>
              <th className="py-2">Platform</th>
              <th className="py-2 text-center">Clicks</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {mockSmartlinkData.map((link, index) => (
              <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                    {link.id}
                  </a>
                </td>
                <td className="py-2">{link.platform}</td>
                <td className="py-2 text-center">{link.clicks}</td>
                <td className="py-2">{link.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default SmartlinkGenerator;