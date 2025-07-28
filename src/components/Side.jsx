import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";

export function Side({ place, setPlace, forecast, tempC, formatDateLabel }) {
  const [modalOn, setModalOn] = useState(false);
  const [locBtn, setLocBtn] = useState(0);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  function toggleModal() {
    setModalOn(!modalOn);
  }

  function locationBtn() {
    setLocBtn(locBtn + 1);
  }

  useEffect(() => {
    if (locBtn <= 0) return;
    async function fetchLocation() {
      try {
        const response = await axios.get("https://ipinfo.io/json?token=2d2b9151ed1eaa");
        const loc = response.data.loc;
        console.log(response);

        if (loc) {
          const [latitude, longitude] = loc.split(",").map(Number);
          const coords = {
            lat: latitude,
            lon: longitude,
            name: response.data.city,
          };
          setPlace(coords);
          console.log(coords);
        }
      } catch (error) {
        console.error("Error fetcheando la locacion", error);
      }
    }
    fetchLocation();
  }, [locBtn]);

  return (
    <section className="relative transition-colors duration-500">
      {forecast && !loading && forecast.length > 0 ? (
        <div className="w-full h-screen md:h-full flex flex-col dark:bg-[#1e213a] bg-[#44497a] transition-colors duration-500">
          {/* Search btn */}
          <div className="flex items-center justify-between p-5">
            <button
              onClick={toggleModal}
              className="transition-colors duration-500 dark:text-gray-200 text-gray-700 font-extralight text-lg dark:bg-[#6e707a] bg-slate-300 px-[20px] py-[4px] dark:hover:bg-[#b7bac7] hover:bg-slate-300/50">
              Search for Places
            </button>
            <div
              onClick={locationBtn}
              className="dark:bg-[#4b4d61] bg-transparent rounded-full p-2 cursor-pointer hover:scale-110 transition-transform">
              <img src="../../location.svg" alt="location" className="w-7" />
            </div>
          </div>
          {/* Clouds */}
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center justify-center w-105 relative">
              <img
                src="../../others/Cloud-background.png"
                alt="Cloud-background"
                className="opacity-10 absolute top-0"
              />
              <img
                src={`../../weather/${forecast[0].weather[0].icon}.png`}
                alt=""
                className="w-30 mt-10"
              />
            </div>
          </div>
          {/* Temperature */}
          <div className="w-full h-30 flex items-center justify-center mt-30 md:mt-30">
            <h3 className="text-8xl md:text-9xl dark:text-[#e7e7eb] text-white transition-colors duration-500">
              {tempC
                ? Math.round(forecast[0].main.temp)
                : Math.round((forecast[0].main.temp * 9) / 5 + 32)}
            </h3>
            <div className="flex dark:text-[#9f9eb0] text-slate-300 font-light mt-3 transition-colors duration-500">
              <div className="text-2xl md:text-3xl mt-2">°</div>
              <span className="text-6xl md:text-7xl">{tempC ? "c" : "f"}</span>
            </div>
          </div>
          {/* Status */}
          <div className="w-full flex items-center justify-center mt-5 dark:text-[#9f9eb0] text-slate-300 md:mt-20 transition-colors duration-500">
            <h3 className="text-3xl capitalize font-medium">
              {forecast[0].weather[0].description}
            </h3>
          </div>
          {/* Fecha */}
          <div className="w-full flex items-center justify-center dark:text-[#88869D] text-slate-300 mt-10 md:mt-15 transition-colors duration-500">
            <div className="w-35 flex items-center justify-between text-sm">
              <span>Today</span>
              <span>.</span>
              <span>{forecast.length > 0 ? formatDateLabel(forecast[0].dt_txt) : ""}</span>
            </div>
          </div>
          {/* Location */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <img src="../../location_on.svg" alt="location_on" className="w-5 hidden dark:block" />
            <FaLocationDot className="text-white dark:hidden"></FaLocationDot>
            <p className="dark:text-[#88869D] text-slate-300 font-mono text-sm font-bold transition-colors duration-500">{place.name}</p>
          </div>
        </div>
      ) : (
        //LOADING... Side page
















        <div className="w-full h-screen md:h-full flex flex-col dark:bg-[#1e213a] bg-[#44497a]">
          {/* Search btn */}
          <div className="flex items-center justify-between p-5">
            <button
              onClick={toggleModal}
              className="text-gray-200 font-extralight text-lg bg-[#6e707a] px-[20px] py-[4px] hover:bg-[#9093a0]">
              Search for Places
            </button>
            <div className="dark:bg-[#4b4d61] bg-transparent rounded-full p-2 cursor-pointer hover:scale-110 transition-transform">
              <img src="../../location.svg" alt="location" className="w-7" />
            </div>
          </div>
          {/* Clouds */}
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center justify-center w-105 relative">
              <img
                src="../../others/Cloud-background.png"
                alt="Cloud-background"
                className="opacity-10 absolute top-0"
              />
              <img
                src={`../../weather/03d.png`}
                alt=""
                className="w-30 mt-10 animate-pulse opacity-20"
              />
            </div>
          </div>
          {/* Temperature */}
          <div className="w-full h-22 flex items-center justify-center mt-10 md:mt-30">
            <h3 className="text-9xl dark:text-[#e7e7eb] text-white"></h3>
            <div className="flex text-[#9f9eb0] font-light mt-3"></div>
          </div>
          {/* Status */}
          <div className="w-full flex items-center justify-center mt-15 dark:text-[#9f9eb0] text-slate-300 md:mt-20">
            <h3 className="text-3xl capitalize font-medium animate-pulse opacity-20">Weather</h3>
          </div>
          {/* Fecha */}
          <div className="w-full flex items-center justify-center text-[#88869D] mt-10 md:mt-15">
            <div className="w-35 flex items-center justify-center text-sm animate-pulse opacity-20">
              <span>Today</span>
            </div>
          </div>
          {/* Location */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <img src="../../location_on.svg" alt="location_on" className="w-5" />
            <p className="dark:text-[#88869D] text-slate-300 font-mono text-sm font-bold animate-pulse opacity-20">
              Location
            </p>
          </div>
        </div>
      )}

      {/* MODAL */}
      {modalOn && <Modal toggleModal={toggleModal} setPlace={setPlace}></Modal>}
    </section>
  );
}
