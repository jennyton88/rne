//import React, {useEffect, useState} from 'react'
import React from 'react';
import './App.css';

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

      {/* <UserPost /> */}

      <Posted />
      <CreatePost />
    </div>
  )
}

function Posted() {
  return (
    <div className="posted">
      <h2>Header</h2>
      {/* <p>Text</p> */}
      <TextBox />
      <p>like</p>
      <p>comment</p>
    </div>
  )
}

function TextBox() {
  return (
    <div className="text-box">
      <p>Hello</p>
    </div>
  )
}

const userText = document.body.querySelector("#create-post-button");

function CreatePost() {
  return (
    <div className="create-post">
      <h2>Create post</h2>
      <textarea></textarea>

      <button id="create-post-button">Create</button>
      <button>Cancel</button>
      
    </div>
  )
}

function LikeButton() {
  return (
    <div className="like-button">
        <button>Like</button>
    </div>
  )
}

function CommentButton() {
  return (
    <div className="comment-button">
      <button>Comment</button>
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
              <td>Text area</td>
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

function AddPost() {
  return (
    <div className="add-post">

    </div>
  )
}

export default App

 // //http://localhost:3000/  npm start on client for app front end display