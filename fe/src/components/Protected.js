// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
};

const roleMap = { 1: "benhnhan", 2: "bacsi", 3: "admin" };

const getRoleName = (user) => {
  if (!user) return null;
  if (user.role) return String(user.role).toLowerCase();
  if (user.role_id != null) return roleMap[user.role_id] || null;
  return null;
};

const ProtectedRoute = ({ children, allowedRoles }) => {
  const location = useLocation();
  const user = getUser();

  // chưa login → về trang đăng nhập
  if (!user) {
    return <Navigate to="/dang-nhap" replace state={{ from: location.pathname }} />;
  }

  // nếu có yêu cầu role thì check tiếp
  if (allowedRoles && allowedRoles.length > 0) {
    const roleName = getRoleName(user);
    if (!allowedRoles.includes(roleName)) {
      return <Navigate to="/dang-nhap" replace state={{ from: location.pathname }} />;
    }
  }

  return children;
};

export default ProtectedRoute;
