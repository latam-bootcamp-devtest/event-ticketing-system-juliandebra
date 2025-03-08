import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AdminPanel from "./pages/AdminPanel";
import CreateEvent from "./pages/CreateEvent";
import DetailEvent from "./pages/DetailEvent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/event/:id" element={<DetailEvent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
