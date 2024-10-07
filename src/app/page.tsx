"use client"
import { generateCode } from "@/apis/api";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Handle button loading state
  const [mounted, setMounted] = useState(false); // To check if the component is mounted

  // Ensure that the component is mounted before using `useRouter()`
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to handle button click
  const handleShareNow = async () => {
    if (!mounted) return; // Wait until component is mounted

    setLoading(true); // Start loading
    try {
      const data = await generateCode(); // Generate code
      router.push(`/editor/${data.code}`); // Navigate to the new page with the generated code
    } catch (error) {
      console.error("Error generating code:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  if (!mounted) {
    return null; // Avoid rendering anything until the component is mounted
  }

  return (
    <div className="bg-[#30353e] h-[100vh] flex flex-col items-center gap-5 pt-28" style={{ background: "linear-gradient(to bottom, #30353e 0%, #30353e 60%, #4d76ba 100%)" }}>
      <h1 className="text-5xl font-thin text-white">Share Code in Real-time with Developers</h1>
      <h1 className="text-2xl font-thin text-white">An online code editor for interviews, troubleshooting, teaching & more…</h1>

      <div className="flex flex-col items-center gap-2 mt-10">
        {/* Button to generate code and navigate */}
        <button
          className={`bg-[#ea1c4e] text-white px-12 py-3 rounded-lg ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleShareNow}
          disabled={loading}
        >
          {loading ? "Generating..." : "Share Now"}
        </button>
        <p className="text-white font-extralight text-xs">Share code for free.</p>
      </div>

      <div className="w-[50%] mt-10 h-[50%]"></div>
    </div>
  );
}

