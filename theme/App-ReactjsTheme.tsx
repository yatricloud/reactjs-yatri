import React, { useState, memo } from 'react';
import { 
  Github, 
  Twitter, 
  Instagram,
  Youtube,
  Send,
  TreePine,
  MessageSquare,
  Plus,
  CheckCircle
} from 'lucide-react';
import { SocialLink } from './components/SocialLink';

const BackgroundEffects = memo(() => (
  <>
    <div className="absolute inset-0 backdrop-blur-[120px] bg-gradient-to-br from-[#282c34]/90 to-[#20232a]/90" />
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#61dafb]/20 to-transparent rounded-full blur-3xl animate-slow-spin" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#61dafb]/20 to-transparent rounded-full blur-3xl animate-slow-spin-reverse" />
    </div>
  </>
));

BackgroundEffects.displayName = 'BackgroundEffects';

const LogoSection = memo(() => (
  <div className="flex items-center gap-6 p-4 bg-[#20232a]/50 rounded-2xl backdrop-blur-sm border border-[#61dafb]/20 shadow-xl">
    <div className="w-32 h-32 flex items-center justify-center animate-float">
      <img 
        src="https://i.ibb.co/fpDj9Zs/YATRI-CLOUD-LOGO.png" 
        alt="Yatri Cloud Logo"
        className="w-24 h-24 object-contain"
        loading="eager"
      />
    </div>
    <div className="flex items-center justify-center">
      <Plus size={32} className="text-[#61dafb] animate-pulse" />
    </div>
    <div className="w-32 h-32 flex items-center justify-center animate-spin-slow">
      <img 
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" 
        alt="React Logo"
        className="w-24 h-24"
        loading="eager"
      />
    </div>
  </div>
));

LogoSection.displayName = 'LogoSection';

function App() {
  const [name, setName] = useState('Yatris');
  const [inputValue, setInputValue] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleApply = () => {
    setName(inputValue || 'Yatris');
    setInputValue('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleApply();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#20232a] via-[#282c34] to-[#373940]">
      <BackgroundEffects />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between py-8 px-4">
        <div className="flex-grow flex flex-col items-center justify-center">
          <LogoSection />

          <div className="text-center space-y-8 max-w-4xl mx-auto mt-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-[#61dafb] to-white bg-clip-text text-transparent">
              Yatri Cloud
            </h1>
            
            <h2 className="text-4xl font-light text-[#61dafb] animate-fade-in-delay">
              Hello {name}👋
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  placeholder="Enter your name"
                  onChange={handleNameChange}
                  onKeyPress={handleKeyPress}
                  className="px-6 py-3 bg-[#20232a]/50 backdrop-blur-sm rounded-full border border-[#61dafb]/20 text-white placeholder-[#61dafb]/50 focus:outline-none focus:ring-2 focus:ring-[#61dafb]/30 transition-all duration-300"
                />
                <button
                  onClick={handleApply}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#61dafb]/80 hover:text-[#61dafb] transition-colors duration-300"
                  aria-label="Apply name change"
                >
                  <CheckCircle size={20} className="hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto space-y-6 mt-8">
          <div className="flex justify-center gap-4 md:gap-8 p-4 bg-[#20232a]/50 backdrop-blur-sm rounded-full border border-[#61dafb]/20 animate-fade-in-delay-2 overflow-x-auto">
            <SocialLink href="https://github.com" icon={<Github size={24} />} label="GitHub" />
            <SocialLink href="https://twitter.com" icon={<Twitter size={24} />} label="Twitter" />
            <SocialLink href="https://instagram.com" icon={<Instagram size={24} />} label="Instagram" />
            <SocialLink href="https://youtube.com" icon={<Youtube size={24} />} label="YouTube" />
            <SocialLink href="https://wa.me/your-number" icon={<MessageSquare size={24} />} label="WhatsApp" />
            <SocialLink href="https://t.me/your-username" icon={<Send size={24} />} label="Telegram" />
            <SocialLink href="https://linktr.ee" icon={<TreePine size={24} />} label="Linktree" />
          </div>

          <div className="text-center text-[#61dafb]/80 text-sm pb-2 animate-fade-in-delay-2">
            © 2024 <a href="https://yatricloud.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#61dafb] transition-colors duration-300">Yatri Cloud</a>. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;