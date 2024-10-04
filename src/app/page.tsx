import Image from "next/image";

export default function Home() {
  return (
    <div className='bg-[#30353e] h-[100vh] flex flex-col items-center gap-5 pt-28'  style={{ background: 'linear-gradient(to bottom, #30353e 0%, #30353e 60%, #4d76ba 100%)' }}>
      <h1 className="text-5xl font-thin text-white">Share Code in Real-time with Developers</h1>
      <h1 className="text-2xl font-thin text-white">An online code editor for interviews, troubleshooting, teaching & more…</h1>

      <div className="flex flex-col items-center gap-2 mt-10">
        <button className="bg-[#ea1c4e] text-white px-12 py-3 rounded-lg">Share Now</button>
        <p className="text-white font-extralight text-xs">Share code for free.</p>
      </div>
  </div>
  );
}
