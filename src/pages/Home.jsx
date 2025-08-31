import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageUploader from "../components/ImageUploader";
import SearchResults from "../components/SearchResults";

const Home = () => {
  const [results, setResults] = useState([
    {
      id: 1,
      name: "Product 1",
      image: "https://placehold.co/600x400/fdf73e/000?text=Product+1",
      score: 0.95,
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://placehold.co/600x400/fdf73e/000?text=Product+2",
      score: 0.89,
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://placehold.co/600x400/fdf73e/000?text=Product+3",
      score: 0.87,
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (image) => {
    setLoading(true);

    // Mock API call
    setTimeout(() => {
      setResults([
        {
          id: 1,
          name: "Product 1",
          image: "https://placehold.co/600x400/fdf73e/000?text=Product+1",
          score: 0.95,
        },
        {
          id: 2,
          name: "Product 2",
          image: "https://placehold.co/600x400/fdf73e/000?text=Product+2",
          score: 0.89,
        },
        {
          id: 3,
          name: "Product 3",
          image: "https://placehold.co/600x400/fdf73e/000?text=Product+3",
          score: 0.87,
        },
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Header />
      <main className="p-8">
        <ImageUploader onSearch={handleSearch} />
        <SearchResults results={results} loading={loading} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
