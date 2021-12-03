
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css';

import { HomeContainer,QuotesContainer } from './Containers';


function App() {
  return (
    // <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeContainer/>}/>
        <Route exact path='/qoutes' element={<QuotesContainer/>}/>
        </Routes>
        </BrowserRouter>
  
   
    // </div>
  );
}

export default App;
