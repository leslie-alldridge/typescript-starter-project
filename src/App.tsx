import * as React from 'react';
import './App.css';
import MyClass from './Components/MyClass';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
       <MyClass name={'leslie'}/>
      </div>
    );
  }
}

export default App;
