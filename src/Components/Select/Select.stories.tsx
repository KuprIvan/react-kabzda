import React from 'react'
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

export const SelectWithValue = () => <Select value="1"
                                             onChange={action('Clicked')}
                                             items={[
                                                 {value: '1', title: 'Minsk'},
                                                 {value: '2', title: 'Moscow'},
                                                 {value: '3', title: 'Kiev'},
                                             ]}
/>

export const SelectNoValue = () => <Select
                                             onChange={action('Clicked')}
                                             items={[
                                                 {value: '1', title: 'Minsk'},
                                                 {value: '2', title: 'Moscow'},
                                                 {value: '3', title: 'Kiev'},
                                             ]}
/>