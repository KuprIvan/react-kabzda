import React, {useState} from 'react'
import {OnOff} from './OnOff'
import { action } from '@storybook/addon-actions'

export default {
    title: 'OnOff',
    component: OnOff,
}


const callback = action('on or off clicked')

export const OnMode = () => <OnOff onOff={false} onClick={callback} />;
export const OffMode = () => <OnOff onOff={true} onClick={callback} />;
export const ModeChanging = () => {
    const [value, setValue] = useState(true)

    return <OnOff onOff={value} onClick={setValue} />;
}


