// doctorsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadDoctorsFromLocalStorage = () => {
  try {
    const serializedDoctors = localStorage.getItem("doctors");
    return serializedDoctors ? JSON.parse(serializedDoctors) : [];
  } catch (error) {
    console.error("Error loading doctors from local storage:", error);
    return [];
  }
};

const hasDataInLocalStorage = Boolean(localStorage.getItem("doctors"));

const initialData = hasDataInLocalStorage ? loadDoctorsFromLocalStorage() : [
  {
    name: 'Dr.Ravi Mohanka',
    imageSrc: 'https://cdn.siasat.com/wp-content/uploads/2023/04/Dr-Sudhir-Kumar.png',
    qualification: 'MBBS',
    specialization: 'Angiography',
    exp: 7,
    age: 41,
    rating: 4.3,
  },
  // Add your other initial data here...
];

const initialState = [...initialData];

const doctorsSlice = createSlice({
  name: "doctorsdetails",
  initialState,
  reducers: {
    doctorsAdded: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.removeItem("doctors");
        localStorage.setItem("doctors", JSON.stringify(state));
      },
      prepare(name, qualification, specialization, exp, age, rating) {
        return {
          payload: {
            name,
            imageSrc: "https://virinchihospitals.com/wp-content/uploads/2023/01/IMG-20230117-WA0006.jpg",
            qualification,
            specialization,
            exp,
            age,
            rating,
          },
        };
      },
    },
  },
});

export const { doctorsAdded } = doctorsSlice.actions;
export const selectAllDoctors = (state) => state.doctorsdetails;
export default doctorsSlice.reducer;
