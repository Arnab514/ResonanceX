import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Upload, Clock, Globe, BarChart2, Mic, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const AnalyticsPage: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === 'application/xml' || droppedFile.name.endsWith('.xml')) {
        setFile(droppedFile);
      } else {
        toast.error('Please upload an XML file');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === 'application/xml' || selectedFile.name.endsWith('.xml')) {
        setFile(selectedFile);
      } else {
        toast.error('Please upload an XML file');
      }
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast.error('Please select an XML file to upload');
      return;
    }

    setIsUploading(true);
    
    // Simulate file upload
    setTimeout(() => {
      // Create uploads directory if it doesn't exist
      // In a real app, you would use a server-side API to handle this
      
      toast.success('XML file uploaded successfully!');
      setIsUploading(false);
      
      // Redirect to dashboard
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Connect Your Podcast
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Upload your podcast's XML file to get started with advanced analytics in just 90 seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12"
        >
          <div className="p-8">
            <div 
              className={`border-2 border-dashed rounded-lg p-12 text-center ${
                isDragging 
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
                  : 'border-gray-300 dark:border-gray-700'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center">
                <Upload className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {file ? file.name : 'Drag and drop your XML file here'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {file 
                    ? `File size: ${(file.size / 1024).toFixed(2)} KB` 
                    : 'or click to browse your files'
                  }
                </p>
                
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".xml,application/xml"
                  onChange={handleFileChange}
                />
                
                {!file && (
                  <label
                    htmlFor="file-upload"
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg cursor-pointer transition-colors duration-200"
                  >
                    Select XML File
                  </label>
                )}
                
                {file && (
                  <button
                    onClick={handleUpload}
                    disabled={isUploading}
                    className={`px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200 ${
                      isUploading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isUploading ? 'Uploading...' : 'Upload and Connect'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            How to find your podcast XML file
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    From Spotify for Podcasters
                  </h3>
                  <div className="mt-2 text-gray-600 dark:text-gray-300">
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Log in to your Spotify for Podcasters account</li>
                      <li>Select your podcast from the dashboard</li>
                      <li>Go to "Settings" and then "Distribution"</li>
                      <li>Find the "RSS feed" section and copy the URL</li>
                      <li>Open the URL in a new tab and save the XML file</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    From Apple Podcasts Connect
                  </h3>
                  <div className="mt-2 text-gray-600 dark:text-gray-300">
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Log in to Apple Podcasts Connect</li>
                      <li>Select your podcast</li>
                      <li>Go to "Show Details"</li>
                      <li>Find the "RSS feed" field and copy the URL</li>
                      <li>Open the URL in a new tab and save the XML file</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsPage;