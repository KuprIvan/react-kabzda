import {useState} from "react";

type PropsType = {
    onOff: boolean
}

function OnOff(props: PropsType) {
    const [onOff, setOnOff] = useState(false)

    const onStyle = {
        display: 'inline-block',
        padding: '2px',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: onOff ? 'green' : 'white'
    };
    const offStyle = {
        display: 'inline-block',
        padding: '2px',
        width: '30px',
        height: '20px',
        marginLeft: '5px',
        border: '1px solid black',
        backgroundColor: !onOff ? 'red' : 'white'
    };
    const indicatorStyle = {
        display: 'inline-block',
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        border: '1px solid',
        backgroundColor: onOff ? 'green' : 'red'
    };

    const onClickHandler = () => {
        setOnOff(!onOff)
    }

    return (
        <>
            <div style={onStyle}
                 onClick={onClickHandler}
            >On</div>
            <div style={offStyle}
                 onClick={onClickHandler}
            >Off</div>
            <div style={indicatorStyle}></div>
        </>
    )
}

export default OnOff;