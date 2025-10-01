import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
        {
          text: 'Home',
          href: getPermalink('/'),
        },
        {
          text: 'About',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Web3 Development', href: '#' },
        { text: 'Blockchain Solutions', href: '#' },
        { text: 'Smart Contracts', href: '#' },
        { text: 'DeFi Applications', href: '#' },
        { text: 'NFT Platforms', href: '#' },
        { text: 'Consulting', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Our Team', href: '#team' },
        { text: 'Careers', href: '#' },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Partners', href: '#partners' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: '#' },
        { text: 'Case Studies', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Support', href: '#' },
        { text: 'Community', href: '#' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/Web3WayAfrica' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/web3way-africa/posts/' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/web3wayAfrica' },
  ],
  footNote: `
    © 2025 Web3WayAfrica. All rights reserved.
  `,
};
