import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input'
    // component: input
}

export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return <>
        <input onChange={onChangeInputHandler}/> - {value}
    </>
}
export const GetValueWithUseRefHook = () => {
    const [value, setValue] = useState<string>("")
    const useRefValue = useRef<HTMLInputElement>(null)


    const onSaveClickHandler = () => {
        const el = useRefValue.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={useRefValue} />
        <button onClick={onSaveClickHandler}>save</button>
        - {value}
    </>
}
export const ControlledInputWithFixedValue = () => <input  value={"it-incubator"}/>