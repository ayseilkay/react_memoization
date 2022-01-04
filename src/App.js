import { useState,useMemo,useCallback } from 'react';
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
      return {name:"AYSE"} // peki ne zaman bu data yeniden hesaplanacak? 
  },[]) // Ancak dependency array de belirtmis olunan veriler değiştiği anda hesaplanır.

  const increment = useCallback(
    () => {
     setNumber((prevState)=> prevState +1 )//setNumber(number + 1) ı sildik preview hale getirdik
    },
    [],// burada number yazılırken sayı her degistiginde tekrar render ediliyordu. o yüzden numberı sildik
  )
  return (
    <div className="App">
      <Header increment={increment}/>
      <h1>{number}</h1>
      {/* <button onClick={()=> setNumber(number + 1)}>click</button> */}
    </div>
  );
}
// // function calculateObject(){
//   console.log("Calculating .....")
//   for (let i = 0; i <1000000000; i++) {

//   }
//   console.log("Calculating Done...")
//   return { name:"AYLIN"}

// }
export default App;



// Toparlamak gerekirse;
// Bir fonksiyonunuz varsa ve bu fonksiyonu herhangi bir alta geçiyorsanız. O alt componentın tekrar tekrar render olmasını istemiyorsanız fonksiyonlar özelinde useCallback kullanılır.