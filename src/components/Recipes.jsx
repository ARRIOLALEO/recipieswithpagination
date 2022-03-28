import { useContext } from "react"
import {RecipesContext} from '../context/GeneralContex'
import {Grid,CardMedia, Button,Card, CardHeader,CardContent,Divider} from '@mui/material'
import {Link} from 'react-router-dom'
function Recipes(){
    const {allRecipes,pageNow,howManyPages,howNamyElements} = useContext(RecipesContext)
    const start = pageNow === 0 ? 0 : pageNow * howNamyElements
    const end = start + howNamyElements
    const recipiesToshow = allRecipes.slice(start,end)

    return(
        <>
        <Grid container spacing={2}>
            {
                recipiesToshow.map(({recipe})=>(
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