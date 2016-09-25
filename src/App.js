import React, {Component} from 'react';
import Result from './components/Result'
import NavContainer from './containers/NavContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Result/>
        <NavContainer/>
      </div>
    );
  }
}

export default App;