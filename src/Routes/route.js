import { RiDashboardFill } from "react-icons/ri";
import { FaEnvelopeOpenText, FaRupeeSign, FaUserAlt, FaUsers } from "react-icons/fa";
import { BsCalendarCheckFill, BsFillBellFill } from "react-icons/bs";
import {VscFeedback} from "react-icons/vsc";
import DashBoard from "../Pages/faculty/DashBoard/DashBoard";
import About from "../Pages/User/Home/About";
import Contact from "../Pages/User/Home/Contact";
import Home from "../Pages/User/Home/Home";
import Login from "../Pages/User/Home/Login";
import Attandance from "../Pages/faculty/Attendance/Attandance";
import StuDashBoard from "../Pages/Student/DashBoard/StuDashBoard";
import Stuattandance from "../Pages/Student/Attendance/Stuattandance";
import Studentpro from "../Pages/Student/Student/Studentpro";
import Notification from "../Pages/Student/Notice/Studentnotice";
import Payfee from "../Pages/Student/Fees/Payfee";
import StuFees from "../Pages/Student/Fees/StuFees";
import Studentlist from "../Pages/faculty/student list/Studentlist";
import Facultyattandance from "../Pages/faculty/my attanance/Facultyattandance";
import Facnotice from "../Pages/faculty/Notice/facnotice";
// import Stunotice from "../Pages/Student/lev notice/Stunotice";
import Stuleaveform from "../Pages/Student/lev notice/Stuleaveform";
import Faculty from "../Pages/faculty/facultyprofile/Faculty";
import { GiNotebook } from "react-icons/gi";
import Facleavenotice from "../Pages/faculty/faculty lave notice/Facleavenotice";
import Feedback from "../Pages/Student/Feedback/Feedback";
import View from "../Pages/faculty/faculty lave notice/View";
import Addleave from "../Pages/faculty/faculty lave notice/Addleave";
// import Material from "../Pages/Student/syllabus/Material";
import Leavestud from "../Pages/Student/lev notice/Leavestud";
import Stuleavnotiview from "../Pages/faculty/student leavenotice view/Stuleavnotiview";
import Studentviewnotice from "../Pages/Student/lev notice/Studentviewnotice";
import Studfeedform from "../Pages/Student/Feedback/Studfeedform";
import Addmateraial from "../Pages/faculty/Material/Addmateraial";
import Material from "../Pages/faculty/Material/Material";
import Studmaterial from "../Pages/Student/Student material/Studmaterial";










export const faculty = [
    {
        path: "/dashboard",
        name: "dashboard",
        icon: <RiDashboardFill />,
        element: <DashBoard />
    },
    {
        path: "/facultyprofile",
        name: "faculty profile",
        icon: <RiDashboardFill />,
        element: <Faculty />
    },
    {
        path: "/facultyattandance",
        name: "My attandance",
        icon: <FaUsers />,
        element: <Facultyattandance />
    },
    {
        path: "/attandance",
        name: "student attandance",
        icon: <BsCalendarCheckFill />,
        element: <Attandance />
    },
  
    {
        path: "/facnotice",
        name: "notice",
        icon: <BsFillBellFill />,
        element: <Facnotice />
    },
    {
        path: "/facleavenotice",
        name: "Leave notice",
        icon: <FaEnvelopeOpenText />,
        element: <Facleavenotice />,
    },
    {
        path: "/facleavenotice/viewnotice",
        name: "view notice",
        element: <View />,
    },
    {
        path: "/facleavenotice/addleave",
        name: "add leave",
        icon: <FaEnvelopeOpenText />,
        element: <Addleave />,
    },
    {
        path: "/material",
        name: "Material",
        icon: <GiNotebook />,
        element: <Material />,
    },
    {
        path: "/material/addmaterial",
        name: "add material",
        element: <Addmateraial />,
    },
    {
        path: "/studentlist",
        name: "studentlist",
        icon: <FaUsers />,
        element: <Studentlist />
    },
    {
        path: "/stuleaveview",
        name: "student notice",
        icon: <FaUsers />,
        element: <Stuleavnotiview />
    },


];

export const Student = [
    {
        path: "/studashboard",
        name: "student Dashboard",
        icon: <RiDashboardFill />,
        element: <StuDashBoard />
    },
    {
        path: "/studentpro",
        name: "student profile",
        icon: <FaUserAlt />,
        element: <Studentpro />
    },
    {
        path: "/stuattendance",
        name: "Attendance",
        icon: <BsCalendarCheckFill />,
        element: <Stuattandance />
    },
    {
        path: "/payfee",
        name: "Fee pay",
        icon: <FaRupeeSign />,
        element: <Payfee />
    },
    {
        path: "/stunotice",
        name: "notice",
        icon: <BsFillBellFill />,
        element: <Notification />
    },

    {
        path: "/Leavestud",
        name: "Leavestud",
        icon: <FaEnvelopeOpenText />,
        element: <Leavestud />
    },
    {
        path: "/stufee",
        name: "Sub fee",
        element: <StuFees />
    },
    {
        path: "/Leavestud/Stuleaveform",
        name: "Stuleaveform",
        element: <Stuleaveform />
    },
    {
        path: "/Leavestud/studentviewnotice",
        name: "student view notice",
        element: <Studentviewnotice />
    },
    
    {
        path: "/stumaterial",
        name: "Material",
        icon: <GiNotebook />,
        element: <Studmaterial />
    },
    {
        path: "/feedback",
        name: "feedback",
        icon: <VscFeedback />,
        element: <Feedback />
    },
    {
        path: "/studfeedform",
        name: "Studfeedform",
        icon: <VscFeedback />,
        element: <Studfeedform />
    },




];


export const user = [
    {
        path: "/",
        name: "Home",
        element: <Home />
    },
    {
        path: "/about",
        name: "about",
        element: <About />
    },
    {
        path: "/contact",
        name: "Contact",
        element: <Contact />
    },
    {
        path: "/login",
        name: "login",
        element: <Login />,
    },

];