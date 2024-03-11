import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import Access from "./pages/Access";
import Login from "./components/Login";
import ThemeSelector from "./components/ThemeSelector";
import TopNav from "./components/TopNav";
import { useContext } from "react";
import { Auth, AuthContext } from "./context/AuthContext";
import ToastPortal from "./components/Toast";

function App() {
  const { authErrors } = useContext(AuthContext) as Auth;
  return (
    <main className="bg-zinc-100 dark:bg-gray-900 min-h-svh">
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
      <section id="toastContainer">
        {authErrors.status && (
          <ToastPortal message={authErrors.message} type={authErrors.type} />
        )}
      </section>
    </main>
  );
}

export default App;
