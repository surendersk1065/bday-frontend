  import Home from "./components/Home"
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
  import Wishes from "./components/Wishes"
  import Login from "./components/Login"
  import ProtectedRoute from "./ProtectedRoute"
  import Message from "./components/Message"
  import Memories from "./components/Memories"
  import Final from "./components/Final"

  function App() {


    return (
      <>
        <BrowserRouter>

          <Routes>
            <Route path="/" element = {<Login />} />
            <Route path="/home" element = {<ProtectedRoute><Home /></ProtectedRoute>}/>
            <Route path="/wishes" element = {<ProtectedRoute><Wishes /></ProtectedRoute>} />
            <Route path="/message" element = {<ProtectedRoute><Message /></ProtectedRoute>} />
            <Route path="/memories/*" element = {<ProtectedRoute><Memories /></ProtectedRoute>} />
            <Route path="/final" element = {<ProtectedRoute><Final /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>

      </>
    )
  }

  export default App
