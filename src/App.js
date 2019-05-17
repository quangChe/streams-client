import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const PageOne = () => {
  return (<div>Page One!</div>);
}

const PageTwo = () => {
  return (
  <div>
    Page Two!
    <button>
      <Link to="/">Click Me</Link>
    </button>
  </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" exact component={PageOne}/>
            <Route path="/pagetwo" component={PageTwo}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;