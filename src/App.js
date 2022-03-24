import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetail';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Recipe/:recipeLabel" element={<RecipeDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
