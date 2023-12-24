import { useState } from "react";
import styles from "./App.module.css";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components & Pages
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <BrowserRouter>
      <main className={styles.app}>
        <Navbar sidebar={showSidebar} showSidebar={setShowSidebar} />
        <div className={styles.app__dashboard}>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <Routes>
            <Route path="/" element={<Dashboard/>} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App