import React, { useEffect, useRef } from 'react';

function Marque() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const textWidth = marqueeElement.scrollWidth;
    const animationDuration = textWidth / 50; // Adjusted for faster speed

    marqueeElement.style.animation = `marquee ${animationDuration}s linear infinite`;
  }, []);

  return (
    <section className="h-[40px] w-full overflow-hidden bg-[#031faf] border-y-2 border-zinc-800 pt-[6px]">
      <div 
        ref={marqueeRef}
        className="text-white flex items-center font-bold animate-marquee"
      >
        <div className="whitespace-nowrap font-space-grotesk">
         $MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —$MSNCR7 —
        </div>
      </div>
    </section>
  );
}

export default Marque;