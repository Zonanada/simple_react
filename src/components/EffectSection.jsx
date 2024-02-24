import Button from "../Button/Button"
import Modal from "../modal/Modal"
import useInput from "../useInput"
import { useEffect, useState } from "react"

export default function EffectSection() {
    const input = useInput()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await response.json()
            setUsers(users)
            setLoading(false)
        }

        fetchUsers()
    }, [])



    function openModal() {
        setIsModalOpen((prev) => !prev)
    }

    return (
        <section style={{ marginTop: "1rem" }}>
            <h3>Effect</h3>

            <Button onClick={openModal} style={{marginBottom:"1rem"}}>Открыть информацию</Button>

            <Modal isOpen={isModalOpen}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi molestiae voluptate vel earum, odio pariatur tenetur, atque autem harum officiis fugiat impedit quo alias culpa. Tempora fugit repudiandae aperiam expedita.</p>
                <Button onClick={() => setIsModalOpen(false)}>Close modal</Button>
            </Modal>
            {loading && <p>Loading...</p>}
            {!loading && (
            <>
            <input type="text" className="control" {...input} />
            <h6>{input.value}</h6>
            <ul style={{marginTop:"1rem"}}>
                {users.
                    filter((user) =>
                        user.name.toLowerCase().includes(input.value.toLowerCase())
                        )
                        .map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                </ul>
            </>
                )}
            

        </section>
    )
}