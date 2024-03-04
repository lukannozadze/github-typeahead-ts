import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import DetailPage from "./pages/detail/DetailPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<DetailPage/>}/>
    </Routes>
    </>
  )
}

export default App;
