import { BrowserRouter,Routes,Route } from "react-router-dom";
import Test from "./test";
function App() {
  

  return (
    <>
   <BrowserRouter>
    <Routes>
        <Route path="/"element={<Test/>}/>
        <Route path="/about"element={<h1>This is about page</h1>}/>

    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App;
