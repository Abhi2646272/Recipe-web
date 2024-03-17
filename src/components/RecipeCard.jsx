import {React,useState} from "react";
import "./Recipe.css";
import Modal from "./Modal";  

const RecipeCard = ({ title, image, ingredients,details,totalNutrients }) => {
  const [showModal1, setShowModal1] = useState(false);
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
          <><li key={index}>{ingredient.text}</li>
            
            

            </>
        ))}
        <button style={{backgroundColor:"orangered",color:"white",border:'none',height:40,borderRadius:10}} onClick={() => setShowModal1(true)}>Nutritions</button>
            {showModal1 && (
        <Modal closeModal={() => setShowModal1(false)}>
           <div style={styles.container}>
        <h2 style={styles.title}>Nutrition Values</h2>
        <div style={styles.nutritionContainer}>
          {Object.keys( totalNutrients).map((nutrient, index) => (
            <div key={index} style={styles.nutrient}>
              <span style={styles.nutrientLabel}>{ totalNutrients[nutrient].label}:</span>
              <span>{ totalNutrients[nutrient].quantity.toFixed(2)} { totalNutrients[nutrient].unit}</span>
            </div>
          ))}
        </div>
      </div>
        </Modal>
      )}
      </ol>
      <img className="recipe-image" src={image} alt={title} /><br />
      <a className="view-details" href={details} target="_blank" rel="noopener noreferrer">Details</a>

     
    </div>
  );
};
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    overflowY: "auto",
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  nutritionContainer: {
    marginTop: '10px',
  },
  nutrient: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
  },
  nutrientLabel: {
    fontWeight: 'bold',
  },
};

export default RecipeCard;
