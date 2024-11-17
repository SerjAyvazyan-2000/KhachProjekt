import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Cover from "./Components/Cover/cover";
import PersonalSettings from "./Components/PersonalSettings/PersonalSettings";
import AboutUs from "./Components/AboutUs/aboutUs";
import UseArea from "./Components/UseArea/useArea";
import {WorkshopBrothers} from "./Components/WorkshopBrothers/WorkshopBrothers";
import OurPartners from "./Components/OurPartners/ourPartners";
import OurTeam from "./Components/OurTeam/OurTeam";
import Footer from "./Components/footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Cover/>
            <PersonalSettings/>
            <AboutUs/>
            <UseArea/>
            <WorkshopBrothers/>
            <OurPartners/>
            <OurTeam/>
            <Footer/>
        </div>
    );
}

export default App;
