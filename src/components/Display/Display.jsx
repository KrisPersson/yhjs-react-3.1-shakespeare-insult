import "./Display.css"

function Display({ usedInsults }) {

    return (
        <section className='insult-display'>
            <p className='insult-display__p'>{ usedInsults.length > 0 ? usedInsults[usedInsults.length - 1].insult : 'Click the button above to generate an insult'}</p>
            <p className='insult-display__p'>{ usedInsults.length > 0 ? usedInsults[usedInsults.length - 1].play : ''}</p>
        </section>
    )
}

export default Display