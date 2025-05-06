import { useState, useEffect } from 'react';

export default function RightPanel() {
  const images = ['/Image1.png', '/Image2.jpg', '/Image3.jpg']; // Add more mock images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hidden md:block w-1/2 relative">
      <img
        src={images[currentImageIndex]}
        alt="Testimonial"
        className="w-full h-full object-cover transition-opacity duration-500"
        style={{ aspectRatio: '10/9' }} // Ensure consistent aspect ratio
      />
      <div className="absolute bottom-6 left-6 right-6 mx-auto bg-white/20 text-white px-8 py-6 rounded-lg max-w-4xl backdrop-blur-md">
        {/* Added backdrop-blur-md for blur effect */}
        <p className="text-base md:text-lg leading-relaxed"></p>

        <p className="text-[32px] font-inter font-regular ">
          “We love the screen sharing and whiteboarding features, which have improved our presentations. Room.me has become an essential tool for our team, allowing us to collaborate effectively. Highly recommended!”
        </p>
        <p className="mt-3 text-[24px] font-inter font-medium">Sarah Markivoc – Project Manager</p>
      </div>
    </div>
  );
}
