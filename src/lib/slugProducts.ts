// lib/slugProducts.ts

export interface SelectProduct {
  id: string;
  name: string;
  price: number;
  currency: string;
  image_url: string;
  description: string;
  stock: number;
}

export const slugProductMap: { [key: string]: SelectProduct[] } = {
  tech: [
    {
      id: "prod1",
      name: "4K Ultra HD Smart TV",
      price: 799.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/tv-H4l26crxtm9EQHLWc0ddrsXZ0V0Ofw.webp",
      description:
        "A stunning 4K Ultra HD Smart TV with vibrant colors and deep contrasts.",
      stock: 10,
    },
    {
      id: "prod2",
      name: "Gaming Laptop Pro",
      price: 1299.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/laptop-9bgUhjY491hkxiMDeSgqb9R5I3lHNL.webp",
      description:
        "High-performance gaming laptop with the latest GPU and fast SSD.",
      stock: 5,
    },
    {
      id: "prod3",
      name: "Smartwatch Elite",
      price: 249.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/watch-S2VeARK6sEM9QFg4yNQNjHFaHc3sXv.webp",
      description:
        "Elegant smartwatch with health tracking and customizable watch faces.",
      stock: 15,
    },
    {
      id: "prod4",
      name: "Bluetooth Speaker Max",
      price: 99.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/speaker-4Zk0Ctx5AvxnwNNTFWVK4Gtpru4YEf.webp",
      description:
        "Portable Bluetooth speaker with rich sound and long battery life.",
      stock: 20,
    },
  ],
  tech2: [
    {
      id: "prod2",
      name: "Gaming Laptop Pro",
      price: 1299.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/laptop-9bgUhjY491hkxiMDeSgqb9R5I3lHNL.webp",
      description:
        "High-performance gaming laptop with the latest GPU and fast SSD.",
      stock: 5,
    },
    {
      id: "prod3",
      name: "Smartwatch Elite",
      price: 249.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/watch-S2VeARK6sEM9QFg4yNQNjHFaHc3sXv.webp",
      description:
        "Elegant smartwatch with health tracking and customizable watch faces.",
      stock: 15,
    },
    {
      id: "prod4",
      name: "Bluetooth Speaker Max",
      price: 99.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/speaker-4Zk0Ctx5AvxnwNNTFWVK4Gtpru4YEf.webp",
      description:
        "Portable Bluetooth speaker with rich sound and long battery life.",
      stock: 20,
    },
  ],
  tech3: [
    {
      id: "prod1",
      name: "4K Ultra HD Smart TV",
      price: 799.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/tv-H4l26crxtm9EQHLWc0ddrsXZ0V0Ofw.webp",
      description:
        "A stunning 4K Ultra HD Smart TV with vibrant colors and deep contrasts.",
      stock: 10,
    },
    {
      id: "prod5",
      name: "Smart Thermostat Pro",
      price: 199.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/thermostat-8GnK2LDE3lZAjUVtiBk61RrSuqSTF7.webp",
      description:
        "Advanced smart thermostat with energy-saving features and remote control.",
      stock: 8,
    },
    {
      id: "prod7",
      name: "Portable Charger Super",
      price: 59.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp",
      description:
        "High-capacity portable charger to keep your devices powered on the go.",
      stock: 25,
    },
  ],
  gadget: [
    {
      id: "prod6",
      name: "Portable Charger Super",
      price: 59.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp",
      description:
        "High-capacity portable charger to keep your devices powered on the go.",
      stock: 25,
    },
    {
      id: "prod5",
      name: "Smart Thermostat Pro",
      price: 199.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/thermostat-8GnK2LDE3lZAjUVtiBk61RrSuqSTF7.webp",
      description:
        "Advanced smart thermostat with energy-saving features and remote control.",
      stock: 8,
    },
    {
      id: "prod7",
      name: "Portable Charger Super",
      price: 59.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp",
      description:
        "High-capacity portable charger to keep your devices powered on the go.",
      stock: 25,
    },
  ],
  accessories: [
    {
      id: "prod6",
      name: "Portable Charger Super",
      price: 59.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp",
      description:
        "High-capacity portable charger to keep your devices powered on the go.",
      stock: 25,
    },
    {
      id: "prod4",
      name: "Bluetooth Speaker Max",
      price: 99.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/speaker-4Zk0Ctx5AvxnwNNTFWVK4Gtpru4YEf.webp",
      description:
        "Portable Bluetooth speaker with rich sound and long battery life.",
      stock: 20,
    },
    {
      id: "prod7",
      name: "Portable Charger Super",
      price: 59.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp",
      description:
        "High-capacity portable charger to keep your devices powered on the go.",
      stock: 25,
    },
  ],
  home: [
    {
      id: "prod2",
      name: "Smart Home Hub",
      price: 149.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/home-iTeNnmKSMnrykOS9IYyJvnLFgap7Vw.webp",
      description:
        "Centralized smart home hub to control all your compatible devices seamlessly.",
      stock: 12,
    },
    {
      id: "prod5",
      name: "Smart Thermostat Pro",
      price: 199.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/thermostat-8GnK2LDE3lZAjUVtiBk61RrSuqSTF7.webp",
      description:
        "Advanced smart thermostat with energy-saving features and remote control.",
      stock: 8,
    },
    {
      id: "prod8",
      name: "Wireless Earbuds Ultra",
      price: 199.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp",
      description:
        "Premium wireless earbuds with noise cancellation and superior sound quality.",
      stock: 30,
    },
  ],
  fitness: [
    {
      id: "prod3",
      name: "Smartwatch Elite",
      price: 249.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/watch-S2VeARK6sEM9QFg4yNQNjHFaHc3sXv.webp",
      description:
        "Elegant smartwatch with health tracking and customizable watch faces.",
      stock: 15,
    },
    {
      id: "prod8",
      name: "Wireless Earbuds Ultra",
      price: 199.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp",
      description:
        "Premium wireless earbuds with noise cancellation and superior sound quality.",
      stock: 30,
    },
    {
      id: "prod6",
      name: "Portable Charger Super",
      price: 59.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp",
      description:
        "High-capacity portable charger to keep your devices powered on the go.",
      stock: 25,
    },
  ],
  outdoor: [
    {
      id: "prod7",
      name: "Portable Charger Super",
      price: 59.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp",
      description:
        "High-capacity portable charger to keep your devices powered on the go.",
      stock: 25,
    },
    {
      id: "prod4",
      name: "Bluetooth Speaker Max",
      price: 99.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/speaker-4Zk0Ctx5AvxnwNNTFWVK4Gtpru4YEf.webp",
      description:
        "Portable Bluetooth speaker with rich sound and long battery life.",
      stock: 20,
    },
    {
      id: "prod8",
      name: "Wireless Earbuds Ultra",
      price: 199.0,
      currency: "BRL",
      image_url:
        "https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp",
      description:
        "Premium wireless earbuds with noise cancellation and superior sound quality.",
      stock: 30,
    },
  ],
};
