
export interface Trip {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: 'Montaña' | 'Playa' | 'Selva' | 'Cultural';
}

export interface Review {
  id: string;
  author: string;
  comment: string;
  rating: number;
}
