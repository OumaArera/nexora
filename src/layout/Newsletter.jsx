import React from 'react';

const Newsletter = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = () => {
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="mb-6">
      <h4 className="text-white font-medium mb-3">Stay Updated</h4>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 bg-green-700 text-white placeholder-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors duration-200"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;