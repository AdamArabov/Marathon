"use client"

export default function Button() {
    const trailer = "https://www.youtube.com/watch?v=ckI_m8bbXfw&ab_channel=Marathon";
  
    const handleButtonClick = () => {
      window.open(trailer, "_blank");
    };
  
    return (
      <button
        onClick={handleButtonClick}
        className="mt-4 text-white border border-white px-4 py-2 rounded"
      >
        Watch The Full Trailer Here
      </button>
    );
  }