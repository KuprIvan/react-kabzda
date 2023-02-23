import React from "react";


type AccordionPropsType = {
    titleValue: string
    value: number
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody value={props.titleValue}/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    }

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

export default Accordion;