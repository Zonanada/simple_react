import { useState } from "react"
import StateVsRef from "./StateVsRef"
import Button from "../Button/Button"

export default function FeedBackSection() {
    const [form, setForm] = useState({
        name: '',
        reason: "help",
        hasError: true,
    })

    function handleNameChange(event) {
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length == 0
        }))
    }

    return (
        <section style={{ marginTop: "1rem" }}>
            <h3>Обратная связь</h3>
            <form>
                <label htmlFor="reason">Ваше имя</label>
                <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(event) => handleNameChange(event)}
                    className="control"
                    style={{
                        border: form.hasError ? '1px solid red' : null
                    }} />

                <label htmlFor="reason">Причина обращения</label>
                <select id="reason" className="control" value={form.reason} onChange={(event) => setForm((prev) => ({ ...prev, reason: event.target.value }))}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>
                <Button disabled={form.hasError} isActive={() => !form.hasError}>Отправить</Button>
            </form>

            <div>
                <StateVsRef />
            </div>
        </section>      
    )
}