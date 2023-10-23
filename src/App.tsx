import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {UncontrolledAccordion} from './Components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './Components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./Components/Select/Select";

function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [onOff, setOnOff] = useState<boolean>(false)

    return (
        <div className={"App"}>

           {/* <UncontrolledOnOff  onChange={setOnOff} />{onOff.toString()}
            <OnOff onClick={setOnOff} onOff={onOff}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating onChange={x => x}/>
*/}
            <UncontrolledAccordion titleValue={'TEST'} />

            {/*<Select items={[{title: 'Ivan', value: 1},{title: 'Valera', value: 2}, {title: 'Viktor', value: 3}, {title: 'Artem', value: 4}]} onChange={() => {}} />*/}
           {/* <Accordion titleValue={'Menu'} onClick={setAccordionCollapsed} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)} />*/}

        </div>
    )
}

/*type PageTittlePropsType = {
    title: string
}
function PageTitle(props: PageTittlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{ props.title }</h1>
    )
}*/


export default App;
