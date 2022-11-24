import Form from './Form/Form';
import './App.css';
import { useState } from 'react';
import List from './List/List';

function App() {

  const [getText,setText]=useState('');
  const [getList,setList]=useState([]);

  function onSetChangeHandler(event){
    console.log(event.target.value);
    setText(event.target.value);
  }

  function onSubmitHandler(){
    setList([...getList,getText]);
    console.log(getList);
  }
  
  function onResetHandler(index){
  //   let list=getList;
  //   list.splice(index,1);
  //   setList([...list]);
  //  // alert(index);
    setList([]);

    
  }


  return (
    <div className='App'>
      <div className='form'>
      <Form onSubmitHandler={onSubmitHandler} onSetChangeHandler={onSetChangeHandler} onResetHandler={onResetHandler}/>
      </div>
      <div className='list'>
      <List getList={getList} />
      </div>
      
      
    </div>
  );
}

export default App;
