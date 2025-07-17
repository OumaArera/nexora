import React from 'react';
import { Users, ChevronRight } from 'lucide-react';


const IndustryClusters = ({ clusters, onJoinCluster }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Industry Clusters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clusters.map((cluster) => (
          <div key={cluster.id} className="border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div className="ml-3 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">{cluster.name}</h3>
                <p className="text-sm text-gray-600">{cluster.members} members</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">{cluster.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">
                Active: {cluster.activeDiscussions} discussions
              </span>
              <button
                onClick={() => onJoinCluster(cluster.id)}
                className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center"
              >
                Join <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default IndustryClusters;