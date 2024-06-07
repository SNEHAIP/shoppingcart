import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import SearchProducts from './components/SearchProducts';
import Deleteproducts from './components/Deleteproducts';
import ViewProducts from './components/ViewProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddProducts/>}/>
      <Route path='/Search'element={<SearchProducts/>}/>
      <Route path='/Delete'element={<Deleteproducts/>}/>
      <Route path='/View'element={<ViewProducts/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
