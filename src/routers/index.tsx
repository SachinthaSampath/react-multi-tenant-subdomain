import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { AdminHome, AppHome, ExampleHome } from "../pages/Home";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
    </Routes>
  );
};
export const AdminRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} /> 
    </Routes>
  );
};
export const ExampleRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ExampleHome />} />
    </Routes>
  );
};
