import React from "react";

const Copyright = () => {
  return (
    <main className="bg-yellow-400  z-20">
      <section className="container  xs:px-5 mx-auto">
            <div className="flex flex-col sm:flex-row text-center justify-center text-sm font-bold text-gray-800">
                <p>Copyright 2023 &#169; All Right Reserved </p>
                <span className="mx-3 hidden sm:block"> || </span>
                <p> Designed By WibeTec.</p>
            </div>
      </section>
    </main>
  );
};

export default Copyright;
