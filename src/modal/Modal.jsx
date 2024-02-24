import classes from "./Modal.module.css"
import { createPortal } from "react-dom"
import { useRef, useEffect } from "react"



export default function Modal({ children, isOpen }) {
    const dialog = useRef()
    useEffect(() => {
        if (isOpen) {
            dialog.current.showModal()
        } else {
            dialog.current.close()
        }
    }, [isOpen])
    return createPortal(
        <dialog
            ref={dialog}
            className={classes.dialog}>
            {children}
        </dialog>,
        document.getElementById('modal')

    )
}