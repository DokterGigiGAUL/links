import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Mail, ExternalLink } from 'lucide-react';

const ModernLanding = () => {
  const links = [
    {
      title: "Portfolio",
      url: "https://portfolio.example.com",
      icon: <ExternalLink className="w-5 h-5" />,
      color: "bg-purple-500"
    },
    {
      title: "GitHub",
      url: "https://github.com/yourusername",
      icon: <Github className="w-5 h-5" />,
      color: "bg-gray-800"
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="w-5 h-5" />,
      color: "bg-blue-600"
    },
    {
      title: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: <Twitter className="w-5 h-5" />,
      color: "bg-sky-500"
    },
    {
      title: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: <Instagram className="w-5 h-5" />,
      color: "bg-pink-600"
    },
    {
      title: "Email Me",
      url: "mailto:you@example.com",
      icon: <Mail className="w-5 h-5" />,
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-2xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-white/20">
            <img 
              src="/api/placeholder/128/128" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">Your Name</h1>
          <p className="text-gray-400 text-center max-w-md mb-4">
            Frontend Developer | UI/UX Designer | Tech Enthusiast
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`block ${link.color} hover:opacity-90 transition-all duration-200 transform hover:scale-105 rounded-xl p-4 shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {link.icon}
                  <span className="font-medium">{link.title}</span>
                </div>
                <ExternalLink className="w-5 h-5 opacity-75" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-400">
          <p>© 2024 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default ModernLanding;
