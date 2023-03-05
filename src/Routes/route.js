import { RiDashboardFill } from "react-icons/ri";
import { FaEnvelopeOpenText, FaGraduationCap, FaUserAlt, FaUsers } from "react-icons/fa";
import { BsCalendarCheckFill, BsFillBellFill, BsFillCalendarFill } from "react-icons/bs";
import {VscFeedback} from "react-icons/vsc";
import DashBoard from "../Pages/faculty/DashBoard/DashBoard";
import About from "../Pages/User/Home/About";
import Contact from "../Pages/User/Home/Contact";
import Home from "../Pages/User/Home/Home";
import Login from "../Pages/User/Home/Login";
import StuResult from "../Pages/Student/Result/StuResult";
import Attandance from "../Pages/faculty/Attendance/Attandance";
import StuDashBoard from "../Pages/Student/DashBoard/StuDashBoard";
import Stuattandance from "../Pages/Student/Attendance/Stuattandance";
import Studentpro from "../Pages/Student/Student/Studentpro";
import Notification from "../Pages/Student/Notice/Studentnotice";
// import Payfee from "../Pages/Student/Fees/Payfee";
// import StuFees from "../Pages/Student/Fees/StuFees";
import Studentlist from "../Pages/faculty/student list/Studentlist";
import Facnotice from "../Pages/faculty/Notice/facnotice";
import Stuleaveform from "../Pages/Student/lev notice/Stuleaveform";
import Faculty from "../Pages/faculty/facultyprofile/Faculty";
import { GiNotebook } from "react-icons/gi";
import Facleavenotice from "../Pages/faculty/faculty lave notice/Facleavenotice";
import Feedback from "../Pages/Student/Feedback/Feedback";
import View from "../Pages/faculty/faculty lave notice/View";
import Addleave from "../Pages/faculty/faculty lave notice/Addleave";
import Leavestud from "../Pages/Student/lev notice/Leavestud";
import Stuleavnotiview from "../Pages/faculty/student leavenotice view/Stuleavnotiview";
import Studentviewnotice from "../Pages/Student/lev notice/Studentviewnotice";
import Studfeedform from "../Pages/Student/Feedback/Studfeedform";
import Addmateraial from "../Pages/faculty/Material/Addmateraial";
import Material from "../Pages/faculty/Material/Material";
import Studmaterial from "../Pages/Student/Student material/Studmaterial";
import Stulistprofile from "../Pages/faculty/student list/Stulistprofile";
import Viewstudmaterial from "../Pages/Student/Student material/Viewstudmaterial";
import FacFeedback from "../Pages/faculty/Feedback/FacFeedback";
import Facfeedform from "../Pages/faculty/Feedback/Facfeedform";
import Stufacfeedback from "../Pages/faculty/Student feedback/Stufacfeedback";
import Viewstufeedback from "../Pages/faculty/Student feedback/Viewstufeedback";
import { MdFeedback } from "react-icons/md";

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
        element: <Faculty />
    },
    
    {
        path: "/stuattandance",
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
        path: "/studentlist/stulistprofile",
        name: "stulist profile",
        element: <Stulistprofile />
    },
    {
        path: "/stuleaveview",
        name: "student Leave notice",
        icon: <BsFillCalendarFill />,
        element: <Stuleavnotiview />
    },
    {
        path: "/facfeedback",
        name: "My feedback",
        icon: <MdFeedback />,
        element: <FacFeedback />
    },
    {
        path: "/addfacfeedback",
        name: "add facfeedbackform",
        element: <Facfeedform />
    },
    {
        path: "/stufacfeedback",
        name: "student feedback",
        icon: <VscFeedback />,
        element: <Stufacfeedback />
    },
    {
        path: "/viewstufeedback",
        name: "view student feedback",
        element: <Viewstufeedback />
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
    // {
    //     path: "/payfee",
    //     name: "Fee pay",
    //     icon: <FaRupeeSign />,
    //     element: <Payfee />
    // },
    {
        path: "/studresult",
        name: "Exam Result",
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
        path: "/Leavestud",
        name: "Leavestud",
        icon: <FaEnvelopeOpenText />,
        element: <Leavestud />
    },
    // {
    //     path: "/stufee",
    //     name: "Sub fee",
    //     element: <StuFees />
    // },
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
    {
        path: "/Viewstudmaterial",
        name: "Viewstudmaterial",
        icon: <VscFeedback />,
        element: <Viewstudmaterial />
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