import "./Button.css"
function Button({children, width, height}){
    return(
        <button style={{width: width, height: height}}>
            {children}
        </button>
    )
}

export default Button;