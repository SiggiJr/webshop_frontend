import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './pages/Dashboard'
import Protected from './components/Protected'
import Details from './pages/Details'

function App() {

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/product/:id' element={<Details/>}/>
        <Route element={<Protected/>}>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
