  import React, { useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementPatientFunction,
  incrementDoctorFunction,
} from "../counter/counterSlice";

function Dashboard() {
  const [patientValue, setPatientValue] = useState(0);
  const [doctorValue, setDoctorValue] = useState(0);

  const dispatch = useDispatch();

  const storePatientValue = useSelector((state) => state.counter.patientCount);
  const storeDoctorValue = useSelector((state) => state.counter.doctorCount);
  const storeTotalCount = useSelector((state) => state.counter.totalCount);

  const doctor = Number(doctorValue) || 0;
  const patient = Number(patientValue) || 0;

  // Define a state variable to track whether PatientEditing is enabled
  const [isPatientEditing, setIsPatientEditing] = useState(false);

  // Function to handle changes in the input field
  const handlePatientChange = (event) => {
    setPatientValue(event.target.value);
  };

  const handleDoctorChange = (event) => {
    setDoctorValue(event.target.value);
  };

  // Function to toggle PatientEditing
  const togglePatientEditing = () => {
    setIsPatientEditing(!isPatientEditing);
  };

  const data = [
    {
      name: "JAN",
      NewPatient: 400,
      OldPatient: 900,
      amt: 25000,
    },
    {
      name: "FEB",
      NewPatient: 300,
      OldPatient: 380,
      amt: 2210,
    },
    {
      name: "MAR",
      NewPatient: 200,
      OldPatient: 800,
      amt: 32900,
    },
    {
      name: "APR",
      NewPatient: 800,
      OldPatient: 900,
      amt: 40000,
    },
    {
      name: "MAY",
      NewPatient: 1890,
      OldPatient: 4800,
      amt: 21810,
    },
    {
      name: "JUN",
      NewPatient: 2390,
      OldPatient: 3800,
      amt: 25000,
    },
    {
      name: "JUL",
      NewPatient: 3490,
      OldPatient: 4300,
      amt: 21000,
    },
    {
      name: "AUG",
      NewPatient: 4290,
      OldPatient: 3200,
      amt: 24000,
    },
    {
      name: "SEP",
      NewPatient: 2320,
      OldPatient: 5200,
      amt: 42000,
    },
    {
      name: "OCT",
      NewPatient: 3220,
      OldPatient: 5020,
      amt: 54000,
    },
    {
      name: "NOV",
      NewPatient: 3520,
      OldPatient: 4420,
      amt: 55000,
    },
    {
      name: "DEC",
      NewPatient: 3020,
      OldPatient: 6420,
      amt: 22000,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>ACTIVE USERS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>120 </h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>DOCTORS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          {isPatientEditing ? (
            <main>
              <input
                type="text"
                value={doctorValue}
                onChange={handleDoctorChange}
                placeholder="Enter text..."
              ></input>
              <button onClick={() => dispatch(incrementDoctorFunction(doctor))}>
                Save
              </button>
            </main>
          ) : (
            <h1>{storeDoctorValue}</h1>
          )}
          <button onClick={togglePatientEditing} className="q">
            {isPatientEditing ? "Exit" : "Edit"} {/* Toggle between "Edit" and "Save" */}
          </button>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>PATIENTS</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          {isPatientEditing ? (
            <main>
              <input
                type="text"
                value={patientValue}
                onChange={handlePatientChange}
                placeholder="Enter text..."
              ></input>
              <button  onClick={() => dispatch(incrementPatientFunction(patient))}>
                Save
              </button>
            </main>
          ) : (
            <h1>{storePatientValue}</h1>
          )}
          <button onClick={togglePatientEditing}>
            {isPatientEditing ? "Exit" : "Edit"} {/* Toggle between "Edit" and "Save" */}
          </button>
        </div>
        
        <div className="card">
          <div className="card-inner">
            <h3>In total Live</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>{storeTotalCount}</h1>
        </div>
      </div>


        <div className='charts'>
            

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="OldPatient" stroke="#004225  " activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="NewPatient" stroke="#E55604" />
                </LineChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="OldPatient" fill="#004225" />
                <Bar dataKey="NewPatient" fill="#E55604" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Dashboard