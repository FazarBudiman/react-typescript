import { BrowserRouter, Routes, Route} from "react-router-dom";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import Login from "../pages/Login";
import Home from "../pages/Home";
import DataStudent from "../pages/admin/DataStudent";
import DataTeacher from "../pages/admin/DataTeacher";
import DataCourse from "../pages/admin/DataCourse";
import DataMateri from "../pages/admin/DataMateri";
import DataVideoMateri from "../pages/admin/DataVideoMateri";
import SubscriptionPlans from "../pages/admin/SubscriptionPlans";
import DashboardSiswa from "../pages/siswa/DashboardSiswa";
import Course from "../pages/siswa/Course";
import ProgressBelajar from "../pages/siswa/ProgressBelajar";
import LearningPath from "../pages/siswa/LearningPath";
import Materi from "../pages/siswa/Materi";
import VideoMateri from "../pages/siswa/VideoMateri";

interface RouterProps {
    
}
 
const Router: React.FunctionComponent<RouterProps> = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/manage-dashboard" element={<DashboardAdmin />} >
                <Route path="/manage-dashboard/student" element={<DataStudent />} />
                <Route path="/manage-dashboard/teacher" element={<DataTeacher />} />
                <Route path="/manage-dashboard/course" element={<DataCourse />} />
                <Route path="/manage-dashboard/materi" element={<DataMateri />} />
                <Route path="/manage-dashboard/video-materi" element={<DataVideoMateri />} />
                <Route path="/manage-dashboard/subscription-plans" element={<SubscriptionPlans />} />
            </Route>
            <Route path="/dashboard" element={<DashboardSiswa/>}>
                {/* <Route path="/dashboard/course" element={<Course />} >
                    <Route path="/dashboard/course/materi" element={<Materi />} />
                </Route> */}
                <Route path="/dashboard/course" element={<Course />} />
                <Route path="/dashboard/course/materi" element={<Materi />} />
                <Route path="/dashboard/course/materi/video-materi" element={<VideoMateri />} />
                <Route path="/dashboard/learning-path" element={<LearningPath />} />
                <Route path="/dashboard/progress-belajar" element={<ProgressBelajar />} />
            </Route>
        </Routes>
        </BrowserRouter>
     );
}
 
export default Router;