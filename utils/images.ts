type CarouselImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const images: CarouselImage[] = [
  {
    src: "https://owupujvwaogwwojbsryt.supabase.co/storage/v1/object/public/CarouselImages/carouselImg3.jpg",
    alt: "Image 3",
    width: 600,
    height: 400,
  },
  {
    src: "https://owupujvwaogwwojbsryt.supabase.co/storage/v1/object/public/CarouselImages/carousel1.jpg",
    alt: "Image 1",
    width: 600,
    height: 400,
  },
  {
    src: "https://owupujvwaogwwojbsryt.supabase.co/storage/v1/object/public/CarouselImages/carousel2.jpg",
    alt: "Image 2",
    width: 600,
    height: 400,
  },
];

type aboutImage = {
  src: string;
  alt: string;
};

export const aboutImage: aboutImage = {
  src: "https://owupujvwaogwwojbsryt.supabase.co/storage/v1/object/public/CarouselImages/about-us.jpg",
  alt: "aboutUs",
};
