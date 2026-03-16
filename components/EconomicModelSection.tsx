import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function EconomicModelSection() {
  return (
    <section className="w-full bg-[#E5E5E5] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto bg-white p-8 md:p-12 w-full flex flex-col shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column: Title */}
          <div className="w-full md:w-[35%]">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-normal leading-[1.05] tracking-[-0.03em] text-black">
              Today&apos;s<br />
              economic model<br />
              is degenerative<br />
              and extractive.
            </h2>
          </div>

          {/* Right Column: Images and Text */}
          <div className="w-full md:w-[65%] flex flex-col">
            {/* Images Container */}
            <div className="relative flex gap-4">
              {/* Left Image: Degenerative */}
              <div className="relative w-1/2 aspect-[4/5] rounded-md overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/tractor/800/1000"
                  alt="Degenerative farming"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 text-white text-xl font-normal tracking-wide">
                  Degenerative
                </div>
              </div>

              {/* Right Image: Regenerative */}
              <div className="relative w-1/2 aspect-[4/5] rounded-md overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/terraces/800/1000"
                  alt="Regenerative farming"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 text-white text-xl font-normal tracking-wide">
                  Regenerative
                </div>
              </div>

              {/* Circular Arrow Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 z-10">
                <ArrowRight className="w-6 h-6 text-black" strokeWidth={1.5} />
              </div>
            </div>

            {/* Text below images */}
            <div className="flex gap-4 mt-6">
              <div className="w-1/2">
                <p className="text-[14px] text-black leading-relaxed font-normal pr-4">
                  Oil, gas and metals might enhance our modern lifestyles, but perpetually extracting without adding severely damages Earth&apos;s ecosystems.
                </p>
              </div>
              <div className="w-1/2">
                <p className="text-[14px] text-black leading-relaxed font-normal pr-4">
                  With a regenerative approach, an ecosystem can renew itself through decomposition, fertilisation and regrowth — and humans can be part of the process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-24 text-[10px] font-semibold text-black uppercase tracking-widest">
          <div className="flex items-center gap-12">
            <span className="font-bold">SPACE10</span>
            <span className="text-gray-500 normal-case tracking-normal text-[11px]">The Regenerative Home</span>
            <span className="border border-black rounded-full px-3 py-1 normal-case tracking-normal text-[11px]">Introduction</span>
          </div>
          <span className="font-bold">7</span>
        </div>
      </div>
    </section>
  );
}
