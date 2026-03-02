import { SlidingNumber } from "../../components/motion-primitives/sliding-number";

const Clock = () => {
  return (
    <section>
      {" "}
      <div className="space-y-4">
        <div className="flex items-center gap-1 font-mono text-9xl">
          <SlidingNumber
            value={15}
            padStart={true}
          />
          <span className="animate-pulse">:</span>

          <SlidingNumber
            value={12}
            padStart={true}
          />
          <span className="animate-pulse">:</span>

          <SlidingNumber
            value={10}
            padStart={true}
          />

          <span className="ms-2">{"Am"}</span>
        </div>

        <div className="text-center text-6xl">{"02-03-2026"}</div>
      </div>
    </section>
  );
};

export default Clock;
