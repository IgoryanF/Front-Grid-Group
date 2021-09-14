import './App.css';
import {Route} from "react-router-dom";
import MainPage from "./components/pages/Main/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {NavbarActiveContext} from "./context/navbarActiveContext";
import {useState} from "react";
import {Provider} from "react-redux";
import store from "./redux/store";
import {TextField} from "@material-ui/core";

function App() {

    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <div className="wrapper">
            <Provider store={store}>
            <NavbarActiveContext.Provider value={{isModalActive, setIsModalActive}}>
                <Header/>
                <main className="main">
                    <Route path="/main" render={() => <MainPage/>} exact/>
                </main>
                <Footer/>
            </NavbarActiveContext.Provider>
            </Provider>
        </div>
    );
}

export default App;
