// import logo from './logo.svg';
// import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Signin } from './Components/Signin';
import { Signup } from './Components/Signup';
import ResponsiveAppBar, { Home } from './Components/Home';
// import { Home } from './Components/Home';
import './Assets/Home.css'
import {Analytics} from './Components/Analytics';
import { HomeAfterSignin } from './Components/HomeAfterSignin';
function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<HomeAfterSignin/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Analytics' element={<Analytics/>}/>
    </Routes>
    </div>
  );
}

export default App;