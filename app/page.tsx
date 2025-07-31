import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-16">
        <Image
          src="/glasses 1.png"
          alt="Glasses"
          width={400}
          height={300}
          className="mb-8"
        />
        
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-white text-[32px] font-normal leading-none tracking-normal font-[family-name:var(--font-turret-road)]">build.ai</h1>
          
          <p className="text-white text-[20px] font-normal leading-none tracking-normal text-center font-[family-name:var(--font-turret-road)]">
            Build physical superintelligence to free humanity from manual labor
          </p>
          
          <div className="flex gap-8 mt-8">
            <a
              href="#"
              className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors duration-200 flex items-center gap-2 font-[family-name:var(--font-turret-road)]"
            >
              Read our manifesto
              <span className="text-lg">→</span>
            </a>
            
            <a
              href="#"
              className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2 font-[family-name:var(--font-turret-road)]"
            >
              Join us
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}