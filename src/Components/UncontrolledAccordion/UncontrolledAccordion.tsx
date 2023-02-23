import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>{ props.title }</h3>
    )
}
function AccordionBody(props: any) {
    console.log("AccordionMenu rendering")
    if (props.value === 1) {
        return (
            <ul>
                <li>1</li>
            </ul>
        )
    }
    if (props.value === 2) {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        )
    }
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )

}
function UncontrolledAccordion(props: AccordionPropsType):JSX.Element {
    console.log("UnAccordion rendering")
    const [collapse, setCollapse] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={() => setCollapse(!collapse)}>TOGGLE</button>
        {!collapse && <AccordionBody />}
    </div>
}


export default UncontrolledAccordion;