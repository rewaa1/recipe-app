import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar"
import HomePage from "./pages/HomePage"
import FavouritesPage from "./pages/FavouritesPage"


function App() {
  

  return (
    <div className="flex">
      <Sidebar />
      <Routes >
        <Route path="/" element={<HomePage />}/>
        <Route path="/favourites" element={<FavouritesPage />}/>
      </Routes>
    </div>
  )
}

export default App
