import type { HeroSectionProps } from "./about.types"

export function HeroSection({ title, description, video }: HeroSectionProps) {
  return (
    <section className="relative py-12 sm:py-20 px-0 sm:px-8 text-center overflow-hidden min-h-60 md:min-h-75">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover scale-110 saturate-50"
      >
        <source src={video} type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="container-custom px-4 sm:px-8 max-w-300 mx-auto sm:ml-0 py-0 relative z-10 flex flex-col justify-center sm:justify-end min-h-50 md:min-h-75">
        <div className="text-left text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-white min-h-18.75 font-mono">
          {title}
        </div>
        <div>
          <p className="text-xl text-white text-left">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

HeroSection.displayName = "HeroSection"
