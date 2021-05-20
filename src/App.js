import React, { useEffect, useState } from 'react';
import DataInterface from './data/DataInterface';

class RecipeList extends React.Component {
  render(props) {
    return (
      <ul style={{visibility: this.props.recipes[0] ? 'visible' : 'hidden'}}>
        {this.props.recipes?.map(recipe => {
          return (
            <li onClick={() => this.props.changeRecipe(recipe)} key={recipe.id}>{recipe.name}</li>
          );
        })}
      </ul>
    );
  }
}

class RecipeDisplay extends React.Component {
  render(props) {
    return (
      <div style={{visibility: this.props.recipe?.name ? 'visible' : 'hidden'}}>
        <h4>{this.props.recipe?.name}</h4>
        <ul>
          {this.props.recipe?.ingredients?.map(
            ingredient => <li key={ingredient.id}>{ingredient.quantity} {ingredient.unit} {ingredient.ingredient}</li>
          )}
        </ul>
      </div>
    )
  }
}

function App(props) {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});

  useEffect(() => {
    DataInterface.getRecipes()
      .then((res) => {
        if (res) setRecipes(res);
      });
  }, []);

  function changeRecipe(recipe) {
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
