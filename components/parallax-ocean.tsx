"use client"

import { useEffect, useRef } from "react"

export function ParallaxOcean() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-[150vh]"
        style={{
          backgroundImage: `url('/images/ocean-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/70" />
    </div>
  )
}
