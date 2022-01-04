import React from 'react'

function Header({number}) {
    console.log("Header Component re-rendered")
    return (
        <div>
            <h1>Header - {number}</h1>
        </div>
    )
}

export default React.memo(Header)
