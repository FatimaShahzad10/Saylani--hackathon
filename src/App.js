import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componenets/navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Patient from "./pages/patientLogin";
import Doctor from "./pages/doctor";
import Schedule from "./pages/scheduleAppointments";
import View from "./pages/viewAppointments";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/scheduleAppointments" element={<Schedule />} />
        <Route path="/veiwAppointments" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
