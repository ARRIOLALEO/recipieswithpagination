import { createContext,useState, useEffect } from "react";
import axios from 'axios'

export const RecipesContext = createContext([])

export const GeneralProvider = ({children}) =>{
    const [allRecipes,setAllRecipes] = useState([])
    const [recipeToSearch,setRecipeToSearch] = useState('chicken')
    
    const callToAPI = async() =>{
        const req = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeToSearch}&app_id=e4ed685b&app_key=d38ec1fcd48f23da9f2a85282cbd5004`)
        setAllRecipes(req.data.hits)
    }

    useEffect(()=>{
        callToAPI()
        console.log("im calling the API")
    },[recipeToSearch])

    const data = {
        allRecipes:allRecipes,
        recipeToSearch:recipeToSearch,
        setRecipeToSearch:setRecipeToSearch
    }

    return(
        <RecipesContext.Provider value={data}>
            {children}
        </RecipesContext.Provider>
    )
}