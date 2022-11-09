import './App.css';
import {useState} from 'react';

function App() {
  const [form,setForm] = useState({})

  let handelClick = ()=>{
    console.log( JSON.stringify(form) );
  }

  let updateForm = (event)=>setForm({...form, [event.target.name] : event.target.value})

  return (
    <div className="App">
      <div className="form">
        <input type = {"text"} name = {"login"} placeholder ={"login"} onChange = {updateForm}/>
        <input type = {"text"}  name = {"password"} placeholder ={"password"} onChange = {updateForm}/>
        <button onClick ={handelClick}>Send</button>
      </div>
    </div>
  );
}

export default App;
