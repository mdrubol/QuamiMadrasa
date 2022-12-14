import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "../components/loader/Loader";
import DashboardLayout from "../layout/DashboardLayout";
import Layout from "../layout/Layout";
import NotFoundLayout from "../layout/NotFoundLayout";
import Login from "../pages/public/login/Login";
import NotFound from "../pages/public/NotFound";
import NoticeBoard from "../pages/public/notice/NoticeBoard";
import MyClassList from "../pages/secure/academic/MyClassList";
import SectionList from "../pages/secure/academic/SectionList";
import SubjectList from "../pages/secure/academic/SubjectList";
import FeesCollection from "../pages/secure/accounting/feesCollection";
import HeadList from "../pages/secure/accounting/HeadList";
import StaffAttendence from "../pages/secure/attendence/staff/StaffAttendence";
import StudentAttendence from "../pages/secure/attendence/student/StudentAttendence";
import EmployeeList from "../pages/secure/hrm/EmployeeList";
import NoticeList from "../pages/secure/notice/NoticeList";
import StudentForm from "../pages/secure/Student/StudentForm";
import StudentList from "../pages/secure/Student/StudentList";
import TeacherForm from "../pages/secure/teacher/TeacherForm";
import TeacherList from "../pages/secure/teacher/TeacherList";
import authService from "../services/auth.service";
const Home = React.lazy(() => import("../pages/public/home/Home"));
const Contact = React.lazy(() => import("../pages/public/contact/Contact"));
const Dashboard = React.lazy(() =>
  import("../pages/secure/dashboard/Dashboard")
);
const AdminDashboard = React.lazy(() =>
  import("../pages/secure/dashboard/admin.component")
);
const TeacherDashboard = React.lazy(() =>
  import("../pages/secure/dashboard/teacher.component")
);
const AccountantDashboard = React.lazy(() =>
  import("../pages/secure/dashboard/accountant.component")
);

const Profile = React.lazy(() => import("../pages/secure/profile/profile.component"))
const Data = React.lazy(() => import("../pages/secure/data/Data"));
const Table = React.lazy(() => import("../pages/secure/table/Table"));
const Student = React.lazy(() => import("../pages/secure/Student/StudentList"));



const ClientsRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<Loader />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <React.Suspense fallback={<Loader />}>
              <Contact />
            </React.Suspense>
          }
        />
        <Route
          path="notice-board"
          element={
            <React.Suspense fallback={<Loader />}>
              <NoticeBoard />
            </React.Suspense>
          }
        />
        <Route
          path="login"
          element={
            <React.Suspense fallback={<Loader />}>
              <Login />
            </React.Suspense>
          }
        />
      </Route>
      <Route element={authService.isLoggedIn() ? <DashboardLayout /> : <Navigate to="/login" replace />}>
        <Route
          path="dashboard"
          element={
            <React.Suspense fallback={<Loader />}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="admin-dashboard"
          element={
            <React.Suspense fallback={<Loader />}>
              <AdminDashboard />
            </React.Suspense>
          }
        >
          <Route
            path="class"
            element={
              <React.Suspense fallback={<Loader />}>
                <MyClassList />
              </React.Suspense>
            }
          />
          <Route
            path="section"
            element={
              <React.Suspense fallback={<Loader />}>
                <SectionList />
              </React.Suspense>
            }
          />
          <Route
            path="subject"
            element={
              <React.Suspense fallback={<Loader />}>
                <SubjectList />
              </React.Suspense>
            }
          />
          <Route
            path="notices"
            element={
              <React.Suspense fallback={<Loader />}>
                <NoticeList />
              </React.Suspense>
            }
          />
          <Route
            path="heads"
            element={
              <React.Suspense fallback={<Loader />}>
                <HeadList />
              </React.Suspense>
            }
          />
          <Route
            path="fees-collection"
            element={
              <React.Suspense fallback={<Loader />}>
                <FeesCollection />
              </React.Suspense>
            }
          />
          <Route
            path="students"
            element={
              <React.Suspense fallback={<Loader />}>
                <StudentList />
              </React.Suspense>
            }
          />
          <Route
            path="student"
            element={
              <React.Suspense fallback={<Loader />}>
                <StudentForm />
              </React.Suspense>
            }
          />
          <Route
            path="student/:id"
            element={
              <React.Suspense fallback={<Loader />}>
                <StudentForm />
              </React.Suspense>
            }
          />
          <Route
            path="employees"
            element={
              <React.Suspense fallback={<Loader />}>
                <EmployeeList />
              </React.Suspense>
            }
          />
          <Route
            path="teachers"
            element={
              <React.Suspense fallback={<Loader />}>
                <TeacherList />
              </React.Suspense>
            }
          />
          <Route
            path="teacher"
            element={
              <React.Suspense fallback={<Loader />}>
                <TeacherForm />
              </React.Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <React.Suspense fallback={<Loader />}>
                <Profile />
              </React.Suspense>
            }
          />
          <Route
            path="student-attendence"
            element={
              <React.Suspense fallback={<Loader />}>
                <StudentAttendence />
              </React.Suspense>
            }
          />
          <Route
            path="staff-attendence"
            element={
              <React.Suspense fallback={<Loader />}>
                <StaffAttendence />
              </React.Suspense>
            }
          />
          <Route
            path="data"
            element={
              <React.Suspense fallback={<Loader />}>
                <Data />
              </React.Suspense>
            }
          />
          <Route
            path="table"
            element={
              <React.Suspense fallback={<Loader />}>
                <Table />
              </React.Suspense>
            }
          />
        </Route>
        <Route
          path="teacher-dashboard"
          element={
            <React.Suspense fallback={<Loader />}>
              <TeacherDashboard />
            </React.Suspense>
          }
        />
        <Route
          path="account-dashboard"
          element={
            <React.Suspense fallback={<Loader />}>
              <AccountantDashboard />
            </React.Suspense>
          }
        />

      </Route>

      <Route element={<NotFoundLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default ClientsRoutes;
