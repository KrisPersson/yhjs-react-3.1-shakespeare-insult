import "./Input.css"

function Input({ placeholderText, inputHandler, id }) {

    return (
        <input id={ id } onChange={ inputHandler } className='input' type="text" placeholder={ placeholderText } />
    )
}

export default Input