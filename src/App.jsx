import './App.css'
import React from "react"
import './App.css'

const App = () => (
    <>
      <h1>Infiviz as an iFrame</h1>
      <iframe
        style={{border: "0"}} 
        width="1000" 
        height="750" 
        src="https://infiviz.me/" 
        allowFullScreen />
      {/* https://2b54-106-51-84-218.ngrok-free.app */}
      {/* <iframe width="700" height="700" src="https://2b54-106-51-84-218.ngrok-free.app"></iframe> */}
      {/* <button onClick={() => document.cookie = "username=John Doe; SameSite=None; Secure"}>Set cookie</button> */}
    </>
)
export default App
