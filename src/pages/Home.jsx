import React from "react";
import Hero from "../components/screen/Home/Hero";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <section className="pt-5">
        <div className="container_fluid">
          <div>
            <h3 className="h3 text-dark max-w-[349px] mx-auto rounded">Shop Our Collections</h3>
          </div>
          <div className="border-[20px] border-primary w-20 h-20 rounded-complete"></div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
