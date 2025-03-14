"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LoadingScreen = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        router.push("/dashboard");
      }, 500); // Attendre l'effet d'opacité avant de rediriger
    }, 3000);
  }, [router]);

  return (
    <div
      className={`z-[999] fixed px-4 inset-0 flex items-center justify-center bg-marine-blue transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center">
        
        <div className="flex flex-col justify-center items-center space-y-4">
            <img src="/moovers-green.svg" width={189} alt="" />

            <h2 className="text-5xl font-neulis font-semibold text-white">Bienvenue</h2>

            <p className="text-xl text-center font-verdana font-medium text-white">Prépare-toi à avancer à ton rythme et à débloquer de nouvelles aventures. </p>

            <div className="loader"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
