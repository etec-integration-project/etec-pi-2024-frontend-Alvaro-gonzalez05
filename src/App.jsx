import './App.css';
import Body from './components/body/body';
import Headernav from './components/hedear/header';
import Login from './components/login/login';
import Register from './components/register/register';
import Appcart from './components/appcard';

// import Carrito from './components/carrito/carrito';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './components/hedear/header';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<>
          <Headernav />
          <Body />
          </>
        } />
        <Route path='/login' element={<>
          
          <Login />
          </>
        } />
        <Route path='/register' element={<>
          
          <Register/>
          </>
        } />
        <Route path='/menu' element={<>
          <Appcart/>
          
          
          </>
        } />
        <Route path='/carrito' element={<>
         
          
          </>
        } />
        
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
