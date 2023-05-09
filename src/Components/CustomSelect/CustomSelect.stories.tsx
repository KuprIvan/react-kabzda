import {CustomSelect} from "./CustomSelect";
import {useState} from "react";

export default {
    title: 'CustomSelect',
    component: CustomSelect
}

export const WithValue = () => {
    const [value, setValue] = useState('2');

    return <>
        <CustomSelect
            onChange={setValue}
            value={value}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'},
            ]}/>
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    return <>
        <CustomSelect
            onChange={setValue}
            value={value}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'},
            ]}/>
    </>
}