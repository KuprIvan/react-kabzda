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
        <input value={value} onChange={onChangeInputHandler}/>
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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>("")
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value);
    }
    return <>
        <input value={parentValue} onChange={onChangeInputHandler} />
    </>
};
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)
    const onClickInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked);
    }
    return <>
        <input type="checkbox"
               checked={parentValue}
               onChange={onClickInputHandler}
        />
    </>
};
export const ControlledSelect = () => {
    return <>
        <select value={'1'}>
            <option>none</option>
            <option>test</option>
            <option>2</option>
            <option>3</option>
        </select>
    </>
};
export const ControlledInputWithFixedValue = () => <input  value={"it-incubator"}/>