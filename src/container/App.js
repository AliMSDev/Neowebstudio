import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ShowPost from '../components/_showPost/showPost';
import Home from '../components/_home/home';
import About from '../components/_about/about';
import Contact from '../components/_contact/contact';
import Work from '../components/_work/work';
import Blog from '../components/_blog/blog';
import Footer from '../components/footer/footer';
import Menu from '../components/menu/menu';

import { MenuContext } from '../components/__Context/menuContext';
import { LangContext } from '../components/__Context/langContext';

const App = () => {

  const [menu] = useContext(MenuContext);
  const [fa] = useContext(LangContext);

  let conditionalClassname = '';

  if(fa)
  {
    conditionalClassname = `${menu?'App Fa fixbody' : 'App Fa'}`;
    document.querySelector('html').style.direction='rtl'
  }
  else
  {
    conditionalClassname = `${menu?'App English fixbody':'App English'}`;
    document.querySelector('html').style.direction='ltr';
  }

  document.querySelector('html').style.overflowX='hidden';
  
  return (

        <div className={conditionalClassname} >

          <Router>
            <Menu />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/work' component={Work} />
              <Route exact path='/blog' component={Blog} />
              <Route path='/blog/:id' component={ShowPost} />
            </Switch>
            <Footer />
          </Router>

        </div>

  );
}

export default App;
