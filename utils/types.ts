export type Car = {
  name: string;
  brand: string;
  year: number;
  price: string;
  transmission: string;
  featured: boolean;
  image: string;
};

export type CarPageProps = {
  params: {
    id: string;
  };
};
