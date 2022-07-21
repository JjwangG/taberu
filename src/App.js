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
  const defaultFilters = {'time':0, 'cuisine':"", 'meal':""};
  const [filtersList, setFiltersList] = useState(Object.assign({}, defaultFilters));
  const [searchResultsList, setSearchResultsList] = useState(json['recipes']);
  const [isEnglish, setIsEnglish] = useState(true);
  const [searchWord, setSearchWord] = useState("");
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
    if (pageId == "landing"){
      setSearchResultsList(json['recipes']);
    }
  }

  const onLanguageToggle = () => {
    setIsEnglish(!isEnglish);
  }

  const getCurrentRecipe= () => {
    return json.recipes.find(recipe => recipe.name == curentrecipe)
  }

  const onSearchClicked = () => {
    setPage('searchResults');    

    let tempVar = json['recipes'];
    if (searchWord!=""){
      tempVar = (tempVar.filter(recipe => recipe.name.toLowerCase().replace(/\s/g, '') == searchWord)).concat(tempVar.filter(recipe => recipe.name.includes(searchWord)));
    }
    if (filtersList.cuisine != ""){
      tempVar = tempVar.filter(recipe => recipe.cuisine == filtersList.cuisine);
    }
    if (filtersList.meal != ""){
      tempVar = tempVar.filter(recipe => recipe.mealtype == filtersList.meal);
    }
    if (filtersList.time != 0){
      tempVar = tempVar.filter(recipe => recipe.timeInt <= filtersList.time);
    }

    setSearchResultsList(tempVar);
    console.log(tempVar);
  }

  //should be called with filters = {[num, str, str]}
  //
  const onFilterApplyBtnClick = (newFilters) => {
    setFiltersList(newFilters);
  }

  return (
      <div>
        <NavBar onNavLinkClick={onNavClick} englishFlag = {isEnglish} onLanguageBtnToggle={onLanguageToggle}/>
        { currentPage == 'landing' && <Landing setSearch={setSearchWord} englishFlag={isEnglish} onSearchClick={onSearchClicked} prevFilters={Object.assign({}, defaultFilters)} onFilterApply={onFilterApplyBtnClick}/>}
        { currentPage == 'searchResults' && <SearchResults prevSearchWord={searchWord} setSearch={setSearchWord} onRecipeClick={onRecipesClick} allRecipes={searchResultsList} 
          prevFilters={filtersList} onFilterApplyClick={onFilterApplyBtnClick} onSearchClick={onSearchClicked} englishFlag = {isEnglish}/>}
        { currentPage == 'recipes' && <RecipePage currentRecipe={getCurrentRecipe()}/>}
        { currentPage == 'about' && <About/>}
      </div>
  )
}

export default App;

