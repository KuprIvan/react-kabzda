import React, {FC, useState} from 'react';


type PropsType = {
    onOff: boolean
    onClick: (onOff: boolean) => void
}


const Switcher: FC<PropsType> = (props) => {

    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        padding: '2px',
        backgroundColor: props.onOff ? '#0F0' : '#fff'

    }
    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        padding: '2px',
        marginLeft: '5px',
        border: '1px solid #000',
        backgroundColor: props.onOff ? '#FFF' : '#F00'
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        marginLeft: '5px',
        borderRadius: '10px',
        border: '1px solid #000',
        backgroundColor: props.onOff ? '#0F0' : '#F00'
    }

    return <div>
        <div style={onStyle} onClick={() => props.onClick(true)}>On</div>
        <div style={offStyle} onClick={() => props.onClick(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
};

export const OnOff = React.memo(Switcher)

