import Button from "../Button/Button"
import { differences } from "../data"
import { useState } from "react"


export default function ButtonSection() {
    const [contentType, setContentType] = useState()
    function click_button(type) {
        setContentType(type)
    }
    let content = contentType ? <p>{differences[contentType]}</p> : <p>Нажмите на кнопку!</p>

    return (
        <section>
            <Button isActive={() => contentType === "way"} onClick={() => click_button("way")}>Подход</Button>
            <Button isActive={() => contentType === "easy"} onClick={() => click_button("easy")}>Доступность</Button>
            <Button isActive={() => contentType === "program"} onClick={() => click_button("program")}>Концентрация</Button>
            {content}
        </section>
    )
}