"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Play, Pause, SkipForward, SkipBack, ChevronLeft, MoreVertical } from "lucide-react";
import Image from "next/image";

const podcast = {
  title: "Videocall Me Ep.O1 ",
  author: "Nicolas Despres",
  cover: "/moovers-img1.png",
  audio: "/audio/sample.mp3", // Remplace avec un vrai fichier audio
  requiredSteps: 5000,
};

const PodcastPage = () => {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="relative flex flex-col items-center min-h-screen text-white p-4">

        {/* Menu fixe */}
        <div className="fixed top-0 left-0 w-full flex justify-between items-center p-2 bg-marine-blue z-50">
        <button onClick={() => router.push("/dashboard")} className="text-white p-2 rounded-full">
          <ChevronLeft className="w-7 h-7" />
        </button>

        <button className="text-white p-2 rounded-full hover:bg-fluo-green/30 transition">
          <MoreVertical className="w-7 h-7" />
        </button>
      </div>

      {/* Image du podcast */}
      <div className="mt-20 flex flex-col space-y-4 justify-start bg-[#0F1334] rounded-lg p-4">
        <div className="relative w-full h-72">
            <Image src={podcast.cover} alt={podcast.title} layout="fill" className="rounded-xl object-cover" />
        </div>
        <p className="text-base text-left font-verdana font-medium text-[#F0F4EF]">{podcast.author}</p>
        <p className="text-[28px] mt-0 font-verdana text-fluo-green font-semibold">{podcast.title}</p>
        
        <div>
            <img src="/progress-audio.svg" alt="" />
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
            <button className="p-3 rounded-full transition-colors duration-500 hover:bg-fluo-green/30 text-white">
            <SkipBack className="w-6 h-6" />
            </button>

            <button className="p-4 rounded-full border-2 border-fluo-green bg-fluo-green/30 text-white" onClick={togglePlay}>
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
            </button>

            <button className="p-3 rounded-full transition-colors duration-500 hover:bg-fluo-green/30 text-white">
            <SkipForward className="w-6 h-6" />
            </button>
        </div>
      </div>


        {/* Podcasts à débloquer */}
        <h3 className="mt-8 text-left w-full text-2xl font-neulis font-semibold">Épisodes</h3>
        <div className="grid grid-cols-1 gap-4 mt-4 mb-10">
            {/* {lockedPodcasts.map((pod, index) => (
            <div key={index} className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col justify-center items-center rounded-xl">
                <Lock className="w-10 h-10 text-white" />
                <p className="text-fluo-green text-xs mt-2">{pod.goal}</p>
                </div>
                <Image src={pod.cover} alt={pod.title} width={150} height={150} className="rounded-xl object-cover" />
            </div>
            ))} */}
            <img src="/locked-1.png" alt="locked 1" />
            <img src="/locked-2.png" alt="locked 2" />
            <img src="/locked-3.png" alt="locked 3" />
            <img src="/locked-4.png" alt="locked 4" />
        </div>
      </div>
      
    
  );
};

export default PodcastPage;
