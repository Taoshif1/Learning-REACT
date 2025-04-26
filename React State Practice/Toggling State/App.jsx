import React from "react"

export default function App() {
    
    const [isGoingOut, setIsGoingOut] = React.useState(false)
    
    function changeMind() {
        setIsGoingOut(prev => !prev)
    }

    return (
        <main>
            <h1 className="title">Do I feel like doing a project tonight?</h1>
            <button 
                onClick={changeMind} 
                className="value"
                aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
            >{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
 