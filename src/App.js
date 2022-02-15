import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import PostDetails from "./pages/PostDetails";
import ProfilePage from "./pages/ProfilePage";
import React from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/postPage"
          element={
            <ProtectedRoute>
              <PostPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/postDetails/:id"
          element={
            <ProtectedRoute>
              <PostDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profilePage"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
function ProtectedRoute(props) {

  const isAuthenticated = JSON.parse(localStorage.getItem("userDetails"));
  if (
    isAuthenticated &&
    isAuthenticated.username &&
    isAuthenticated.username.length > 0 &&
    isAuthenticated.email
  ) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
}
