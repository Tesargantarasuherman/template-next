import Link from 'next/link'

const people = [
    { v: "Car", name: "Bruno" },
    { v: "Bike", name: "Lorem" },
    { v: "Plane", name: "Budi" },
    { v: "Boat", name: "Andi" }
]

export default function index() {
    return (
        <div>
            {
                people.map(e => {
                    return (
                        <p><Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]"><a>Navigate To {e.name}'s {e.v}</a></Link></p>
                    )
                })
            }
        </div>
    )
}
