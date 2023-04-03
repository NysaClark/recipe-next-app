import React, { useState, useEffect } from "react";

const SearchForm = ({ setHits, setError, setLoading}) => {
  const [query, setQuery] = useState("ice cream");
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=88d52cbe&app_key=e91f9d79fa8fedcf51cec8890fdd798b`;

  useEffect(() => {
    fetchRecipes(url);
  }, [query]);

  const fetchRecipes = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.hits);
      if (data.hits) {
        setHits(data.hits);
        setError({ show: false, msg: "" });
        setLoading(false);
      } else if (data.recipe) {
        setHits(data.recipe);
        setError({ show: false, msg: "" });
        setLoading(false);
      } else {
        data.forEach((d) => {
          const { message } = d;
          setError({ show: true, msg: message });
          setLoading(false);
        });
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>Search Recipes</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
