"use client"
import Image from "next/image";
import React from "react";

const FeatureProject = () => {
  // const icons = [
  //   { name: "HTML", icon: "📄" },
  //   { name: "CSS", icon: "🎨" },
  //   { name: "JavaScript", icon: "⚡" },
  //   { name: "TypeScript", icon: "🔷" },
  //   { name: "React", icon: "⚛️" },
  //   { name: "Next.js", icon: "🚀" },
  //   { name: "Node.js", icon: "🌳" },
  // ];

  return (
    <div>
      {/* Hero Section with Background */}
      <div
        className="mt-12 relative bg-cover bg-fixed bg-center h-[450px] overflow-hidden"
        style={{
          backgroundImage: "url('/home/tech.avif')",
          backgroundPosition: "center top",
        }}
      >
        {/* Absolute Positioned Image */}
        <Image
          src="/home/Frame.png"
          width={500}
          height={250}
          className="w-[550px] h-[250px] absolute top-20 left-1/2 transform -translate-x-1/2"
          alt="brand"
        />

        {/* Continuously Animated Icons */}
        {/* <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {icons.map((icon, index) => (
            <span
              key={index}
              className={`text-4xl md:text-6xl lg:text-8xl animate-floating`}
              style={{
                position: "absolute",
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${index * 0.5}s`,
                color: "#FF5733",
              }}
            >
              {icon.icon}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default FeatureProject;
