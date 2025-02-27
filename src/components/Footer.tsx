import React from 'react';
import { Mic, Twitter, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <Mic className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">PodMetrics</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Advanced podcast analytics to help you grow your audience and understand your listeners.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Pricing</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">API</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Integrations</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Documentation</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Guides</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Blog</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Support</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                <Mail size={20} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} PodMetrics. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;