import Header from "components/Header";

const { Outlet } = require("react-router-dom");

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        {/* {loading && <Loader />} */}
        {/* <Suspense fallback={<Loader />}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </>
  );
};

export default Layout;
