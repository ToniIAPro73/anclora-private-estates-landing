import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { SocialCopy } from '@/content/site-copy';

interface SocialSidebarProps {
  copy: SocialCopy;
}

export function SocialSidebar({ copy }: SocialSidebarProps) {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="social-sidebar">
      <div className="social-label">{copy.followUs}</div>
      <div className="social-icons">
        {socialLinks.map((social) => (
          <a 
            key={social.label}
            href={social.href} 
            aria-label={social.label}
            className="text-[#D4AF37] hover:text-[#FBF5B7] hover:scale-[1.25] transition-all duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          >
            <social.icon className="w-[20px] h-[20px]" />
          </a>
        ))}
      </div>
    </div>
  );
}
