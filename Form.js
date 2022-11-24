import './Form.css';


const Form=(props)=>{
    return(<div className='form'>
        <input type="text" name='notes' onChange={props.onSetChangeHandler}/>
        <br/>
        <br/>
        <button onClick={props.onSubmitHandler} type='submit'>SUBMIT</button>
        <button onClick={props.onResetHandler} type="reset">RESET</button>

    </div>)
}

export default Form;