import { useState} from 'react';

import './App.css';
import data from './para';
function App() {
  const [inputVal , setInputValue] = useState("");
  const [filterData , setFilterData]  = useState([]);

  const genratePara = (e) => {
    if(inputVal >= 10){
      alert("Oppes we have only 10 para in our database😒");
      return;
    }
    
    if(inputVal <= 0){
      alert("Pls Enter a valid number 😒");
      return;
    }
    setFilterData(data.slice(0 , inputVal));
    setInputValue("");
    console.log(filterData)
  }
  
  // useEffect(() => {
  //   setFilterData(data.slice(0 , inputVal));
  // },[inputVal])

  return (
    <div className="App" style={{marginTop:"20px"}}>
      <div className="heading">
       <h2>Tired With Lorem Ipusm ? </h2>
      </div>
      <div className="content">
         <div className="input-area">
          paraGraph : <input type="number" value={inputVal} onChange={(e) => setInputValue(Number(e.target.value))}/>
          <button onClick={genratePara}>Genrate</button>
         </div>
      </div>

      <div className="para-container" style={{width: "80%" , margin : "auto"}}>
        {filterData.map((text , index) => {
          return(
            <p className='para' key={index}>{index + 1}) {text.para}</p>
          )
        })}
      </div>
    </div>
  );
}

export default App;
