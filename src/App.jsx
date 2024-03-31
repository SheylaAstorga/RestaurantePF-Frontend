import { BrowserRouter, Route, Routes } from "react-router-dom"
import AcercaDeNosotros from "./components/pages/AcercaDeNosotros"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/acercaDeNosotros" element={<AcercaDeNosotros/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
