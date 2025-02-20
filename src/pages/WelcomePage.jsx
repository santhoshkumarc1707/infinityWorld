import { useState, useEffect } from "react";

const images = [
  "/travel.avif",
  "/pic1.jfif",
  "img3.jfif",
  "/pic7.jpg"
];

const WelcomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden"; 
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col   text-white text-center p-4">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
          Your Travel Partner
        </h1>
        <p className="text-lg mb-6 animate-fade-in delay-200">
          Plan & Book Your Journey With Ease
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
