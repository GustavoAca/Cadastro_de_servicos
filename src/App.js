import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/newproject">
          <NewProject  />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
