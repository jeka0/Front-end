
import './App.css';
let HandelClick = ()=>alert("addsa");
function App() {
  return (
    <div className="App">
    <input type = {"text"} placeholder ={"login"}/>
     <input type = {"text"} placeholder ={"password"}/>
      <button onclick = "HandelClick">click me</button>
    </div>
  );
}

export default App;
