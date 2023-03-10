import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={props.collapsed} onClick={props.onClick}/>
            {props.collapsed && <AccordionBody /> }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => {
            props.onClick(!props.collapsed)
        }}>{props.title}</h3>
    )
}

function AccordionBody(): JSX.Element {
    console.log("AccordionMenu rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;