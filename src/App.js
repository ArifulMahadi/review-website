
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Achivement from './Achivement/Achivement';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
          <Switch>
          
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route path='/home'>
                <Home></Home>
            </Route>
            <Route path='/about'>
                 <About></About>
            </Route>
            <Route path='/services/'>
              <Services></Services>
            </Route>
            <Route path='/achivement'>
              <Achivement></Achivement>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
            
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
