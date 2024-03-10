import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import Access from "./pages/Access";
import Login from "./components/Login";
import ThemeSelector from "./components/ThemeSelector";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <TopNav>
        <ThemeSelector />
      </TopNav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/access" element={<Access />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
