import { useContext,useState } from 'react'
import {RecipesContext} from '../context/GeneralContex'
import {TabPanel,TabList,TabContext} from '@mui/lab'
import {Grid, Tab} from '@mui/material'
import {useParams} from 'react-router-dom'
import Header from '../components/Header'
function RecipeDetails(){
    const {recipeLabel} = useParams()
    const {allRecipes} = useContext(RecipesContext)
    const seletedRecipe = allRecipes.filter(({recipe})=> recipe.label === recipeLabel )[0].recipe
    const [value, setValue] = useState('1')

    const handlerChange =(event,newValue)=>{
        setValue(newValue)
    }
    return(
        <>
        <Header/>
        <Grid container spacing={2}>
            
            <Grid item xs={12} md={6}>
                <h2>{recipeLabel}</h2>
                <img src={seletedRecipe.image} alt={recipeLabel}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TabContext value={value}>
                    <TabList onChange={handlerChange} aria-label="information">
                        <Tab label="Ingridients" value="1"></Tab>
                        <Tab label="Ingridients 2" value="2"></Tab>
                        <Tab label="Ingridients 3" value="3"></Tab>
                    </TabList>
                    <TabPanel value="1">Panel 1</TabPanel>
                    <TabPanel value="2">Panel 2</TabPanel>
                    <TabPanel value="3">Panel 3</TabPanel>
                </TabContext>
            </Grid>
            </Grid>
            </>
    )
}
export default RecipeDetails