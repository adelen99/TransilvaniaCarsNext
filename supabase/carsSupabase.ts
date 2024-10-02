import { createClient, PostgrestResponse } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library to generate unique ids

// Define the type for the car entries
type Car = {
  id: string;
  name: string;
  brand: string;
  year: string;
  price: string;
  transmission: string;
  featured: boolean;
};

// Initialize your Supabase client with your project details
const supabaseUrl: string = "your-supabase-url";
const supabaseKey: string = "your-supabase-key";
const supabase = createClient(supabaseUrl, supabaseKey);

const addCars = async (): Promise<void> => {
  // Add unique UUID for each car entry
  const cars: Car[] = [
    {
      id: uuidv4(),
      name: "Mercedes Sprinter 2023",
      brand: "mercedes",
      year: "2023",
      price: "variabil",
      transmission: "manuală",
      featured: false,
    },
    {
      id: uuidv4(),
      name: "Mercedes Sprinter 2022",
      brand: "mercedes",
      year: "2022",
      price: "variabil",
      transmission: "manuală",
      featured: false,
    },
    {
      id: uuidv4(),
      name: "Skoda Octavia 2023",
      brand: "skoda",
      year: "2023",
      price: "50€ / zi",
      transmission: "automată",
      featured: true,
    },
    {
      id: uuidv4(),
      name: "Skoda Octavia 2018",
      brand: "skoda",
      year: "2023",
      price: "30€ / zi",
      transmission: "manuală",
      featured: false,
    },
    {
      id: uuidv4(),
      name: "Skoda Octavia 2017",
      brand: "skoda",
      year: "2017",
      price: "30€ / zi",
      transmission: "manuală",
      featured: false,
    },
    {
      id: uuidv4(),
      name: "Skoda Fabia 2021",
      brand: "skoda",
      year: "2021",
      price: "20€ / zi",
      transmission: "manuală",
      featured: true,
    },
    {
      id: uuidv4(),
      name: "Skoda Kodiaq 2022",
      brand: "skoda",
      year: "2022",
      price: "70€ / zi",
      transmission: "automată",
      featured: true,
    },
    {
      id: uuidv4(),
      name: "Volkswagen Tiguan 2018",
      brand: "volkswagen",
      year: "2018",
      price: "40€ / zi",
      transmission: "manuală",
      featured: false,
    },
    {
      id: uuidv4(),
      name: "Volkswagen Touran 2018",
      brand: "volkswagen",
      year: "2018",
      price: "40€ / zi",
      transmission: "automată",
      featured: false,
    },
    {
      id: uuidv4(),
      name: "Volkswagen Passat 2018",
      brand: "volkswagen",
      year: "2018",
      price: "40€ / zi",
      transmission: "automată",
      featured: false,
    },
    {
      id: uuidv4(),
      name: "Mercedes Vito 2020",
      brand: "mercedes",
      year: "2020",
      price: "100€ / zi",
      transmission: "automată",
      featured: false,
    },
    {
      id: uuidv4(),
      name: "Mercedes Vito 2023",
      brand: "mercedes",
      year: "2023",
      price: "100€ / zi",
      transmission: "automată",
      featured: false,
    },
    {
      id: uuidv4(),
      name: "Mercedes Vito 2024",
      brand: "mercedes",
      year: "2024",
      price: "100€ / zi",
      transmission: "automată",
      featured: false,
    },
  ];
};
