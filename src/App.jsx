
import LoginForm from './components/LoginForm'
import HomePage from './components/LoginStatus';
import SignupForm from './components/SignupForm';
import AIForm from './components/AIForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'



function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignupForm />} />
        <Route path="/quiz" element={<AIForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
