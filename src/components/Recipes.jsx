import React from "react";

const Recipes = ({ hits }) => {
    console.log(hits)
  return (
    <section className="recipes">
      {hits.length &&
        hits.map((hit) => {
          const { recipe } = hit;

          return (
            <div className="recipe">
              <article>
                <img src={recipe.image} alt={recipe.label} />
                <h4>{recipe.label}</h4>
                <h5>{recipe.source}</h5>
              </article>
            </div>
          );
        })}
    </section>
  );
};

export default Recipes;
