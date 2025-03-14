"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import categoriesData from "@/constants/preferences.json";
import LoadingScreen from "@/components/loading-screen"; // 🔥 On importe l'écran de chargement

const PreferencesPage = () => {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false); // 🕒 État pour afficher l'écran de chargement

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = () => {
    if (selectedCategories.length < 3) return; // ⚠️ Empêche de valider avec moins de 3 choix

    setIsLoading(true); // 🔥 Active l'écran de chargement
    setTimeout(() => {
      router.push("/dashboard"); // ✅ Redirection vers le dashboard après 5s
    }, 5000);
  };

  if (isLoading) return <LoadingScreen />; // 🔄 Affiche l'écran de chargement

  return (
    <div className="flex flex-col justify-start min-h-screen bg-marine-blue text-white pt-10 px-6">
      <h2 className="text-[32px] font-neulis font-semibold mb-3">Quelles thématiques vous intéressent ?</h2>
      <p className="text-sm text-left font-verdana font-medium mb-6">Choisissez au moins 3 thématiques ou plus...</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-2xl">
        {categoriesData.categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all text-white ${
              selectedCategories.includes(category)
                ? "bg-fluo-green/30 border border-fluo-green"
                : "bg-marine-blue border border-[#252844]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selectedCategories.length < 3} // 🔒 Désactivé tant que 3 choix minimum ne sont pas faits
        className={`mt-6 mb-8 px-6 py-3 text-center rounded-full text-white font-semibold transition ${
          selectedCategories.length < 3
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-decathlon-blue hover:bg-blue-600"
        }`}
      >
        Valider
      </button>
    </div>
  );
};

export default PreferencesPage;
