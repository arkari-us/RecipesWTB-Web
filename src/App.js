import React from 'react';

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
        <h4>{this.props.recipe.name || 'No recipe selected'}</h4>
        <ul>
          {this.props.recipe.ingredients.map(
            ingredient => <li>{ingredient.quantity} {ingredient.unit} {ingredient.ingredient}</li>
          )}
        </ul>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeRecipe = this.changeRecipe.bind(this);
  }

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

  changeRecipe = (recipe) => {
    this.setState({currentRecipe: recipe});
  }

  render() {
    return (
      <>
        <RecipeList changeRecipe={this.changeRecipe} recipes={this.state.recipes} />
        <RecipeDisplay recipe={this.state.currentRecipe} />
      </>
    );
  }
}

export default App;
