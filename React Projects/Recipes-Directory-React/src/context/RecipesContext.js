import React, {useState, useEffect, createContext} from "react";

export const RecipesContext = createContext();

export const RecipesState = ({children}) => {

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [firstRecipe, setFirstRecipe] = useState(0);
    const [lastRecipe, setLastRecipe] = useState(9);
    const [isHidden, setIsHidden] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const APP_ID = "f1109fbe";
    const APP_KEY = "93f83fe8412aa64807fff4fefbcbfb9c";
    const FIRST_REQUEST = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9`;
    const URL = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${search}app_id=${APP_ID}&app_key=${APP_KEY}&from=${firstRecipe}&to=${lastRecipe}`;

    const getFirstResult = async () => {
        setLoading(true);
        console.log("getFirstResult");
        const response = await fetch(FIRST_REQUEST);
        const data = await response.json();
        setRecipes(data.hits);
        setLoading(false);
    };

    const searchRecipes = async () => {
        setError(false);
        setLoading(true);
        console.log("searchRecipes");
        const response = await fetch(URL);
        const data = await response.json();

        if (search.trim() !== "" && !data.more) {
            setLoading(false);
            setError(true);
            return;
        }

        setRecipes(data.hits);
        setLoading(false);
    };

    const getRecipes = event => {
        event.preventDefault();

        if (search.trim() === "") {
            return;
        }

        setIsHidden(true);
        searchRecipes();
    };

    const handlePage = (direction) => {
        if (direction === "next") {
            setFirstRecipe(prevRecipe => prevRecipe + 9);
            setLastRecipe(prevRecipe => prevRecipe + 9);
            return;
        }
        if (direction === "previous" && firstRecipe !== 0) {
            setFirstRecipe(prevRecipe => prevRecipe - 9);
            setLastRecipe(prevRecipe => prevRecipe - 9);
            return;
        }
    };

    useEffect(() => {
        getFirstResult();
    }, [] );

    useEffect(() => {
        searchRecipes();
    }, [firstRecipe, lastRecipe]);

    return (
        <RecipesContext.Provider
            value={ 
                {
                    recipes, 
                    setRecipes, 
                    getRecipes, 
                    search, 
                    setSearch, 
                    isHidden, 
                    error, 
                    loading,
                    handlePage
                } 
            }
        >
            {children}
        </RecipesContext.Provider>
    );
};