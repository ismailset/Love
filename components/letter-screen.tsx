"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"

interface LetterScreenProps {
  onBack: () => void
}

export function LetterScreen({ onBack }: LetterScreenProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-rose-50/50 via-white to-amber-50/50 flex items-center justify-center p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 py-6 xs:py-8 sm:py-10">
      <button
        onClick={onBack}
        className="fixed top-3 xs:top-4 sm:top-6 left-3 xs:left-4 sm:left-6 z-20 flex items-center gap-2 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full bg-white/80 backdrop-blur text-rose-600 hover:bg-rose-50 transition-all duration-300 hover:gap-3 shadow-md text-xs sm:text-sm"
      >
        <ArrowLeft className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
        <span className="font-medium hidden xs:inline">Back</span>
      </button>

      <div
        className={`w-full max-w-4xl transition-all duration-1000 transform ${
          isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 to-amber-100/20 rounded-xl xs:rounded-2xl sm:rounded-3xl blur-2xl" />

        <div className="relative bg-white rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-lg xs:shadow-xl sm:shadow-2xl p-4 xs:p-5 sm:p-8 md:p-10 lg:p-12 backdrop-blur-sm border border-rose-100/30">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent rounded-t-xl xs:rounded-t-2xl sm:rounded-t-3xl" />

          <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
            <div className="text-right mb-4 xs:mb-5 sm:mb-8">
              <p className="font-serif italic text-rose-600 text-sm xs:text-base sm:text-lg md:text-xl">My Dearest,</p>
            </div>

            <div className="space-y-3 xs:space-y-4 sm:space-y-5 text-gray-700 font-serif leading-relaxed text-xs xs:text-sm sm:text-base md:text-lg">
              <p className="text-justify break-words hyphens-auto">
                When someone falls in love at first sight, logically speaking, it's not love—it's like. Love and like
                are not the same thing. When I first saw you, I assumed in my mind, "Yeah, she is something
                interesting." After some days of observations and seeing your unique features, I just fell in love.
              </p>

              <p className="text-justify break-words hyphens-auto">
                I am using the word love repeatedly, but I don't know if it's love, friendship, or something else.
                Because I've never seen any girl like this and never talked to any girl in that tone, so I'm confused.
                In that confusion, I know you are someone who keeps me motivated. When I talk to you, I feel happy—I
                forget all of my stress.
              </p>

              <p className="text-justify break-words hyphens-auto">
                I will not say you are the prettiest girl in the world. But I can surely say that you are the most
                beautiful girl in the world. Face beauty makes a girl pretty, but inner beauty and unique features make
                a girl beautiful. Here I just represent my words. It's totally up to you what you think.
              </p>

              <p className="text-justify italic text-rose-600 break-words hyphens-auto">
                You are my truth, my comfort, and my forever.
              </p>
            </div>

            <div className="w-16 xs:w-20 sm:w-24 h-0.5 bg-gradient-to-r from-rose-300 to-transparent my-4 xs:my-6 sm:my-8" />

            <div className="text-right space-y-1.5 xs:space-y-2 sm:space-y-3">
              <p className="font-serif italic text-rose-600 text-base xs:text-lg sm:text-xl">Forever yours,</p>
              <p className="font-serif text-xl xs:text-2xl sm:text-3xl font-semibold text-rose-700">ORANGE</p>
              <p className="text-xl xs:text-2xl sm:text-3xl">❤️</p>
              <p className="font-serif italic text-rose-400 text-xs xs:text-sm">All my love, always</p>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-3 xs:top-4 sm:top-6 right-3 xs:right-4 sm:right-6 w-2.5 xs:w-3 sm:w-4 h-2.5 xs:h-3 sm:h-4 border-t-2 border-r-2 border-rose-200 rounded-tr-lg" />
          <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-3 xs:left-4 sm:left-6 w-2.5 xs:w-3 sm:w-4 h-2.5 xs:h-3 sm:h-4 border-b-2 border-l-2 border-rose-200 rounded-bl-lg" />
        </div>

        {/* Floating hearts */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none hidden sm:block">
          <FloatingHeart delay={0} />
          <FloatingHeart delay={0.5} />
          <FloatingHeart delay={1} />
        </div>
      </div>
    </div>
  )
}

function FloatingHeart({ delay }: { delay: number }) {
  return (
    <div
      className="absolute text-rose-300 text-2xl animate-pulse"
      style={{
        animation: `float 4s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100 - 50}px`,
      }}
    >
      ❤️
    </div>
  )
}
