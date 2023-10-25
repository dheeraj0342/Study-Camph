
import './App.css'
import {Signup} from "./Signup.jsx";
import {Navbar} from "./Navbar.jsx";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import {Signin} from "./Signin.jsx";
import {AddCourse} from "./AddCourse.jsx";
import AdminDashboard from "./AdminDashboard.jsx";

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path={"/signup"} element={<Signup/>}></Route>
                    <Route path={"/signin"} element={<Signin/>}></Route>
                    <Route path={"/addcourse"} element={<AddCourse/>}></Route>
                    <Route path={"/admindashboard"} element={<AdminDashboard/>}/>
                </Routes>
            </Router></>


    );
}

export default App
