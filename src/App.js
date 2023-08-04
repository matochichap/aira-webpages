import './App.css'
import JobDetailsPage from './JobDetailsPage'
import ResumeFeedbackPage from './ResumeFeedbackPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="app">
    <Routes>
      <Route path="job-details/:searchId/:jobId" element={
        <JobDetailsPage></JobDetailsPage>
      }></Route>
      <Route path="resume-feedback/:analysisId" element={
        <ResumeFeedbackPage></ResumeFeedbackPage>
      }></Route>
    </Routes>    
    </div>
  )
}

export default App