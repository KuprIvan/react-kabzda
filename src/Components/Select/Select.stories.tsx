import React, {useState} from 'react'
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

export const SelectWithValue = () => {
    const [value, setValue] = useState<string>('1')
    return <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}
        />
    </>
}

export const SelectNoValue = () => {
    const [value, setValue] = useState<string | undefined>(undefined)
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'},
            ]}
        />
    </>
}
