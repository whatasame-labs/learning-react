import { recipes } from '../common/data.js';
import { Fragment } from 'react';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe}></Recipe>
      ))}
    </div>
  );
}

function Recipe({ name, ingredients }) {
  return (
    <>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => {
          return <li>{ingredient}</li>;
        })}
      </ul>
    </>
  );
}