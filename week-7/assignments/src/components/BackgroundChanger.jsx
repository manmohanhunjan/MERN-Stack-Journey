import { useSetRecoilState } from "recoil"
import { bgAtom } from "../store/atom/bgAtom"

const BackgroundChanger = () => {

    const setBgColor = useSetRecoilState(bgAtom)

    const handleColorChange = (color) => {
        setBgColor(color)
    }

    const buttons = ['red', 'green', 'blue', 'black', 'white', 'yellow', 'orange', 'purple']

    return <div className="bgChanger">
        {buttons.map((button) => (
            button === 'white' || button === 'yellow' ?
                <button key={button} onClick={() => handleColorChange(button)} style={{ backgroundColor: button, color: 'black' }}>{button}</button> :
                <button key={button} onClick={() => handleColorChange(button)} style={{ backgroundColor: button, color: 'white' }}>{button}</button>
        ))}
    </div>
}

export default BackgroundChanger