import React from "react";
import Hero from "../Components/Hero";
import BookAppointment from "../Components/BookAppointment";
import Doctors from "../Components/Doctors";

function Home() {
  return (
    <div className="home-section">
      <Hero />
      
        
      <BookAppointment />
      <Doctors />
    </div>
  );
}

export default Home;
