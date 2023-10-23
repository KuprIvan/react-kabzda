import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}
type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
}
export type ItemType = {
    title: string
    value: any
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}




function AccordionMemo(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={props.collapsed} onChange={props.onChange} />
            {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={(e) => {
            props.onChange(!props.collapsed)
        }}>{props.title}</h3>
    )
}

function AccordionBody(props: AccordionBodyPropsType): JSX.Element {
    console.log("AccordionMenu rendering")
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    )
}

export const Accordion = React.memo(AccordionMemo)

