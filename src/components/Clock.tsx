import { useState } from "react";
import { SlidingNumber } from "../../components/motion-primitives/sliding-number";

const Clock = () => {
  const [hours, setHours] = useState("10");
  const [minutes, setMinutes] = useState("12");
  const [secoend, setSecoend] = useState("55");
  const [ampm, setAmpm] = useState("Am");
  const [date, setDate] = useState("02-03-2026");

  return (
    <section>
      {" "}
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
