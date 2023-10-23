import React, {FC, useState} from 'react';


type PropsType = {
    onChange: (onOff: boolean) => void
    defaultOn?: boolean
}


const OnOff: FC<PropsType> = (props) => {

    let [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        padding: '2px',
        backgroundColor: on ? '#0F0' : '#fff'

    }
    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        padding: '2px',
        marginLeft: '5px',
        border: '1px solid #000',
        backgroundColor: on ? '#FFF' : '#F00'
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        marginLeft: '5px',
        borderRadius: '10px',
        border: '1px solid #000',
        backgroundColor: on ? '#0F0' : '#F00'
    }


    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return <div>
        <div style={onStyle}
             onClick={onClicked}
        >On</div>
        <div style={offStyle}
             onClick={offClicked}
             onChange={() => props.onChange(false)}
        >Off</div>
        <div style={indicatorStyle}></div>
    </div>
};

export const UncontrolledOnOff = React.memo(OnOff)

