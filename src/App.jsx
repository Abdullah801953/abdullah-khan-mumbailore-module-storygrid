import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StoryGridPage from './pages/StoryGridPage'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen p-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text-2xl font-bold mb-4">Welcome to MumbaiLore</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </>
            }
          />
          <Route path="/stories" element={<StoryGridPage />} />
          <Route path="/stories/:id?" element={<StoryGridPage />} />
          <Route path="/submit" />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
