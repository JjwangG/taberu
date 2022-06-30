import React, { useState } from 'react';
import NavBar from './components/NavBar';
import About from './About';
import Landing from './Landing'
import RecipePage from './RecipePage';
import SearchResults from './SearchResults';
import json from './data.json';

const pageId = {
  landing: 'landing',
  about: 'about',
  recipe: 'recipe',
  SearchResults: 'SearchResults'
};

const App = () => {
  const [currentPage, setPage] = useState('landing'); // searchResults, recipe
  const [curentrecipe, setCurrentRecipe] = useState('banana bread');
  const todaysRecipe = 'no-knead focaccia'; 

  const onRecipesClick = (recipeName) => {
    setPage('recipes');
    setCurrentRecipe(recipeName);
  }

  const onNavClick = (pageId) => {
    setPage(pageId);
    if (pageId == "recipes"){
      setCurrentRecipe(todaysRecipe);
    }
  }

  const getCurrentRecipe= () => {
    return json.recipes.find(recipe => recipe.name == curentrecipe)
  }

  const onSearchClicked = () => {
    setPage('searchResults');
  }

  return (
      <div>
        <NavBar onNavLinkClick={onNavClick}/>
        { currentPage == 'landing' && <Landing onSearchClick={onSearchClicked}/>}
        { currentPage == 'searchResults' && <SearchResults onRecipeClick={onRecipesClick} allRecipes={json['recipes']}/>}
        { currentPage == 'recipes' && <RecipePage currentRecipe={getCurrentRecipe()}/>}
        { currentPage == 'about' && <About/>}
      </div>
  )
}

export default App;

