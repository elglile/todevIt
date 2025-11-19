import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
