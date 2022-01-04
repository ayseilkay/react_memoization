import { useState } from 'react';
import './App.css';
import Header from './components/Header';

//Biz Header Componentini React.memo() ile sarmalladık. Tekrar render olmasın diye.
// Eger componenta geçilen proplar degisirse o zaman yeniden render edilir.

// React.memo() yapısında değişen bir prop yoksa render gerçekleşmez. Ama prop da değişim varsa  render gerçekleşir
function App() {

  const [number,setNumber]= useState(0);

  return (
    <div className="App">
      <Header number={number < 5 ? 0:number}/>
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number + 1)}>click</button>
    </div>
  );
}

export default App;
