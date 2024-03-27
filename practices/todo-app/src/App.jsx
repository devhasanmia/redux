import React from 'react'
import Navbar from './components/Navber'
import Footer from './components/Footer'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecentComplete from './pages/Recent-Complete'
import TodoList from './pages/TodoList'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/recentcomplete" element={<RecentComplete />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </Provider>
  )
}

export default App
