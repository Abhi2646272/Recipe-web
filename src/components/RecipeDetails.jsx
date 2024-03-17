import {React,useEffect} from "react";
import { useParams } from "react-router-dom";
import Styles from "./RecipeDetails.module.css";

const RecipeDetails = (props) => {
//   const  recipe  = useParams(); 
  const { recipe } = props.location.state;// Get the label parameter from the URL
console.log(recipe)
  // Mock data from the API response
//   const recipe = {
//     label: "Chicken Vesuvio",
//     image: "https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
//     url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
//     dietLabels: ["Low-Carb"],
//     healthLabels: ["Mediterranean", "Dairy-Free", "Gluten-Free", "Wheat-Free", "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Fish-Free", "Shellfish-Free", "Pork-Free", "Red-Meat-Free", "Crustacean-Free", "Celery-Free", "Mustard-Free", "Sesame-Free", "Lupine-Free", "Mollusk-Free", "Kosher"],
//     ingredientLines: [
//       "1/2 cup olive oil",
//       "5 cloves garlic, peeled",
//       // Add other ingredients here
//     ],
//     totalNutrients: {
//       ENERC_KCAL: { label: "Energy", quantity: 4228.043058200812, unit: "kcal" },
//       FAT: { label: "Fat", quantity: 274.8807258388423, unit: "g" },
//       // Add other nutrients here
//     },
//     totalTime: 60,
//     cuisineType: ["Italian"],
//     mealType: ["Lunch/Dinner"],
//     dishType: ["Main Course"]
//     // Add other details you want to display
//   };
useEffect(() => {
    // Fetch recipe details based on the label
    console.log("Label:", recipe); // Check if the label is correctly retrieved
  }, [recipe]);

  return (
    <div className={Styles.recipeDetails}>
      <h2>Hi</h2>
      {/* <img src={recipe.image} alt={recipe.label} />
      <p>Total Time: {recipe.totalTime} minutes</p>
      <p>Cuisine Type: {recipe.cuisineType.join(", ")}</p>
      <p>Meal Type: {recipe.mealType.join(", ")}</p>
      <p>Dish Type: {recipe.dishType.join(", ")}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul> */}
      <h3>Nutrition:</h3>
      {/* <ul>
        {Object.entries(recipe.totalNutrients).map(([key, value]) => (
          <li key={key}>
            {value.label}: {value.quantity} {value.unit}
          </li>
        ))}
      </ul> */}
      {/* <p>
        <a href={recipe.url} target="_blank" rel="noopener noreferrer">
          Full Recipe Here
        </a>
      </p> */}
    </div>
  );
};

export default RecipeDetails;
