import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import OnOff from './Components/OnOff/OnOff';
import UncontrolledAccordion from './Components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './Components/UncontrolledRating/UncontrolledRating';

function App() {
    // console.log("App rendering")
    return (
        <div className={"App"}>
           {/* <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />*/}

            <UncontrolledAccordion titleValue={'TEST'} />
            <UncontrolledRating />
        </div>
    )
}

type PageTittlePropsType = {
    title: string
}
function PageTitle(props: PageTittlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{ props.title }</h1>
    )
}


export default App;
