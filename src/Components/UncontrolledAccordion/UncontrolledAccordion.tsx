import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";


type AccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
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

function Accordion(props: AccordionPropsType): JSX.Element {
    console.log("UncontrolledAccordion rendering")
    const [state, dispatch] = useReducer(reducer, {collapsed: false}) // return Array

    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: TOGGLE_CONSTANT})
        }}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

export const UncontrolledAccordion = React.memo(Accordion)


