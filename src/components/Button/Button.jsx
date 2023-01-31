import "./Button.css"

function Button({ buttonText, clickHandler, btnClass }) {

    return (
        <button className={`btn ${btnClass}`} onClick={ clickHandler }>{ buttonText }</button>
    )
}

export default Button