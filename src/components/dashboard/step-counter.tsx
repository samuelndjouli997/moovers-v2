"use client";

import React, { useState, useEffect, useRef } from "react";

const StepCounter = () => {
  const [steps, setSteps] = useState(0);
  const [hasPermission, setHasPermission] = useState(false);
  const lastAcceleration = useRef({ x: 0, y: 0, z: 0 });

  const handleMotion = (event: DeviceMotionEvent) => {
    const acceleration = event.accelerationIncludingGravity;

    if (!acceleration) return;

    const x = acceleration.x ?? 0;
    const y = acceleration.y ?? 0;
    const z = acceleration.z ?? 0;

    const deltaX = Math.abs(x - lastAcceleration.current.x);
    const deltaY = Math.abs(y - lastAcceleration.current.y);
    const deltaZ = Math.abs(z - lastAcceleration.current.z);

    if (deltaX + deltaY + deltaZ > 5) {
      setSteps((prevSteps) => prevSteps + 1);
      localStorage.setItem("steps", (steps + 1).toString());
    }

    lastAcceleration.current = { x, y, z };
  };

  const requestPermission = async () => {
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      typeof (DeviceMotionEvent as any).requestPermission === "function"
    ) {
      try {
        const permission = await (DeviceMotionEvent as any).requestPermission();
        if (permission === "granted") {
          setHasPermission(true);
          window.addEventListener("devicemotion", handleMotion);
        } else {
          console.warn("Permission refusée pour les capteurs de mouvement.");
        }
      } catch (error) {
        console.error("Erreur lors de la demande de permission :", error);
      }
    } else {
      // Android ou navigateurs qui ne nécessitent pas de permission explicite
      setHasPermission(true);
      window.addEventListener("devicemotion", handleMotion);
    }
  };

  useEffect(() => {
    if (hasPermission) {
      window.addEventListener("devicemotion", handleMotion);
    }
    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, [hasPermission]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center">
      <h3 className="text-xl font-semibold">Compteur de pas</h3>
      <p className="text-4xl font-bold text-blue-500">{steps}</p>

      {!hasPermission && (
        <button
          onClick={requestPermission}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Autoriser le suivi des pas
        </button>
      )}
    </div>
  );
};

export default StepCounter;
