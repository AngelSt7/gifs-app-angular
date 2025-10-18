import { Link } from './interface';

export const LINKS: Link[] = [
  {
    label: "Dashboard",
    description: "Overview of all data",
    icon: 'featherAirplay',
    href: '/dashboard'
  },
  {
    label: "Trending",
    description: "View trending GIFs",
    icon: 'featherTrendingUp',
    href: '/dashboard/trending'
  },
  {
    label: "Search",
    description: "Search for GIFs",
    icon: 'featherSearch',
    href: '/dashboard/search'
  }
];
