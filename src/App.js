import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ContextProvider from './context';

function App() {
  return (
    
     <BrowserRouter>
      <NavBar />
      <ContextProvider>
        <Routes>
          <Route path={'/'} element= {<ItemListContainer />} ></Route>
          <Route path={'/products/:category'} element= {<ItemListContainer />} ></Route>
          <Route path={'/product/:id'} element= {<ItemDetailContainer />} ></Route>
          <Route path={'/cart'} element= {( ) => home} ></Route>
          

        </Routes>
      </ContextProvider>
     </BrowserRouter>
  );
}

export default App;
