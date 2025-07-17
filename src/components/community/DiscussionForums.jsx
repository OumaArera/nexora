import React from 'react';
import { MessageCircle } from 'lucide-react';


const DiscussionForums = ({ forums, onJoinForum }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Discussion Forums</h2>
      <div className="space-y-4">
        {forums.map((forum) => (
          <div key={forum.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{forum.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{forum.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  {forum.posts} posts • {forum.members} members • Last active {forum.lastActive}
                </div>
              </div>
              <button
                onClick={() => onJoinForum(forum.id)}
                className="ml-4 bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition-colors"
              >
                Join Forum
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForums;