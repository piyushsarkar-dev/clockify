"use client";

import GlassSurface from "../GlassSurface";

const ClockCard = () => {
  return (
    <div>
      <GlassSurface
        width={800}
        height={200}
        borderRadius={30}>
        <div className="space-y-4">
          <div className="flex items-center gap-1 font-mono text-9xl"></div>
        </div>
      </GlassSurface>
    </div>
  );
};

export default ClockCard;
