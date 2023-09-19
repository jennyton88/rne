import React, {useEffect, useState} from 'react'
import './App.css'
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
      <div className="feed-post">
        <table className="table-post">
          <thead>
            <tr>
              <td>Heading</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Text area ttttttttt</td>
            </tr>
            <tr>
              <td>Like button</td>
              <td>Empty space</td>
              <td>Comment</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default App

 // //http://localhost:3000/  npm start on client for app front end display