import React, { useEffect, useState } from 'react';
import DataInterface from './data/DataInterface';

class RecipeList extends React.Component {
  render(props) {
    return (
      <ul>
        {this.props.recipes.map(recipe => {
          return (
            <li onClick={() => this.props.changeRecipe(recipe)} key={recipe.id}>{recipe.name}</li>
          );
        })}
      </ul>
    )
  }
}

class RecipeDisplay extends React.Component {
  render(props) {
    return (
      <div>
        <h4>{this.props.recipe.name}</h4>
        <ul>
          {this.props.recipe.ingredients.map(
            ingredient => <li>{ingredient.quantity} {ingredient.unit} {ingredient.ingredient}</li>
          )}
        </ul>
      </div>
    )
  }
}

function App(props) {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({
    name: 'no recipe selected',
    ingredients: []
  });

  useEffect(() => {
    DataInterface.getRecipes()
      .then((res) => {
        console.log(res);
        if (res) setRecipes(res);
      });
  }, []);

  function changeRecipe (recipe) {
    setCurrentRecipe(recipe);
  }

  return (
    <>
      <RecipeList changeRecipe={changeRecipe} recipes={recipes} />
      <RecipeDisplay recipe={currentRecipe} />
    </>
  );
}

export default App;
