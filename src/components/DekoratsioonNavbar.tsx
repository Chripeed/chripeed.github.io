import { useState } from "react";
import tekst from "../assets/tekst.json";

export const DekoratsioonNavbar = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="bg-soft-white shadow-md p-6 font-Harietta ">
      <div className="hidden md:flex space-x-6 font-bold text-graphite-black justify-center items-center">
        <a
          href="/autorent"
          className="hover:text-steel-gray transition ease-out duration-500"
        >
          {tekst.Autorent_tekst.toUpperCase()}
        </a>

        <a
          href="/dekoratsioonid/teenused"
          className="hover:text-steel-gray transition ease-out duration-500"
        >
          {tekst.Teenused_tekst.toUpperCase()}
        </a>

        <h1 className="text-2xl font-bold text-luxurious-gold">
          <a
            href="/dekoratsioonid"
            className="hover:text-champagne-gold transition ease-out duration-500"
          >
            {tekst.Firmanimi.toUpperCase()}
          </a>
        </h1>

        <a
          href="/dekoratsioonid/galerii"
          className="hover:text-steel-gray transition ease-out duration-500"
        >
          {tekst.Galerii_tekst.toUpperCase()}
        </a>

        <a
          href="/dekoratsioonid/kontakt"
          className="hover:text-steel-gray transition ease-out duration-500"
        >
          {tekst.Kontakt_tekst.toUpperCase()}
        </a>
      </div>
      <div className="md:hidden flex justify-between items-center">
        <a href="/dekoratsioonid">
          <h1 className="text-2xl font-bold text-luxurious-gold">
            {tekst.Firmanimi.toUpperCase()}
          </h1>
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
            "/autorent",
            "/dekoratsioonid/teenused",
            "/dekoratsioonid/galerii",
            `/dekoratsioonid/kontakt`,
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
