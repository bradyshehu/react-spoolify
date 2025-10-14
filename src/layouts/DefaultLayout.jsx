import { Outlet } from "react-router";
import Header from "../components/ui/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
