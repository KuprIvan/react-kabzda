import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react'
import {action} from '@storybook/addon-actions'


export default {
    title: 'input',
}
const callback = action('Input value changed')

export const UncontrolledInput = () => <input />

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <><input onChange={ onChangeHandler }/> - {value} </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        /* const element = document.getElementById("inputId") as HTMLInputElement;
         setValue(element.value)*/

        const element = inputRef.current as HTMLInputElement;
        setValue(element.value);
    }

    return <><input ref={inputRef} /> <button onClick={ onClickHandler }>save</button> - actual value: {value} </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setParentValue(e.currentTarget.value) }
    return <input value={parentValue} onChange={ onChangeHandler }/>

}
export const ControlledCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setIsChecked(e.currentTarget.checked) }
    return <input type="checkbox" checked={ isChecked } onChange={ onChangeHandler }/>

}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={ onChangeHandler }>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}

// export const ControlledInput = () => <input value={"it-kamasutra.by"} />
