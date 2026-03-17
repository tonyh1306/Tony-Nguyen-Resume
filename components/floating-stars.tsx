"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  color: "pink" | "yellow"
}

function StarIcon({ className, color }: { className?: string; color: "pink" | "yellow" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Outer star points */}
      <path
        d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
        fill={color === "pink" ? "var(--secondary)" : "var(--primary)"}
      />
      {/* Inner pink center */}
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="var(--primary)"
      />
    </svg>
  )
}

export function FloatingStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 4,
      color: Math.random() > 0.5 ? "pink" : "yellow",
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: 0.6,
          }}
        >
          <StarIcon
            className="drop-shadow-lg"
            color={star.color}
            style={{ width: star.size, height: star.size }}
          />
        </div>
      ))}
    </div>
  )
}
