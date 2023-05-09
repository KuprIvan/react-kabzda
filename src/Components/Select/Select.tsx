import React, {useState} from "react";
import {ItemType} from "../Accordion/Accordion";

export type SelectPropsType = {
    onChange: (value: any) => void
    items: ItemType[]
}

function CustomSelect(props: SelectPropsType) {
    const [value, setValue] = useState<string>('test value')
    const [isCollapsed, setIsCollapsed ] = useState(false)

    const onClickHandlerMain = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div>
            <div onClick={onClickHandlerMain}>{value}</div>
            {isCollapsed && props.items.map((i, index) => <div key={index} onClick={() => { setValue(i.title); setIsCollapsed(!isCollapsed)}}>{i.title}</div>)}
        </div>
    )
}

export const Select = React.memo(CustomSelect)