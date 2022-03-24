import { useState } from 'react'
import {Grid,Drawer,ListItem,Button,Box, List} from '@mui/material'
import {Link} from 'react-router-dom'
function Header(){
    const [drawerOn,setDrawerOn] = useState(false)
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Box style={{height:50}}>
                <Link to="/">LOGO</Link>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Drawer open={drawerOn} onClose={()=> setDrawerOn(false)} anchor="right">
                    <List style={{width:'50vw'}}>
                        <ListItem>
                            <Link to="/">Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/">Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/">Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/">Home</Link>
                        </ListItem>
                    </List>
                </Drawer>
                <Button onClick={()=> setDrawerOn(!drawerOn)}>MENU</Button>
            </Grid>
        </Grid>
    )
    }
export default Header
