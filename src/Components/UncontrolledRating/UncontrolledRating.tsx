import React, {useState} from "react";


export function UncontrolledRating() {
    console.log("UncontrolledRating rendering")

    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>

    )
}


function Star(): JSX.Element {
    console.log("Star rendering")
    const [isBold, setIsBold] = useState<boolean>(false)
    const setBoldHandler = (): void => {
        setIsBold(!isBold)
    }

    const spanStyle = {
        fontWeight: isBold ? '700' : '400',
        marginRight: '5px',
    }

    return (
        <>
            <span style={spanStyle} onClick={setBoldHandler}>star</span>
        </>
    )

}