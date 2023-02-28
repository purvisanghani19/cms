import { RiDashboardFill } from "react-icons/ri";
import { FaEnvelopeOpenText, FaGraduationCap, FaRupeeSign, FaUserAlt, FaUsers } from "react-icons/fa";
import { BsCalendarCheckFill, BsFillBellFill } from "react-icons/bs";
import {VscFeedback} from "react-icons/vsc";
import DashBoard from "../Pages/faculty/DashBoard/DashBoard";
import About from "../Pages/User/Home/About";
import Contact from "../Pages/User/Home/Contact";
import Home from "../Pages/User/Home/Home";
import Login from "../Pages/User/Home/Login";
import Attandance from "../Pages/faculty/Attendance/Attandance";
import Result from "../Pages/faculty/Result/Result";
import StuDashBoard from "../Pages/Student/DashBoard/StuDashBoard";
import Stuattandance from "../Pages/Student/Attendance/Stuattandance";
import StuResult from "../Pages/Student/Result/StuResult";
import Studentpro from "../Pages/Student/Student/Studentpro";
import Notification from "../Pages/Student/Notice/Notification";
import Payfee from "../Pages/Student/Fees/Payfee";
import StuFees from "../Pages/Student/Fees/StuFees";
import Studentlist from "../Pages/faculty/student list/Studentlist";
import Facleaveform from "../Pages/faculty/Leave notice/Facleaveform";
import Notice from "../Pages/faculty/Leave notice/Notice";
import Facultyattandance from "../Pages/faculty/my attanance/Facultyattandance";
import Facnotice from "../Pages/faculty/Notice/Subfacnotice";
import Stunotice from "../Pages/Student/lev notice/Stunotice";
import Stuleaveform from "../Pages/Student/lev notice/Stuleaveform";
import Studentleavnotice from "../Pages/faculty/student leavenotice view/Stuleavnotiview"
import Faculty from "../Pages/faculty/facultypro/Faculty";
import Syllabus from "../Pages/Student/syllabus/Syllabus";
import { GiNotebook } from "react-icons/gi";
import Feedback from "../Pages/Student/Feedback/Feedback";










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
        path: "/result",
        name: "result",
        icon: <FaGraduationCap />,
        element: <Result/>
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
        element: <Notice />,
    },
  
  

    {
        path: "/studentlist",
        name: "studentlist",
        icon: <FaUsers />,
        element: <Studentlist />
    },
    {
        path: "/facleaveform",
        name: "fac leaveform",
        icon: <FaUsers />,
        element: <Facleaveform />
    },
  
    {
        path: "/stuleaveview",
        name: "student notice",
        icon: <FaUsers />,
        element: <Studentleavnotice />
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
        path: "/result",
        name: "result",
        icon: <FaGraduationCap />,
        element: <StuResult />
    },
    {
        path: "/stunotice",
        name: "notice",
        icon: <BsFillBellFill />,
        element: <Notification />
    },
    {
        path: "/stuleavenotice",
        name: "Leave Notice",
        icon: <FaEnvelopeOpenText />,
        element: <Stunotice />
    },
    {
        path: "/stufee",
        name: "Sub fee",
        element: <StuFees />
    },
    {
        path: "/Stuleaveform",
        name: "Stuleaveform",
        element: <Stuleaveform />
    },
    {
        path: "/Syllabus",
        name: "Syllabus",
        icon: <GiNotebook />,
        element: <Syllabus />
    },
    {
        path: "/feedback",
        name: "feedback",
        icon: <VscFeedback />,
        element: <Feedback />
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