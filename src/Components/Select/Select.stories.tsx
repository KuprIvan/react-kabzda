import React from 'react'
import {Select} from './Select'
import {Rating} from "../Rating/Rating";

export default {
    title: 'Custom Select',
    component: Select
}

export const EmptySelect = () => <Select items={[{title: 'Ivan', value: 1},{title: 'Valera', value: 2}, {title: 'Viktor', value: 3}, {title: 'Artem', value: 4}]}  onChange={() => {}} />