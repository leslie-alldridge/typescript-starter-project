import * as React from 'react';
import './App.css';
import MyClass from './Components/MyClass';
import MyComp from './Components/MyComp';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
       <MyClass isMale={true}/>
       <MyComp name="leslie" isMale={true} kids={2}/>
      </div>
    );
  }
}

export default App;
