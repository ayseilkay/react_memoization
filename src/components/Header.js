import React from 'react'
// Normal şartlarda React.memo ile sarmalanan bir yapıda biz prop geçmeden re render edilmesini önleyebiliyorduk.
// Ama datayı prop olarak geçtiğimizde geçilen prop aynı olmasına rağmen React.memo ile sarılmış olmasına ragmen re-render meydana geliyor. Bunun sebebi {} === {}  yapısından false dönmesindendir.(referansları farklı)
//Yani veri gözle görüldügünde aynı veri ama eşitliğe bakıdıgında öyle degil.
function Header({number,data,increment}) {
    console.log("Header Component re-rendered")
    return (
        <div>
            <h1>Header - {number} </h1>
            <br/>
            <br/>
            <button onClick={increment}>click Header</button>
            <code>{JSON.stringify(data)}</code>
        </div>
    )
}

export default React.memo(Header)


//increment olarak verdiğmiz fonksiyonunun her defasında aynı oldugunu bir sekilde söylememiz gerekiyor.(useCallback)
