"use client";

import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MAX_STEPS = 5000;

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
      setSteps((prevSteps) => {
        const newSteps = prevSteps + 1;
        localStorage.setItem("steps", newSteps.toString());
        return newSteps;
      });
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

  const progressPercentage = Math.min((steps / MAX_STEPS) * 100, 100);

  return (
    <div className="p-6 bg-[#0F1334] shadow-lg rounded-xl flex flex-col items-center">

      {/* Container pour la jauge semi-circulaire */}
      <div className="relative w-40 h-20 overflow-hidden">
        <CircularProgressbar
          value={progressPercentage}
          maxValue={100}
          strokeWidth={10}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 4, // Rotation pour n'afficher que le haut
            strokeLinecap: "round",
            pathColor: "#4CAF50",
            trailColor: "#374151",
            backgroundColor: "#0F1334",
          })}
        />
      </div>

      {/* Texte centré sous la jauge */}
      <div className="mt-4 flex gap-20 justify-between text-white">
        <p className="text-sm">{steps} pas</p>
        <p className="text-sm ml-5">{MAX_STEPS} pas</p>
      </div>

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
