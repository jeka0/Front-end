
import './App.css';
import {useState} from 'react';
function App() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  let HandelClick = ()=>{
    let json = {
      "login": login,
      "password": password
    }
    console.log( JSON.stringify(json) );
  }
  let updateLogin = (event)=>setLogin(event.target.value);
  let updatePassword = (event)=>setPassword(event.target.value);
  return (
    <div className="App">
      <div className="form">
        <input type = {"text"} placeholder ={"login"} onInput = {updateLogin}/>
        <input type = {"text"} placeholder ={"password"} onInput = {updatePassword}/>
        <button onClick ={HandelClick}>Send</button>
      </div>
    </div>
  );
}

export default App;
