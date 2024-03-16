import CHeader from './assets/components/CHeader'
import { Routes, Route } from 'react-router-dom'
import Homepage from './assets/components/pages/Homepage'
import CVMaker from './assets/components/pages/CVMaker'
import CVList from './assets/components/pages/RecentCV'
import NotFound from './assets/components/pages/NotFound'
import { useEffect, useState } from 'react'

function App() {

  const [resume, setResume] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4200/resume", { method: "GET" })
      const data = await response.json()
      setResume(data)
    }
    fetchData()
  }, [])

  return (
    <main>
      <div>
        <CHeader />
      </div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='CVMaker' element={<CVMaker setResume={setResume} />} />
        <Route path='CVList' element={<CVList resume={resume} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
