"use client";

import { format } from "date-fns";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { SlidingNumber } from "../../components/motion-primitives/sliding-number";
export const metadata: Metadata = {
  title: "Clockify React",
  description:
    "A modern live clock application powered by React, Next.js, and useEffect",
};

const Clock = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [secoend, setSecoend] = useState("00");
  const [ampm, setAmpm] = useState("XX");
  const [date, setDate] = useState(format(new Date(), "eeee, dd LLLL yyyy"));

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(format(new Date(), "hh"));
      setMinutes(format(new Date(), "mm"));
      setSecoend(format(new Date(), "ss"));
      setAmpm(format(new Date(), "a"));
      setDate(format(new Date(), "eeee, dd LLLL yyyy"));
    }, 1000 * 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section>
      <div className="space-y-4">
        <div className="flex items-center gap-1 font-mono text-9xl">
          <SlidingNumber
            value={parseInt(hours)}
            padStart={true}
          />
          <span className="animate-pulse">:</span>

          <SlidingNumber
            value={parseInt(minutes)}
            padStart={true}
          />
          <span className="animate-pulse">:</span>

          <SlidingNumber
            value={parseInt(secoend)}
            padStart={true}
          />

          <span className="ms-2">{ampm}</span>
        </div>

        <div className="text-center text-6xl">{date}</div>
      </div>
    </section>
  );
};

export default Clock;
