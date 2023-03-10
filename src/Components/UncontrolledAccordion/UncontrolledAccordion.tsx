import React, {useState} from "react";


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
        <h3 onClick={() => { props.onClick() }}>{ props.title }</h3>
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
    const [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
        {!collapsed && <AccordionBody />}
    </div>
}


export default UncontrolledAccordion;