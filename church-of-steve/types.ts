
export interface NavItem {
  label: string;
  href: string;
}

export interface Tenet {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Miracle {
  id: string;
  author: string;
  role: string;
  time: string;
  content: string;
  stars: number;
  miracleId: string;
  likes: number;
  imageUrl?: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  month: string;
  time: string;
  location: string;
  image: string;
  cta: string;
}
