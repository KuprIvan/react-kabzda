import React from 'react'
import {action} from '@storybook/addon-actions'
import OnOff from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
}


const callback = action('on or off clicked')

export const OnMode = () => <OnOff onOff={false}/>;
export const OffMode = () => <OnOff onOff={true}/>;
// export const ModeChanging = () => {
//     const [value, setValue] = useState(true)
//
//     return <OnOff onOff={value} onClick={setValue} />;
// }


