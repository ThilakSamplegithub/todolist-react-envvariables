import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Todo from './component/Todo';
function App() {
  return (
    <div className="App">
       {/* <p>{`process.env.${REACT_APP_SOME_VARIABLE}`} </p> */}
      <Todo/>
    <Home/>
    </div>
  );
}

export default App;
