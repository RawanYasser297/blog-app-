import { useState } from "react";
import BlogGrid from "../components/BlogGrid";
import Container from "../components/Container";
import CountriesSelector from "../components/CountriesSelector";
import CategoriesSelector from "./../components/CategoriesSelector";

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [selectedCategory, setSelectedCategory] = useState("general");

  return (
    <main className="container mx-auto py-10">
      <Container>
        <div className="w-[80%]  md:mx-auto mb-4  pb-1 px-4 flex gap-3 flex-col md:flex-row justify-between">
          <CategoriesSelector
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <CountriesSelector
            setSelectedCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
          /> 
        </div>
        <BlogGrid
          selectedCountry={selectedCountry}
          selectedCategory={selectedCategory}
        />
      </Container>
    </main>
  );
};

export default Home;
