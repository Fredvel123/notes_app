// components
import LogIn from "./components/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
