import "./App.css";
import { Route, Routes } from "react-router-dom";

import ListEmployeeComponent from "./page/AdminDashboard/ListEmployeeComponent";
import ViewEmployeeComponent from "./page/AdminDashboard/ViewEmployeeComponent";
import CreateEmployeeComponent from "./page/AdminDashboard/CreateEmployeeComponent";



function App() {
 
  return (
    <div>
      <Header />
      <Routes>
      
        <Route path="/admindashb" element={<ListEmployeeComponent />} />
        <Route path="/admindashb/add-employee" element={<CreateEmployeeComponent />} />
        <Route path="/admindashb/view-employee/:id" element={<ViewEmployeeComponent />} />
    
       
     
      </Routes>
    </div>
  );
}

export default App;
