import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import StorageUsage from "../pages/StorageUsage";

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/storage" element={<StorageUsage />} />
          {/* More routes will be added here */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
