import React, { useEffect, useState } from "react";
import { Link,Route ,Routes} from "react-router-dom"; // Import Link from react-router-dom
import RecipeCard from "./RecipeCard";
import Styles from "./Recipe.module.css";
import RecipeDetails from "./RecipeDetails";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=c858abd5&app_key=31b71fe128732ea3a82b6171135c3dab`);
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      setRecipes(data.hits);
      setError(null);
    } catch (error) {
      setRecipes([]);
      setError(error.message);
    }
    setIsLoading(false);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className={Styles.searchform}>
        <input
          className={Styles.searchbar}
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search for recipes..."
        />
        <button className={Styles.searchbutton} type="submit">
          Search
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className={Styles.recipes}>
        {recipes.map((recipe) => (
          <div key={recipe.recipe.label}>
            <RecipeCard
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              details = {recipe.recipe.url}
            />
 
             
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Recipe;
