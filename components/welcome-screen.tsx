"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

interface WelcomeScreenProps {
  onOpenLetter: () => void
}

export function WelcomeScreen({ onOpenLetter }: WelcomeScreenProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-md mx-auto">
        <div className="animate-bounce" style={{ animationDuration: "3s" }}>
          <Heart className="w-12 h-12 text-rose-400 fill-rose-400" />
        </div>

        <h1 className="text-4xl md:text-5xl font-serif text-center text-rose-900 text-pretty">
          A Little Something for You
        </h1>

        <p className="text-center text-rose-600 text-lg md:text-xl font-light max-w-xs">
          Open your heart to a special message
        </p>

        <button
          onClick={onOpenLetter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`mt-6 px-8 py-4 rounded-full font-serif text-lg font-semibold transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl ${
            isHovered
              ? "bg-rose-400 text-white shadow-rose-300/50"
              : "bg-white text-rose-600 hover:bg-rose-50 shadow-rose-200/50"
          }`}
        >
          Click here {isHovered ? "💌" : "💌"}
        </button>

        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-transparent mt-4" />
      </div>

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-rose-400 rounded-full animate-pulse" />
        <div
          className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-amber-300 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </div>
  )
}
