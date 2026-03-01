import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clockify React",
  description:
    "A modern live clock application powered by React, Next.js, and useEffect",
};

const page = () => {
  return <section className="grid h-[90dvh] place-items-center"></section>;
};

export default page;
