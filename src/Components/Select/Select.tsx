import React, {useState} from "react";
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
    const selectedItem = props.items.find(el => el.value === props.value);
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(!active);
    const onChangeHandler = (value: string) => {
        props.onChange(value);
        toggleActive();
    }



    return (
        <>
            {/*<select>*/}
            {/*    <option value="1">Minsk</option>*/}
            {/*    <option value="2">Kiev</option>*/}
            {/*    <option value="3">Moscow</option>*/}
            {/*</select>*/}

            <div className={styles.select}>
                <span className={styles.main}
                      onClick={toggleActive}
                >{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(el => <div
                            key={el.value}
                            onClick={() => { onChangeHandler(el.value)}}
                        >{el.title}</div>)}
                    </div>
                }

            </div>
        </>
    )
}
