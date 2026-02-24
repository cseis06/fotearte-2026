import Image from 'next/image'
import Background from '../../public/bg/hero.png'

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={Background}
        alt="Hero background"
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">Hero</h1>
      </div>
    </div>
  )
}

export default Hero