import { useContext } from "react"
import {RecipesContext} from '../context/GeneralContex'
import {Grid,CardMedia, Button,Card, CardHeader,CardContent,Divider} from '@mui/material'
import {Link} from 'react-router-dom'
function Recipes(){
    const {allRecipes} = useContext(RecipesContext)
    return(
        <>
        <Grid container spacing={2}>
            {
                allRecipes.map(({recipe})=>(
                    <Grid item xs={6} md={3}>
                        <Card>
                            <CardHeader title={recipe.label}/>
                            <Divider/>
                            <CardMedia component="img" image={recipe.image}/>
                            <CardContent>
                                <Link to={`/Recipe/${recipe.label}`}>SEE MORE</Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
        </>
    )
}

export default Recipes