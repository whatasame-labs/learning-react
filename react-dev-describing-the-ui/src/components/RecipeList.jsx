import { recipes } from '../common/data.js';
import { Fragment } from 'react';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Fragment key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ul>
        </Fragment>
      ))}
    </div>
  );
}
