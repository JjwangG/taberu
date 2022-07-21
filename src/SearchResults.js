import classes from './styles/SearchResults.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'react-bootstrap';
import icon from './components/searchIcon.svg';
import Filter from './components/Filter';
import {useState} from 'react';
import logo from './components/taberu_logo2.svg'

function RecipeCard({ data, onClick }){
    return(
        <Col onClick={onClick} className={classes.recipeCard}>
            <img src={data.img} className={classes.recipeCard__img}/> 
            <h2 className={classes.recipeCard__header}>{data.name}</h2>
        </Col>
    )
}

function SearchResults({
    onRecipeClick,
    allRecipes,
    prevFilters,
    onFilterApplyClick,
    onSearchClick
}) {
    const [buttonModal, setModal] = useState(false);

    function filterDialog(){
        setModal(true);
    }
    return (
      <div className={classes.main}>
            <Col className={classes.main__container}>
                <div className ={classes.main__container__search}>
                    <input onChange={() => console.log('landing')} type="text"  placeholder="search" className ={classes.main__container__search__input}/>
                    <button type="button" onClick={filterDialog} className ={classes.main__container__search__filter}>filter</button>{' '}
                    <button type="button" onClick={() => onSearchClick()} className = {classes.main__container__search__btn}>
                        <img src = {icon} alt="" className = {classes.main__container__search__btn__icon}/>
                    </button>
                </div>
                <Filter trigger = {buttonModal} setTrigger={setModal} filterList={prevFilters} onApplyClick = {onFilterApplyClick}> </Filter>
                <h1 className={classes.main__container__header}>results</h1>
                <div className = {classes.main__container__cards}>
                    {allRecipes.length === 0 && 
                        <div>
                            <p className = {classes.main__container__cards__text}>no results for your search</p>
                            <img src={logo} alt="logo" />
                        </div>
                        
                    }
                    {allRecipes.map(recipe => (
                        <div xs={3} className = "mb-5" key = {`${recipe.id}`}>
                            <RecipeCard onClick={() => onRecipeClick(recipe.name)} data={recipe}/>
                        </div>
                    ))}
                </div>
            </Col>
        </div>
    );
  }

export default SearchResults;