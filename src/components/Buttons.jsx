import './buttons.css'
const Buttons = (props) =>{
    return(
        <>
            <button className={`btn ${props.class}`} onClick={props.addVal} id={props.id}>
                {props.bntVal}
            </button>
        </>
    )
}

export default Buttons;