import { Outlet } from "react-router-dom";
import OwlCarousel from "./OwlCarousel";
export const Home = () => {
  return (
    <div className="background">
      <h1>Home page</h1>
      <OwlCarousel></OwlCarousel>

      <Outlet />
    </div>
  );
};
