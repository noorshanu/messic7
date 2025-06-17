import React from 'react';

function Token() {
  return (
    <section className="flex items-center justify-center px-6 mt-10 lg:mt-10">
      <div className="text-center">
        <h3 className="font-bold text-[32px] lg:text-[36px] xl:text-[40px] font-black mb-2 font-orbitron">
          Two legends. Two eras.
        </h3>
        <p className="font-medium leading-7 text-lg xl:text-xl mx-auto font-grandstander mb-4">
          One token to rule them all.
        </p>
        
        <div className="w-full flex items-center justify-center">
          <div className="flex justify-center items-center h-64">
            <div className="relative w-60 h-60">
              {/* Shadow layer */}
              <div className="absolute w-full h-full rounded-full bg-[#3d8f47] shadow-inner transform -translate-y-2"></div>
              {/* Main circle */}
              <div className="absolute w-full h-full rounded-full bg-[#4eaf5a]">
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <span className="text-white text-2xl font-bold">100%</span>
                  <span className="text-white text-2xl font-bold">Liquidity Pool</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="font-medium leading-7 text-lg xl:text-xl mx-auto font-grandstander mt-4">
          Messi's magic meets Ronaldo's power in the most iconic memecoin ever created! $MessinCr7 isn't just a tribute to football's greatest – it's a symbol of unity, passion, and unstoppable energy. Whether you're Team Messi or Team Ronaldo, one thing's for sure: this is the GOAT token the crypto world has been waiting for. Built by fans, powered by the community, and ready to dominate the field of Web3.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Token;