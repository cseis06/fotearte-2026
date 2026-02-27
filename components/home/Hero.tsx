import Image from 'next/image'
import Background from '../../public/bg/hero.png'

const Hero = () => {
  return (
    <section className="relative h-auto w-full">
      <Image
        src={Background}
        alt="Hero background"
        fill
        priority
        className="object-cover -z-1"
      />
      <div className="relative z-10 flex flex-col gap-3 items-center justify-center text-center h-[115dvh]">
        <h1 
          className="text-9xl font-black text-white" 
          style={{ textShadow: "0 0 15px rgba(0, 0, 0, 0.7)"}}
        >
          ESTO ES <br />
          FOTEARTE
        </h1>
        <span 
          className='text-xl tracking-[0.3em] font-light text-orange-600'
          style={{ textShadow: "0 0 8px rgba(0, 0, 0, 0.7)"}}
        >
          Descubrí la fotografía del mañana, hoy.
        </span>
      </div>
    </section>
  )
}

export default Hero