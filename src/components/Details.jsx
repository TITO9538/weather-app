import React, { useState } from "react";

export default function Details({ forecast, tempC, setTempC, formatDateLabel }) {
  const [loading, setLoading] = useState(true)

  function getWindDirection(deg) {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
  }

  setTimeout(() => {
    setLoading(false)
  }, 1000);

  return (
    <>
      {forecast && !loading && forecast.length > 0 ? (
        <main className="w-full h-full flex flex-col items-center justify-center bg-[#100e1d]">
          <section className="w-full">
            <div className="flex items-center justify-end gap-5 m-5">
              <button
                onClick={() => {
                  setTempC(true);
                }}
                className={`w-10 h-10 flex items-center justify-center text-xl font-semibold ${
                  tempC ? "text-[#110E3C] bg-[#E7E7EB]" : "text-[#E7E7EB] bg-[#585676]"
                } rounded-full cursor-pointer hover:scale-110 transition-transform`}>
                <div className="pr-1 flex">
                  <p className="text-sm mb-1">°</p>C
                </div>
              </button>
              <button
                onClick={() => {
                  setTempC(false);
                }}
                className={`w-10 h-10 flex items-center justify-center text-xl font-semibold ${
                  tempC ? "text-[#E7E7EB] bg-[#585676]" : "text-[#110E3C] bg-[#E7E7EB]"
                } rounded-full cursor-pointer hover:scale-110 transition-transform`}>
                <div className="pr-1 flex">
                  <p className="text-sm mb-1">°</p>F
                </div>
              </button>
            </div>
          </section>
          <section className="grid grid-cols-2 w-fit mx-auto gap-5 mt-2 md:max-w-2xl md:flex md:flex-row md:flex-wrap md:gap-4 md:w-fit md:mx-10">
            <article className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center gap-3 text-[#E7E7EB] text-base font-medium">
              <p>Tomorrow</p>
              <img
                src={`../../weather/${forecast[1].weather[0].icon}.png`}
                alt=""
                className="h-15"
              />
              <div className="flex gap-2">
                <p>
                  {tempC
                    ? Math.round(forecast[1].main.temp_min)
                    : Math.round((forecast[1].main.temp_min * 9) / 5 + 32)}
                  {tempC ? "°c" : "°f"}
                </p>
                <p className="text-[#A09FB1]">
                  {tempC
                    ? Math.round(forecast[1].main.temp_max)
                    : Math.round((forecast[1].main.temp_max * 9) / 5 + 32)}
                  {tempC ? "°c" : "°f"}
                </p>
              </div>
            </article>
            <article className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center gap-3 text-[#E7E7EB] text-base font-medium">
              <p>{forecast.length > 0 ? formatDateLabel(forecast[2].dt_txt) : ""}</p>
              <img
                src={`../../weather/${forecast[2].weather[0].icon}.png`}
                alt=""
                className="h-15"
              />
              <div className="flex gap-2">
                <p>
                  {tempC
                    ? Math.round(forecast[2].main.temp_min)
                    : Math.round((forecast[2].main.temp_min * 9) / 5 + 32)}
                  {tempC ? "°c" : "°f"}
                </p>
                <p className="text-[#A09FB1]">
                  {tempC
                    ? Math.round(forecast[2].main.temp_max)
                    : Math.round((forecast[2].main.temp_max * 9) / 5 + 32)}
                  {tempC ? "°c" : "°f"}
                </p>
              </div>
            </article>
            <article className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center gap-3 text-[#E7E7EB] text-base font-medium">
              <p>{forecast.length > 0 ? formatDateLabel(forecast[3].dt_txt) : ""}</p>
              <img
                src={`../../weather/${forecast[3].weather[0].icon}.png`}
                alt=""
                className="h-15"
              />
              <div className="flex gap-2">
                <p>
                  {tempC
                    ? Math.round(forecast[3].main.temp_min)
                    : Math.round((forecast[3].main.temp_min * 9) / 5 + 32)}
                  {tempC ? "°c" : "°f"}
                </p>
                <p className="text-[#A09FB1]">
                  {tempC
                    ? Math.round(forecast[3].main.temp_max)
                    : Math.round((forecast[3].main.temp_max * 9) / 5 + 32)}
                  {tempC ? "°c" : "°f"}
                </p>
              </div>
            </article>
            <article className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center gap-3 text-[#E7E7EB] text-base font-medium">
              <p>{forecast.length > 0 ? formatDateLabel(forecast[4].dt_txt) : ""}</p>
              <img
                src={`../../weather/${forecast[4].weather[0].icon}.png`}
                alt=""
                className="h-15"
              />
              <div className="flex gap-2">
                <p>
                  {tempC
                    ? Math.round(forecast[4].main.temp_min)
                    : Math.round((forecast[4].main.temp_min * 9) / 5 + 32)}
                  {tempC ? "°c" : "°f"}
                </p>
                <p className="text-[#A09FB1]">
                  {tempC
                    ? Math.round(forecast[4].main.temp_max)
                    : Math.round((forecast[4].main.temp_max * 9) / 5 + 32)}
                  {tempC ? "°c" : "°f"}
                </p>
              </div>
            </article>
            <article className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center gap-3 text-[#E7E7EB] text-base font-medium">
              <p>{forecast.length > 0 ? formatDateLabel(forecast[5].dt_txt) : ""}</p>
              <img
                src={`../../weather/${forecast[5].weather[0].icon}.png`}
                alt=""
                className="h-15"
              />
              <div className="flex gap-2">
                <p>
                  {tempC
                    ? Math.round(forecast[5].main.temp_min)
                    : Math.round((forecast[5].main.temp_min * 9) / 5 + 32)}
                  {tempC ? "°c" : "°f"}
                </p>
                <p className="text-[#A09FB1]">
                  {tempC
                    ? Math.round(forecast[5].main.temp_max)
                    : Math.round((forecast[5].main.temp_max * 9) / 5 + 32)}
                  {tempC ? "°c" : "°f"}
                </p>
              </div>
            </article>
          </section>
          <section className="w-full max-w-sm px-5 mt-12 md:w-full md:max-w-none md:m-auto md:flex md:flex-col md:items-center md:justify-center mb-10 md:mb-10">
            <h3 className="h-7 text-[#E7E7EB] text-2xl font-bold my-5 md:w-full md:max-w-2xl md:text-left">
              Today`s Hightlights
            </h3>
            <div className="w-full flex flex-col items-center md:grid md:grid-cols-2  gap-5 md:gap-6 md:max-w-2xl">
              <article className="w-full max-w-[328px] h-48 bg-[#1E213A] flex flex-col items-center justify-center">
                <h2 className="text-medium text-base text-center text-[#E7E7EB]">Wind status</h2>
                <div className="flex items-end h-20 mb-4">
                  <h3 className="text-[#E7E7EB] text-6xl font-bold">
                    {tempC ? forecast[0].wind.speed : (forecast[0].wind.speed * 2.23694).toFixed(2)}
                  </h3>
                  <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">{tempC ? `ms` : `mph`}</h4>
                </div>
                <div className="flex items-center text-[#E7E7EB] text-sm">
                  <span
                    className="flex justify-center items-center w-8 h-8 m-3 rounded-full bg-[#ffffff4d]"
                    style={{ transform: `rotate(${forecast[0].wind.deg}deg)` }}>
                    <img src="../../navigation.svg" alt="" className="w-[50%]" />
                  </span>
                  {getWindDirection(forecast[0].wind.deg)}
                </div>
              </article>
              <article className="w-full max-w-[328px] h-48 bg-[#1E213A] flex flex-col items-center justify-center">
                <h3 className="text-medium text-base text-center text-[#E7E7EB]">Humidity</h3>
                <div className="flex items-end h-20 mb-4">
                  <h3 className=" text-[#E7E7EB] text-6xl font-bold">
                    {forecast[0].main.humidity}
                  </h3>
                  <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1 text-right">%</h4>
                </div>
                <div className="w-[70%] font-bold text-xs flex justify-between text-[#A09FB1]">
                  <p>0</p>
                  <p>50</p>
                  <p>100</p>
                </div>
                <div className="flex items-center w-[70%] h-2 bg-[#E7E7EB] rounded-3xl">
                  <div
                    className="h-2 bg-[#FFEC65] rounded-3xl m-0 p-0"
                    style={{ width: `${forecast[0].main.humidity}%` }}></div>
                </div>
                <div className="w-[70%] text-right font-bold text-[#A09FB1]">%</div>
              </article>
              <article className=" w-full max-w-[328px] flex flex-col items-center justify-center bg-[#1E213A] py-4">
                <h2 className="text-medium text-base text-center text-[#E7E7EB]">Visibility</h2>
                <div className="flex items-end h-20 mb-4">
                  <h3 className="text-[#E7E7EB] text-6xl font-bold">
                    {tempC
                      ? (forecast[0].visibility / 1000).toFixed(2)
                      : ((forecast[0].visibility / 1000) * 0.621371).toFixed(2)}
                  </h3>
                  <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">{tempC ? `km` : `miles`}</h4>
                </div>
              </article>
              <article className="w-full max-w-[328px] flex flex-col items-center justify-center bg-[#1E213A] p-4">
                <h2 className="text-medium text-base text-center text-[#E7E7EB]">Air Pressure</h2>
                <div className="flex items-end h-20 mb-4">
                  <h3 className="text-[#E7E7EB] text-6xl font-bold">{forecast[0].main.pressure}</h3>
                  <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">mb</h4>
                </div>
              </article>
            </div>
          </section>
          <div className="pb-5 w-full flex flex-row justify-center items-center text-[#A09FB1] ">
            <h4 className="text-sm font-medium text-center">Created by</h4>
            <h2 className="font-bold text-sm text-center mx-1">ThomasMonzon</h2>
          </div>
        </main>
      ) : (

        //LOADING Pagina Details... 
        <main className="w-full h-full flex flex-col items-center justify-center bg-[#100e1d]">
          <section className="w-full">
            <div className="flex items-center justify-end gap-5 m-5 mt-8">
              <button
                className={`w-10 h-10 flex items-center justify-center text-xl font-semibold text-[#E7E7EB] bg-[#585676] rounded-full cursor-pointer hover:scale-110 transition-transform`}>
                <div className="pr-1 flex">
                  <p className="text-sm mb-1">°</p>C
                </div>
              </button>
              <button
                className={`w-10 h-10 flex items-center justify-center text-xl font-semibold text-[#E7E7EB] bg-[#585676] rounded-full cursor-pointer hover:scale-110 transition-transform`}>
                <div className="pr-1 flex">
                  <p className="text-sm mb-1">°</p>F
                </div>
              </button>
            </div>
          </section>
          <section className="grid grid-cols-2 w-fit mx-auto gap-5 mt-5 md:max-w-2xl md:flex md:flex-row md:flex-wrap md:gap-4 md:w-fit md:mx-10">
            <article className="animate-pulse w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center gap-3 text-[#E7E7EB] text-base font-medium">
              <img
                src={`../../weather/03d.png`}
                alt=""
                className="h-15 opacity-20"
              />
            </article>
            <article className="animate-pulse w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center gap-3 text-[#E7E7EB] text-base font-medium">
              <img
                src={`../../weather/03d.png`}
                alt=""
                className="h-15 opacity-20"
              />
            </article>
            <article className="animate-pulse w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center gap-3 text-[#E7E7EB] text-base font-medium">
              <img
                src={`../../weather/03d.png`}
                alt=""
                className="h-15 opacity-20"
              />
            </article>
            <article className="animate-pulse w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center gap-3 text-[#E7E7EB] text-base font-medium">
              <img
                src={`../../weather/03d.png`}
                alt=""
                className="h-15 opacity-20"
              />
            </article>
            <article className="animate-pulse w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center gap-3 text-[#E7E7EB] text-base font-medium">
              <img
                src={`../../weather/03d.png`}
                alt=""
                className="h-15 opacity-20"
              />
            </article>
          </section>
          <section className="w-full max-w-sm px-5 mt-12 md:w-full md:max-w-none md:m-auto md:flex md:flex-col md:items-center md:justify-center mb-10 md:mb-10">
            <h3 className="h-7 text-[#afafafa4] text-2xl font-bold my-5 md:w-full md:max-w-2xl md:text-left">
              Today`s Hightlights
            </h3>
            <div className="w-full flex flex-col items-center md:grid md:grid-cols-2  gap-5 md:gap-6 md:max-w-2xl text-2xl font-bold">
              <article className="animate-pulse w-full max-w-[328px] h-40 bg-[#1E213A] flex flex-col items-center justify-center">
                <h2 className="text-medium text-center text-[#E7E7EB] animate-pulse opacity-20">Wind status</h2>
              </article>
              <article className="animate-pulse w-full max-w-[328px] h-40 bg-[#1E213A] flex flex-col items-center justify-center">
                <h3 className="text-medium text-center text-[#E7E7EB] animate-pulse opacity-20">Humidity</h3>
              </article>
              <article className="animate-pulse w-full max-w-[328px] h-40 flex flex-col items-center justify-center bg-[#1E213A] py-4">
                <h2 className="text-medium text-center text-[#E7E7EB] animate-pulse opacity-20">Visibility</h2>
              </article>
              <article className="animate-pulse w-full max-w-[328px] h-40 flex flex-col items-center justify-center bg-[#1E213A] p-4">
                <h2 className="text-medium text-center text-[#E7E7EB] animate-pulse opacity-20">Air Pressure</h2>
              </article>
            </div>
          </section>
          <div className="pb-5 w-full flex flex-row justify-center items-center text-[#8e8e8e] ">
            <h4 className="text-sm font-medium text-center">Created by</h4>
            <h2 className="font-bold text-sm text-center mx-1">ThomasMonzon</h2>
          </div>
        </main>
      )}
    </>
  );
}
