import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import PostDetails from "./pages/PostDetails";
import ProfilePage from "./pages/ProfilePage";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="postPage" element={<PostPage />} />
        <Route path="postDetails" element={<PostDetails />} />
        <Route path="profilePage" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
