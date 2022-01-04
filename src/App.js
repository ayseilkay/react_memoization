import { useState,useMemo } from 'react';
import './App.css';
import Header from './components/Header';

//Biz Header Componentini React.memo() ile sarmalladık. Tekrar render olmasın diye.
// Eger componenta geçilen proplar degisirse o zaman yeniden render edilir.

// React.memo() yapısında değişen bir prop yoksa render gerçekleşmez. Ama prop da değişim varsa  render gerçekleşir

// datayı ekledigimizde {} === {} referans farklılıgından dolayı false döner.
// Bu nedenle  const data = {name:"Ayse"} yapısını dısarıya alıyoruz
// const data = {name:"Ayse"}//bunu dısarda yazamıyorsak illa içerde tanımlamamız gerekiyor ise(useMemo kullanılır)
function App() {

  const [number,setNumber]= useState(0);
  const data = useMemo(()=> {
      return {name:"Ayse",number} // peki ne zaman bu data yeniden hesaplanacak? 
  },[number]) // Ancak dependency array de belirtmis olunan veriler değiştiği anda hesaplanır.
  return (
    <div className="App">
      <Header number={number < 5 ? 0:number} data={data}/>
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number + 1)}>click</button>
    </div>
  );
}
function calculateObject(){
  return { name:"AYLIN"}
}
export default App;
