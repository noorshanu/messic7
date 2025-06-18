import React, { useEffect, useRef } from 'react';

const NFT_IMAGES = [
  'NFT-Product-4.jpeg', 'NFT-Product-3.jpeg', 'NFT-Product-2.jpeg', 'NFT-Product-1.jpeg',
  'NFT-Products-5.jpeg', 'NFT-Products-6.jpeg', 'NFT-Products-7.jpeg', 'NFT-Products-8.jpeg',
  'NFT-Products-9.jpeg', 'NFT-Products-10.jpeg', 'NFT-Products-11.jpeg', 'NFT-Products-12.jpeg',
  'NFT-Products-14.jpeg', 'NFT-Products-13.jpeg', 'NFT-Products-15.jpeg', 'NFT-Products-16.jpeg'
];

function Memes() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    const contentWidth = scrollElement.scrollWidth;
    const animationDuration = contentWidth / 50;
    scrollElement.style.animation = `scroll ${animationDuration}s linear infinite`;
  }, []);

  // Double the NFT array to create a seamless loop
  const allNFTs = [...NFT_IMAGES, ...NFT_IMAGES];

  return (
    <section className="flex flex-col items-center justify-center px-0 mt-10" id='memes'>
      <div className="text-center mb-0">
        <h3 className="font-bold text-[32px] lg:text-[36px] xl:text-[40px] font-black mb-2 font-orbitron">
          MEMES
        </h3>
        <p className="font-medium leading-7 text-lg xl:text-xl mx-auto font-grandstander mb-0">
          Everyone loves $MSNCR7
        </p>
      </div>

      <div className="w-full flex mt-[58px] md:mt-[36px] flex-row items-center justify-center px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="relative w-full overflow-hidden bg-black border-y border-cyan-500">
          <div 
            ref={scrollRef}
            className="flex w-max gap-4 py-0"
          >
            {allNFTs.map((image, index) => (
              <div 
                key={`${image}-${index}`}
                className="relative w-64 h-80 flex-shrink-0 overflow-hidden rounded-xl border border-cyan-500/30 group"
              >
                <img 
                  src={`/${image}`} 
                  alt={`NFT ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Memes;