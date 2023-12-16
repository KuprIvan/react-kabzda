import React from "react";
import styles from './Select.module.css'


type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value?: string
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const selectedItem = props.items.find(el => el.value === props.value)


    return (
        <>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Kiev</option>
                <option value="3">Moscow</option>
            </select>
            <div className={styles.select}>
                <h3>{selectedItem && selectedItem.title}</h3>
                <div className={styles.items}>
                    {props.items.map(el => <div key={el.value}>{el.title}</div>)}
                </div>
            </div>
        </>
    )
}
