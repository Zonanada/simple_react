import { useRef, useState } from "react"

export default function StateVsRef() {
    const input = useRef()
    const [show, setShow] = useState(false)

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setShow(true)
        }
    }

    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input
                ref = {input}
                type="text"
                className="control"
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}