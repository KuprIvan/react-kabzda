import React, {useState} from 'react'
import {Accordion} from './Accordion'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Accordion',
    component: Accordion,
}


const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={false} onChange={callback} items={[]} onClick={onClickCallback} />;
export const UnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={true} onChange={callback} onClick={onClickCallback} items={[{title: 'Ivan', value: 1},{title: 'Valera', value: 2}, {title: 'Viktor', value: 3}, {title: 'Artem', value: 4}]}/>;
export const ModeChanging = () => {
    const [value, setValue] = useState(true)

    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)} onClick={(id) => { alert(`user with ID ${id} should be happy`) } } items={[{title: 'Ivan', value: 1},{title: 'Valera', value: 2}, {title: 'Viktor', value: 3}, {title: 'Artem', value: 4}]} />;
}


