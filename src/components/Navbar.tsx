import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";

export default function Navbar({
  switchToText = "AUTORENT",
  switchToHref = "/autorent",
  currentHref = "/autorent",
}) {
  const [toggled, setToggled] = useState(false);
  /*const [isMounted, setIsMounted] = useState(false);*/
  const matches = useMediaQuery("(min-width: 960px)");

  /*useEffect(() => {
    setIsMounted(true);
  }, []);*/

  return (
    <nav className="bg-soft-white shadow-md font-Harietta relative flex justify-center items-center pt-6 pb-6 font-medium">
      {/* DESKTOP VIEW */}
      {matches && (
        <div className="flex gap-20 items-center font-bold text-graphite-black">
          <a
            className="hover:text-steel-gray transition ease-out duration-500"
            href={switchToHref}
          >
            {switchToText}
          </a>
          <a
            className="hover:text-steel-gray transition ease-out duration-500"
            href={`${currentHref}/teenused`}
          >
            TEENUSED
          </a>

          <h1 className="text-2xl font-bold text-luxurious-gold ">
            <a
              className="hover:text-champagne-gold transition ease-out duration-500"
              href="/"
            >
              WEDLUX
            </a>
          </h1>

          <a
            className="hover:text-steel-gray transition ease-out duration-500"
            href={`${currentHref}/galerii`}
          >
            GALERII
          </a>
          <a
            className="hover:text-steel-gray transition ease-out duration-500"
            href={`${currentHref}/kontakt`}
          >
            KONTAKT
          </a>
        </div>
      )}

      {/* MOBILE VIEW */}
      {!matches && (
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl mx-8 font-bold text-luxurious-gold">
            <a
              className="hover:text-champagne-gold transition ease-out duration-500"
              href="/"
            >
              WEDLUX
            </a>
          </h1>
          <div
            onClick={() => setToggled(!toggled)}
            className="space-y-1.5 cursor-pointer z-50 mx-8"
          >
            {/* Burger Icon Lines */}
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
          </div>
        </div>
      )}

      {!matches && (
        <div
          className={`fixed bg-charcoal-gray bg-opacity-95 pacity-0.8 bottom-0 right-0 w-[300px] h-screen py-32 items-start justify-center z-40 ${
            toggled ? "translate-x-0" : "translate-x-full"
          } transition duration-300 ease-in-out`}
        >
          <div className="flex flex-col gap-12 text-lg text-metallic-silver text-center font-Florentino">
            {[
              `${switchToHref}`,
              `${currentHref}/teenused`,
              `${currentHref}/galerii`,
              `${currentHref}/kontakt`,
            ].map((link, index) => (
              <a key={index} href={link}>
                {typeof link === "string"
                  ? link.split("/").pop().toUpperCase()
                  : ""}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
