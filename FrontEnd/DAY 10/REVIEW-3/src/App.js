// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import AdminDashboard from "./Components/AdminDashboard";
import Layout from "./Components/Layout";
import Exampletest from "./Pages/Exampletest";
import DAdmin from "./Components/DAdmin";
import AddDoctorForm from "./Components/AddDoctorForm";
import Signup from "./Components/Signup";
import PatientAdmin from "./Components/PatientAdmin"
import Userdash from "./Components/Userdash";
import Doctordash from "./Components/Doctordash";
import AddPatientForm from "./Components/AddPatientForm";
import LoginOptions from "./Components/LoginOptions";
import Patientlogin from "./Components/Patientlogin";
import Doctorlogin from "./Components/Doctorlogin";
import Adminlogin from "./Components/Adminlogin";
import Footer from "./Footer/Footer";
import Generalinfo from "./Footer/Generalinfo";
import Consultations from "./Footer/Consultations";
import Hiw from "./Footer/Hiw";
import Tos from "./Footer/Tos";
import Privacypolicy from "./Footer/Privacypolicy";
import Reviews from "./Components/Reviews";
import Fpwd from "./Components/ForgotPassword";
import Payment from "./Components/Payment";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route
          path="/"
            element={
              <Layout> 
                <Home /> 
              </Layout>
            }
          />
          <Route
          path="/admin"
            element={
      
                <AdminDashboard /> }
             
          />
          
          <Route
          path="/userdash"
            element={
              <Layout> 
                <Userdash /> 
              </Layout>
            }
          /><Route
          path="/doctordashboard"
            element={
              <Layout> 
                <Doctordash /> 
              </Layout>
            }
          />
          <Route
          path="/doctorAdmin"
            element={
                <DAdmin /> 
            }
          />
          <Route
          path="/patientAdmin"
            element={
                <PatientAdmin /> 
            }
          />
          <Route
          path="/fpwd"
            element={
                <Fpwd/> 
            }
          />
          <Route
          path="/loginoptions"
            element={
                <LoginOptions /> 
            }
          />
          <Route
          path="/patientLogin"
            element={
                <Patientlogin /> 
            }
          />
          <Route
          path="/doctorLogin"
            element={
                <Doctorlogin /> 
            }
          />
         
          <Route
          path="/adminLogin"
            element={
                <Adminlogin /> 
            }
          />
          <Route
          path="/signup"
            element={
                <Signup /> 
            }
          />
        
          <Route
          path="/addDoctor"
            element={
                <AddDoctorForm /> 
            }
          />
          <Route
          path="/addPatient"
            element={
                <AddPatientForm /> 
            }
          />
          <Route
            path="/legal"
            element={
              <Layout> 
                <Legal /> 
              </Layout>
            }
          />
          <Route
            path="/appointment"
            element={
              <Layout> 
                <Appointment />
              </Layout>
            }
          />
          <Route
          path="/test"
            element={
              <Layout> 
                <Exampletest /> 
              </Layout>
            }
          />
          <Route
          path="/reviews"
            element={
              <Layout> 
                <Reviews /> 
              </Layout>
            }
          />
           <Route
          path="/foot"
            element={
              <Layout> 
                <Footer /> 
              </Layout>
            }
          />

          <Route
          path="/gi"
            element={
              <Layout> 
              <Generalinfo/>
              </Layout>
            }
          />
          <Route
          path="/cons"
            element={
              <Layout> 
              <Consultations/>
              </Layout>
            }
          />

          <Route
          path="/pp"
            element={
              <Layout> 
              <Privacypolicy/>
              </Layout>
            }
          />

        <Route
          path="/hiw"
            element={
              <Layout> 
              <Hiw/>
              </Layout>
            }
          />

<Route
          path="/payment"
            element={
                <Payment /> 
            }
          />

          <Route
          path="/tos"
            element={
              <Layout> 
              <Tos/>
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
