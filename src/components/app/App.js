import './App.css';
import {Header} from "../header/Header";
import {Navigation} from "../navigation/Navigation";
import {Product} from "../product/Product";
import {Offers} from "../offers/Offers";
import {Feedback} from "../feedback/Feedback";
import {Footer} from "../footer/Footer";
import {AppBar} from "../utils/bar/AppBar";
import {BackgroundImages} from "../utils/backgroundImages/BackgroundImages";

export const App = () => {
    return (
        <div className="app">
            <AppBar/>
            <Header/>
            <Navigation/>
            <Product/>
            <Offers/>
            <Feedback/>
            <Footer/>
            <BackgroundImages/>
        </div>
    );
}

export default App;
