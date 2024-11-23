import React from 'react';
import { 
  Github, 
  Twitter, 
  Instagram,
  Youtube,
  Send,
  TreePine,
  MessageSquare,
  Globe
} from 'lucide-react';
import { SocialLink } from './components/SocialLink';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#007cff]">
      {/* Glass morphism container */}
      <div className="absolute inset-0 backdrop-blur-[120px] bg-gradient-to-br from-blue-600/10 to-white/10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#007cff]/30 to-transparent rounded-full blur-3xl animate-slow-spin" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/30 to-transparent rounded-full blur-3xl animate-slow-spin-reverse" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Logo and title */}
          <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl">
              <img 
                src="https://dev.yatricloud.com/assets/img/yatricloud.png" 
                alt="Yatri Cloud Logo" 
                className="w-32 h-32 object-contain animate-float"
              />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Yatri Cloud
            </h1>
          </div>
          
          {/* Subtitle */}
          <h2 className="text-4xl font-light text-blue-100/90 mt-6 animate-fade-in-delay">
            Hello Yatris👋
          </h2>

          {/* Website Link */}
          <a 
            href="https://www.yatricloud.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-105 animate-fade-in-delay-2"
          >
            <Globe size={20} />
            <span className="font-medium">www.yatricloud.com</span>
          </a>
          
          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-fade-in-delay-2">
            <SocialLink href="https://github.com" icon={<Github size={24} />} label="GitHub" />
            <SocialLink href="https://twitter.com" icon={<Twitter size={24} />} label="Twitter" />
            <SocialLink href="https://instagram.com" icon={<Instagram size={24} />} label="Instagram" />
            <SocialLink href="https://youtube.com" icon={<Youtube size={24} />} label="YouTube" />
            <SocialLink href="https://wa.me/your-number" icon={<MessageSquare size={24} />} label="WhatsApp" />
            <SocialLink href="https://t.me/your-username" icon={<Send size={24} />} label="Telegram" />
            <SocialLink href="https://linktr.ee" icon={<TreePine size={24} />} label="Linktree" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;