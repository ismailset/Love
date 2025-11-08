"use client"

import { useState } from "react"
import { WelcomeScreen } from "@/components/welcome-screen"
import { LetterScreen } from "@/components/letter-screen"

export default function Home() {
  const [showLetter, setShowLetter] = useState(false)

  return (
    <main className="w-full h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 overflow-hidden">
      {!showLetter ? (
        <WelcomeScreen onOpenLetter={() => setShowLetter(true)} />
      ) : (
        <LetterScreen onBack={() => setShowLetter(false)} />
      )}
    </main>
  )
}
