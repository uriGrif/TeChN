import './App.css';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Projects from './components/Projects'
import Footer from './components/Footer'
import ProjectDashboard from '../src/components/ProjectDashboard'
import ProjectCreator from '../src/components/ProjectCreator'

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Switch>
          <Route exact path="/"><Projects /></Route>
          <Route exact path="/projects"><Projects /></Route>
          <Route path="/project/:prName/:prId"><ProjectDashboard /></Route>
          <Route path="/new-project"><ProjectCreator /></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
