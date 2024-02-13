import { Routes, Route } from "react-router-dom";
import NoMatch from "../Pages/NoMatch.jsx";
import UserHome from "../Pages/UserHome.jsx";
import RedirectionPage from "../Pages/RedirectionPage.jsx";


const Routers = () => {
  const redirect = location.pathname !== "/";
  return (
    <Routes>
      <Route path="*" element={<NoMatch />} />
      <Route path="/" element={<UserHome />} />
      {redirect && <Route path={location.pathname} element={<RedirectionPage />} />}
    </Routes>
  );
};

export default Routers;
