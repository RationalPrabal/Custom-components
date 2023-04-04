
import './App.css';
import React from 'react';
import Single from './Single';
function App() {
const [a,setA]= React.useState([])
function finished(val){
setA([...a,val])


}
React.useEffect(()=>{
if(a.length===arr.length){
  fun(a)
}
},[a])

function fun(a){
  let i=0
 let id= setInterval(()=>{
a[i].style.background="none"
i++

if(i===a.length){
  clearInterval(id)
}
  },1000)
}

  const arr=[1,2,3,4,5,6]
  return (
    <div className="App">
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)",width:"20%",margin:"auto",gap:"10px" }}>
     {
   arr.map(el=><Single key={el} el={el} finished={finished}/>)
     }
     </div>
    </div>
  );
}

export default App;
