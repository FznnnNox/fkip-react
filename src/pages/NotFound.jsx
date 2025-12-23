import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      {/* <Navbar /> */}

      <section className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="flex items-center space-x-6">
          <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100">
            404
          </h1>

          <span className="h-10 w-px bg-gray-300 dark:bg-gray-600"></span>

          <p className="text-gray-500 dark:text-gray-400">
            This page could not be found.
          </p>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default NotFound;
