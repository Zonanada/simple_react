import { ways } from "../data"
import WayToTeach from "../WayToTeach"


export default function TeachSection() {
    return (
        <section>
            <h3 style={{margin: "1rem"}}>Наш подход к обучению</h3>
            <ul>
                {ways.map((way) => (
                    <WayToTeach key={way.title} {...way}></WayToTeach>))}
            </ul>
        </section>
    )
}