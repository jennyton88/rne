import React, {useEffect, useState} from 'react'

function App() {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then( // relative route since proxy added
  //     response => response.json() // give json 
  //   ).then(
  //     data => {
  //       setBackendData(data) // put data into this var
  //     }
  //   )
  // }, []) // array for running on first render of component
  return (
    <div>
      {/* {(typeof backendData.users === 'undefined') ? (
        <p>loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key ={i}>{user}</p>
        ))
      )} */}

      <UserPost />
    </div>
  )
}

function UserPost() {
    return (
      <table>
        <thead>
          <tr>
            <td>Heading</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Text area</td>
          </tr>
        </tbody>
      </table>
    )
}

export default App

 // //http://localhost:3000/  npm start on client for app front end display