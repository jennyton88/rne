import React, {useEffect, useState} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then( // relative route since proxy added
      response => response.json() // give json 
    ).then(
      data => {
        setBackendData(data) // put data into this var
      }
    )
  }, []) // array for running on first render of component
  return (
    <div>

    </div>
  )
}

export default App