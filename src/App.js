import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
      <BrowserRouter>
        <Route path="/main" render={ () => <Main/> } exact/>
      </BrowserRouter>
  );
}

export default App;
