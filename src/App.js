import React from 'react';

class App extends React.Component {
  state = {
    recipes: [
      {
        id: 1,
        name: 'Kale and White Bean Skillet',
        ingredients: [
          { quantity: 2, unit: 'can', ingredient: 'Cannelini beans' },
          { quantity: 1 / 2, unit: 'jar', ingredient: 'Sun-dried tomatoes' },
          { quantity: 6, unit: 'oz', ingredient: "Kale" }
        ],
        instructions: 'heat ingredients in skillet',
        tags: [String]
      },
      {
        id: 2,
        name: 'Tuna Salad',
        ingredients: [
          { quantity: 12, unit: 'oz', ingredient: 'Tuna' },
          { quantity: 2, unit: '', ingredient: 'Dill pickles' },
          { quantity: 1 / 4, unit: '', ingredient: 'Red onion' },
          { quantity: 1 / 2, unit: 'cup', ingredient: 'Mayonnaise' }
        ],
        instructions: 'mix ingredients',
        tags: [String]
      }
    ],
    currentRecipe: {
      name: '',
      ingredients: []
    }
  }

  swap = (recipe) => {
    this.setState({currentRecipe: recipe});
  }

  render() {
    return (
      <>
        <ul>
          {this.state.recipes.map(recipe => {
            return (
              <li onClick={() => this.swap(recipe)}>{recipe.name}</li>
            );
          })}
        </ul>
        <div>
          <h4>{this.state.currentRecipe.name || 'No recipe selected'}</h4>
          <ul>
          {this.state.currentRecipe.ingredients.map(
            ingredient => <li>{ingredient.quantity} {ingredient.unit} {ingredient.ingredient}</li>
          )}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
