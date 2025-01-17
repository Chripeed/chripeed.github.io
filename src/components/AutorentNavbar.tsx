import { useState } from "react";

export const AutorentNavbar = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <nav className="bg-soft-white shadow-md p-6 font-Harietta ">
      <div className="hidden md:flex space-x-6 font-bold text-graphite-black justify-center items-center">
        <a
          href="/dekoratsioonid"
          className="hover:text-steel-gray transition ease-out duration-500"
        >
          DEKORATSIOONID
        </a>

        <a
          href="/autorent/hinnakiri"
          className="hover:text-steel-gray transition ease-out duration-500"
        >
          HINNAKIRI
        </a>

        <h1 className="text-2xl font-bold text-luxurious-gold">
          <a
            href="/autorent"
            className="hover:text-champagne-gold transition ease-out duration-500"
          >
            WEDLUX
          </a>
        </h1>

        <a
          href="/autorent/galerii"
          className="hover:text-steel-gray transition ease-out duration-500"
        >
          GALERII
        </a>

        <a
          href="/autorent/kontakt"
          className="hover:text-steel-gray transition ease-out duration-500"
        >
          KONTAKT
        </a>
      </div>
      <div className="md:hidden flex justify-between items-center">
        <a href="/autorent">
          <h1 className="text-2xl font-bold text-luxurious-gold">WEDLUX</h1>
        </a>
        <button
          onClick={() => setToggled(!toggled)}
          className="space-y-1.5 z-50"
        >
          <div
            className={`block h-0.5 w-8 bg-elegant-gray ${
              toggled ? "transform rotate-45 translate-y-2" : ""
            } transition duration-300 ease-in-out`}
          ></div>
          <div
            className={`block h-0.5 w-8 bg-elegant-gray ${
              toggled ? "opacity-0" : ""
            } transition duration-300 ease-in-out`}
          ></div>
          <div
            className={`block h-0.5 w-8 bg-elegant-gray ${
              toggled ? "transform -rotate-45 -translate-y-2" : ""
            } transition duration-300 ease-in-out`}
          ></div>
        </button>
      </div>
      <div
        className={`fixed bg-charcoal-gray bg-opacity-95 pacity-0.8 bottom-0 right-0 w-[300px] h-screen py-32 items-start justify-center z-40 ${
          toggled ? "translate-x-0" : "translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-12 text-lg text-metallic-silver text-center font-Florentino">
          {[
            "/dekoratsioonid",
            "/autorent/hinnakiri",
            "/autorent/galerii",
            "/autorent/kontakt",
          ].map((link, index) => (
            <a key={index} href={link}>
              {typeof link === "string"
                ? link.split("/").pop()?.toUpperCase() ?? ""
                : ""}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
