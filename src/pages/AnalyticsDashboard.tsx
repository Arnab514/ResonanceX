import React, { useState, useEffect } from 'react';
import SmartlinkGenerator from '../components/SmartlinkGenerator';
import { motion } from 'framer-motion';
import { 
  BarChart2, 
  Link, 
  Globe, 
  Clock, 
  TrendingUp, 
  Users, 
  Calendar, 
  Headphones, 
  Play, 
  Pause,
  ChevronDown,
  ChevronUp,
  Download,
  Mail,
  User,
  FileText,
  Zap,
  MessageCircle,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';


const listenerData = [
  { name: 'Jan', listeners: 4000 },
  { name: 'Feb', listeners: 3000 },
  { name: 'Mar', listeners: 5000 },
  { name: 'Apr', listeners: 7000 },
  { name: 'May', listeners: 6000 },
  { name: 'Jun', listeners: 8000 },
  { name: 'Jul', listeners: 10000 },
];

const episodeData = [
  { name: 'Ep 1', downloads: 4200, streams: 2400 },
  { name: 'Ep 2', downloads: 3800, streams: 1800 },
  { name: 'Ep 3', downloads: 5600, streams: 2900 },
  { name: 'Ep 4', downloads: 7800, streams: 3800 },
  { name: 'Ep 5', downloads: 9200, streams: 4600 },
];



const platformData = [
  { name: 'Spotify', value: 45 },
  { name: 'Apple', value: 30 },
  { name: 'Google', value: 15 },
  { name: 'Other', value: 10 },
];

const geographicData = [
  { name: 'USA', value: 40 },
  { name: 'UK', value: 15 },
  { name: 'Canada', value: 12 },
  { name: 'Australia', value: 8 },
  { name: 'Germany', value: 7 },
  { name: 'Other', value: 18 },
];

const timeData = [
  { time: '6am', listeners: 1200 },
  { time: '9am', listeners: 2800 },
  { time: '12pm', listeners: 3900 },
  { time: '3pm', listeners: 2700 },
  { time: '6pm', listeners: 1800 },
  { time: '9pm', listeners: 2500 },
  { time: '12am', listeners: 1000 },
  { time: '3am', listeners: 500 },
];


const mockOwnerData = {
  name: "ResonanceX",
  email: "team@resonancex.com",
  plan: "Enterprise",
  membersSince: "2023-05-15",
  podcastCount: 12,
  totalEpisodes: 156,
  xmlLastUpdated: "2023-11-28T14:32:45Z"
};

const deviceData = [
  { labels: "Apr 2", Mobile: 150, Desktop: 200 },
  { labels: "Apr 7", Mobile: 170, Desktop: 250 },
  { labels: "Apr 12", Mobile: 160, Desktop: 240 },
  { labels: "Apr 17", Mobile: 180, Desktop: 280 },
  { labels: "Apr 22", Mobile: 190, Desktop: 300 },
  { labels: "Apr 27", Mobile: 200, Desktop: 320 },
  { labels: "May 2", Mobile: 195, Desktop: 310 },
  { labels: "May 7", Mobile: 210, Desktop: 340 },
  { labels: "May 12", Mobile: 205, Desktop: 330 },
  { labels: "May 17", Mobile: 220, Desktop: 350 },
  { labels: "May 22", Mobile: 215, Desktop: 340 },
  { labels: "May 27", Mobile: 230, Desktop: 370 },
];

const retentionData = [
  { labels: "Week 1", "Returning Listeners": 180, "New Listeners": 100 },
  { labels: "Week 2", "Returning Listeners": 250, "New Listeners": 150 },
  { labels: "Week 3", "Returning Listeners": 190, "New Listeners": 120 },
  { labels: "Week 4", "Returning Listeners": 220, "New Listeners": 140 },
  { labels: "Week 5", "Returning Listeners": 230, "New Listeners": 130 },
  { labels: "Week 6", "Returning Listeners": 240, "New Listeners": 160 },
];

const sentimentResults = [
  { month: "Jan", positive: 60, neutral: 30, negative: 10 },
  { month: "Feb", positive: 75, neutral: 50, negative: 25 },
  { month: "Mar", positive: 50, neutral: 40, negative: 20 },
  { month: "Apr", positive: 90, neutral: 45, negative: 15 },
  { month: "May", positive: 85, neutral: 60, negative: 30 },
  { month: "Jun", positive: 95, neutral: 55, negative: 25 },
];

const rawResults = [
  { text: "Loved the episode!", sentiment: { pos: 0.8, neu: 0.2, neg: 0 } },
  { text: "Good discussion but could be better.", sentiment: { pos: 0.4, neu: 0.5, neg: 0.1 } },
  { text: "Didn’t like the quality.", sentiment: { pos: 0.1, neu: 0.3, neg: 0.6 } },
];

const COLORS = ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe', '#f5f3ff'];

const AnalyticsDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [ownerData, setOwnerData] = useState(mockOwnerData);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Hi, Welcome {ownerData.name} team at the platform
              </h2>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail size={16} className="mr-2" />
                <span>Owner's mail id - {ownerData.email}</span>
              </div>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <FileText size={16} className="text-purple-600 dark:text-purple-400 mr-2" />
                <h3 className="font-medium text-purple-700 dark:text-purple-300">XML Data Source</h3>
              </div>
              
              {isLoading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-2 bg-purple-200 dark:bg-purple-700 rounded"></div>
                    <div className="h-2 bg-purple-200 dark:bg-purple-700 rounded w-5/6"></div>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p>Plan: {ownerData.plan}</p>
                  <p>Member Since: {new Date(ownerData.membersSince).toLocaleDateString()}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    XML Last Updated: {new Date(ownerData.xmlLastUpdated).toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Podcast Analytics Dashboard</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Comprehensive insights for your podcast "The Growth Mindset"
          </p>
        </motion.div>

        
        <div className="mb-8 flex justify-between items-center">
          <div className="flex space-x-2">
            <button 
              onClick={() => setTimeRange('7d')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeRange === '7d' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              7 Days
            </button>
            <button 
              onClick={() => setTimeRange('30d')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeRange === '30d' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              30 Days
            </button>
            <button 
              onClick={() => setTimeRange('90d')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeRange === '90d' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              90 Days
            </button>
            <button 
              onClick={() => setTimeRange('1y')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeRange === '1y' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              1 Year
            </button>
          </div>
          <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
            <Download size={16} className="mr-2" />
            Export Data
          </button>
        </div>

        <SmartlinkGenerator />

        
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Headphones className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Listeners</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">42,893</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+12.5% from last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Play className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Completion Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">78.3%</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+3.2% from last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Countries Reached</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">87</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+5 new countries</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Listen Time</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">32:18</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+2:45 from last month</span>
              </div>
            </div>
          </div>
        </motion.div>

        
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Audience Growth</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Monthly listener growth over time</p>
            </div>
            <button 
              onClick={() => toggleSection('audience')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {expandedSection === 'audience' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          {(expandedSection === 'audience' || expandedSection === null) && (
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={listenerData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorListeners" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderRadius: '0.5rem',
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="listeners" 
                    stroke="#8b5cf6" 
                    fillOpacity={1} 
                    fill="url(#colorListeners)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        </motion.div>

        <motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.5 }}
  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
>
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Sentiment Analysis</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
        Tracking audience sentiment based on social media interactions over time.
      </p>
    </div>
    <button 
      onClick={() => toggleSection('sentiment')}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {expandedSection === 'sentiment' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
  </div>

  {(expandedSection === 'sentiment' || expandedSection === null) && (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow">
      
      <div className="h-96"> {/* Increased height for elongated graph */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sentimentResults}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                borderRadius: '0.5rem',
                border: 'none'
              }} 
            />
            <Legend />
            <Bar dataKey="positive" fill="#4ade80" radius={[4, 4, 0, 0]} />
            <Bar dataKey="neutral" fill="#facc15" radius={[4, 4, 0, 0]} />
            <Bar dataKey="negative" fill="#f87171" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      
      <div className="mt-6 space-y-4">
        {rawResults.slice(0, 3).map((tweet, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg flex items-start space-x-4">
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <MessageCircle className="text-gray-500 dark:text-gray-300" size={18} />
            </div>
            <div className="flex-1">
              <p className="text-gray-900 dark:text-white">{tweet.text}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                <ThumbsUp className="inline-block w-4 h-4 text-green-400 mr-1" /> {tweet.sentiment.pos.toFixed(2)} | 
                <TrendingUp className="inline-block w-4 h-4 text-yellow-400 mx-1" /> {tweet.sentiment.neu.toFixed(2)} | 
                <ThumbsDown className="inline-block w-4 h-4 text-red-400 ml-1" /> {tweet.sentiment.neg.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</motion.div>

        
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Episode Performance</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Downloads and streams by episode</p>
            </div>
            <button 
              onClick={() => toggleSection('episodes')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {expandedSection === 'episodes' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          {(expandedSection === 'episodes' || expandedSection === null) && (
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={episodeData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderRadius: '0.5rem',
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="downloads" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="streams" fill="#c4b5fd" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </motion.div>

        <motion.div 
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.8 }}
  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
>
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Listeners by Device</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">Tracking how your audience engages based on their device type.</p>
    </div>
    <button 
      onClick={() => toggleSection('device')}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {expandedSection === 'device' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
  </div>

  {(expandedSection === 'device' || expandedSection === null) && (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={deviceData} margin={{ top: 20, right: 40, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="labels" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip 
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '0.5rem', border: 'none' }}
          />
          <Legend />
          <Line type="linear" dataKey="Mobile" stroke="#f87171" strokeWidth={2} />
          <Line type="linear" dataKey="Desktop" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )}
</motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Geographic Distribution</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Top countries by listeners</p>
              </div>
              <button 
                onClick={() => toggleSection('geographic')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {expandedSection === 'geographic' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            
            {(expandedSection === 'geographic' || expandedSection === null) && (
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={geographicData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {geographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                        borderRadius: '0.5rem',
                        border: 'none',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </motion.div>

          

          
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Listening Platforms</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Distribution across platforms</p>
              </div>
              <button 
                onClick={() => toggleSection('platforms')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {expandedSection === 'platforms' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            
            {(expandedSection === 'platforms' || expandedSection === null) && (
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                        borderRadius: '0.5rem',
                        border: 'none',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div 
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.7 }}
  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
>
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Spotify Weekly Listener Retention</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">Tracking how your audience retains over time on Spotify.</p>
    </div>
    <button 
      onClick={() => toggleSection('retention')}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {expandedSection === 'retention' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
  </div>

  {(expandedSection === 'retention' || expandedSection === null) && (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={retentionData} margin={{ top: 20, right: 40, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="labels" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip 
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '0.5rem', border: 'none' }}
          />
          <Legend />
          <Line type="monotone" dataKey="Returning Listeners" stroke="#4ade80" strokeWidth={2} />
          <Line type="monotone" dataKey="New Listeners" stroke="#818cf8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )}
</motion.div>

        
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Listening Time Analysis</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">When your audience listens throughout the day</p>
            </div>
            <button 
              onClick={() => toggleSection('time')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {expandedSection === 'time' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          {(expandedSection === 'time' || expandedSection === null) && (
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={timeData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderRadius: '0.5rem',
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="listeners" 
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    dot={{ r: 4, fill: '#8b5cf6' }}
                    activeDot={{ r: 6, fill: '#8b5cf6' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </motion.div>

        
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
        >
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
              <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">AI-Powered Recommendations</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Insights to help grow your podcast</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
              <h3 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Optimal Release Time</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Based on your audience's listening patterns, consider releasing new episodes on Tuesdays at 7:00 AM EST for maximum initial engagement.
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
              <h3 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Content Recommendation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Episodes featuring interviews with industry experts receive 32% more engagement. Consider increasing this type of content in your upcoming schedule.
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
              <h3 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Growth Opportunity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                You have a growing audience in Canada but limited marketing there. Consider targeted promotion to capitalize on this emerging market.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;