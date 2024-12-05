"use client";

import { useState, useEffect } from "react";
import { BsGlobe } from "react-icons/bs";
import WordRotate from "./ui/word-rotate";

const Hour = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [period, setPeriod] = useState(""); // AM/PM state

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let h = now.getHours();
      let m: any = now.getMinutes();
      let s: any = now.getSeconds();

      // Convert 24-hour time to 12-hour time
      let ampm = h >= 12 ? "" : "";
      h = h % 12;
      h = h ? h : 12; // 0 becomes 12
      m = m.toString().padStart(2, "0");
      s = s.toString().padStart(2, "0");

      setHours(h.toString().padStart(2, "0"));
      setMinutes(m);
      setSeconds(s);
      setPeriod(ampm);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="fixed bottom-5 left-5 sm:left-12 right-0 w-[5rem] h-[3rem] flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all">
      <div className="flex items-center justify-center gap-2">
        <span>
          <BsGlobe />
        </span>
        <span>
          {hours}:{minutes}:{seconds} {period}
        </span>
      </div>
    </section>
  );
};

export default Hour;
