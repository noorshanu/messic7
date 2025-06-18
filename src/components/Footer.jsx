import React from 'react'

function Footer() {
  return (
    <section className="w-full flex mt-20 md:mt-20 flex-col items-center justify-center px-6 md:px-16">
      <div className="flex items-center justify-center mb-4">
        <p className="text-center text-sm text-black font-grandstander">
          Disclaimer:  $MSNCR7 is a memecoin created purely for entertainment purposes. Nothing on this website constitutes financial advice or a recommendation to buy, sell, or hold any token. Cryptocurrencies are highly volatile and can involve significant risk. Always do your own research and consult a licensed financial advisor before making any financial decisions.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-center text-sm font-bold text-black font-orbitron">
          Ⓒ  $MSNCR7 2025
        </p>
      </div>
    </section>
  )
}

export default Footer