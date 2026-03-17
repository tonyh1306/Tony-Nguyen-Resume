"use client"

interface ScrollingMarqueeProps {
  items: string[]
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
}

export function ScrollingMarquee({
  items,
  direction = "left",
  speed = "normal",
}: ScrollingMarqueeProps) {
  const speedClass = {
    slow: "animate-[marquee_40s_linear_infinite]",
    normal: "animate-[marquee_25s_linear_infinite]",
    fast: "animate-[marquee_15s_linear_infinite]",
  }

  const directionStyle = direction === "right" ? "animation-direction: reverse" : ""

  return (
    <div className="w-full overflow-hidden bg-primary/10 border-y border-primary/20 py-4">
      <div
        className={`flex whitespace-nowrap ${speedClass[speed]}`}
        style={{ [directionStyle]: true } as React.CSSProperties}
      >
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="flex items-center">
            {items.map((item, i) => (
              <span key={i} className="flex items-center mx-8">
                <span className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-wide">
                  {item}
                </span>
                <span className="mx-8 text-primary text-2xl">*</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
