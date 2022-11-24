import './List.css';

const List= (props)=>{
    return(<div className='list'>
        <ul>
            
                {props.getList.map((obj,index)=>{
                    return(<div key={index}>
                        <li>
                            {obj}    
                        </li>
                        {/* <button onClick={()=>props.onResetHandler(index)}>RESET</button> */}
                    </div>)
                })}
            

        </ul>    
    </div>) 
}
export default List;