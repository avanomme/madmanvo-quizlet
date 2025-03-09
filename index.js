import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OSPage from './pages/OS';
import SoftwarePage from './pages/Software';

const App = () => (
  <Router>
    <Switch>
      <Route path="/OS" component={OSPage} />
      <Route path="/Software" component={SoftwarePage} />
      <Route path="/" exact component={() => <div>Welcome to the Quizlet and Flashcard App</div>} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
