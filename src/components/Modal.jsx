import { ChevronRightIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Modal({ toggleModal, setPlace }) {
  const [imputValue, setImputValue] = useState("");
  const [btnPress, setBtnPress] = useState(false);
  const [data, setData] = useState("");

  function pressBtn() {
    setBtnPress(!btnPress);
  }

  async function getData() {
    const res = await axios.get("/static_Json/cities.json");
    return res.data;
  }

  useEffect(() => {
    if (btnPress) {
      getData().then((res) => {
        const results = res.filter((item) => {
          const search = imputValue.toLowerCase();
          return item.name.toLowerCase().includes(search);
        });
        setData(results);
        setBtnPress(false);
      });
    }
  }, [btnPress]);

  return (
    <div className="absolute inset-0 w-full h-full bg-[#1e213a]">
      <div className="w-full flex items-center justify-end p-5">
        <img
          onClick={toggleModal}
          src="../../close.svg"
          alt=""
          className="w-8 hover:scale-110 cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-around px-5">
        <div className="flex items-center w-[55%] max-w-[268px] h-9 border border-[#E7E7EB] text-[#E7E7EB]">
          <div className="px-1 sm:px-3">
            <img src="../../search.svg" alt="" className="w-6" />
          </div>
          <input
            className="h-8 w-[100%] focus:outline-none"
            placeholder="search location"
            type="text"
            value={imputValue}
            onChange={(e) => setImputValue(e.target.value)}
          />
        </div>
        <button
          onClick={pressBtn}
          className="w-20 h-9 bg-[#3C47E9] px-1 font-semibold text-base text-[#E7E7EB] hover:text-[#def341] cursor-pointer">
          Search
        </button>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        {data && data.length > 0 ? (
          <div className="w-[70%] text-white flex flex-col items-start justify-center gap-5">
            {data.slice(0,10).map((item) => (
              <div onClick={() => {
                setPlace(item)
                toggleModal()
                console.log(item)
              }} key={item.id} className="w-full px-4 py-2 border border-slate-600 text-slate-400 flex items-center justify-between group cursor-pointer">
                <p>{item.name}, {item.country_code}</p>
                <ChevronRightIcon className="w-5 h-5 text-slate-600 md:hidden md:group-hover:block md:group-hover:h-6 md:group-hover:w-6 md:group-hover:text-slate-600"/>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-gray-400">Results will appear here</h1>
        )}
      </div>
    </div>
  );
}
