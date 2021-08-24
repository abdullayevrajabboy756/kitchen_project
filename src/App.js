import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeaderBottom from "./components/HeaderBottom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AOS from 'aos'
class App extends Component {
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
            // initialise with other settings
            duration : 2000
        });
    }
    render() {
        return (
            <div>
                <div className="orqa-bg">
                    <Navbar/>
                    <Header/>
                    <HeaderBottom/>
                    <Body/>
                    <Footer/>
                </div>

            </div>
        );
    }
}

export default App;