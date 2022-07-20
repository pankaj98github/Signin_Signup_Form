import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn'; 
import Details from './components/Details';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/signin' element={<SignIn/>} />
      <Route exact path='/details' element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
