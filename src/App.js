import './App.css';
import {Route} from "react-router-dom";
import MainPage from "./components/pages/Main/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {NavbarActiveContext} from "./context/navbarActiveContext";
import {useState} from "react";
import Project from "./components/pages/Project/Project";

function App() {

    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <div className="wrapper">
            <NavbarActiveContext.Provider value={{isModalActive, setIsModalActive}}>
                <Header/>
                <main className="main">
                    <Route path="/" render={() => <MainPage/>} exact/>
                    <Route path="/projects/:id" render={() => <Project/>} exact/>
                </main>
                <Footer/>
            </NavbarActiveContext.Provider>
        </div>
    );
}

export default App;
