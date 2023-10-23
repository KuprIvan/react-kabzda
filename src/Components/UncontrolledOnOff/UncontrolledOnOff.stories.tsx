import React, {useState} from 'react'
import { UncontrolledOnOff } from './UncontrolledOnOff'
import { action } from '@storybook/addon-actions'

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}


const callback = action('accordion mode change event fired')

export const UncontrolledOn = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>;
export const UncontrolledOff = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>;



