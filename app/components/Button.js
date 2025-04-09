"use client"

export default function Button() {
    const trailer = "https://youtu.be/PZUv1-qR1Aw";
  
    const handleButtonClick = () => {
      window.open(trailer, "_blank");
    };
  
    return (
      <button
        onClick={handleButtonClick}
        className="font-marathon mt-4 text-marathon border border-marathon px-4 py-2 rounded"
      >
        Watch The Full Trailer Here
      </button>
    );
  }
