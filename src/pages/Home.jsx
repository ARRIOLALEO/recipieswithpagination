import FormSeach from "../components/FormSearch"
import Header from "../components/Header"
import Recipes from "../components/Recipes"
import Pagination from "../components/Pagination"
function Home(){
    return(
        <>
        <Header/>
        <FormSeach/>
        <Recipes/>
        <Pagination/>
        </>
    )
}
export default Home