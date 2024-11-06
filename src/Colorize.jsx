import { useState } from "react"

const Colorizer = () => {

    const [color, setColor] = useState("#6d0e0e")

    const changeColor = () => {
        const randomColor = getRandomColor();
        console.log('Color Chnage With', randomColor);
       setColor(randomColor);
    }

    const getRandomColor = () => {
        const random = `#${Math.floor(Math.random() * 16777215) .toString(16)}`
        return random;
    }


return (

    <div className="colorizer">

        <div className="box" style={{backgroundColor: color}}>{color}</div>

        <button onClick={ changeColor } className="changer-color">Change Color</button>
    </div>
)
}


export default Colorizer