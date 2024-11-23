import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 text-white/80 hover:text-white"
      aria-label={label}
    >
      {icon}
    </a>
  );
}