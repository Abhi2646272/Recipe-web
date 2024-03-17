import React from "react";
import "./Recipe.css";

const RecipeCard = ({ title, image, ingredients,details }) => {
  // Check if ingredients is defined and not null
  if (!Array.isArray(ingredients)) {
    // If ingredients is not an array, return null to prevent rendering
    return null;
  }

  return (
    <div className="recipe">
      
      
      <ol>
        {/* Map over ingredients if it's an array */}
        <h1 className="hh">{title}</h1>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <img className="recipe-image" src={image} alt={title} /><br />
      <a className="view-details" href={details} target="_blank" rel="noopener noreferrer">Details</a>

     
    </div>
  );
};

export default RecipeCard;
