import './App.css';
import {Route} from "react-router-dom";
import MainPage from "./components/pages/Main/MainPage";
import Header from "./components/pages/Main/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <main className="main">
                <Route path="/main" render={() => <MainPage/>} exact/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
