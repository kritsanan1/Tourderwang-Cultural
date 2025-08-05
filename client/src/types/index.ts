export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'culture' | 'jobs' | 'business' | 'tourism';
}

export interface CulturalSite {
  name: string;
  description: string;
  image: string;
}