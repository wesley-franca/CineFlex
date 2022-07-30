import Section from "./Section.js";

function Sections({ dates }) {
    return dates.days.map((day, index)=> {
        return <Section days={day} key={index} />
    })
}


export default Sections;