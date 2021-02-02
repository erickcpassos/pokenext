import React from "react";
import { BsArrowRight } from "react-icons/bs";

const chain = ["poke1", "poke2", "poke3"];

function EvolutionInfo() {
  return (
    <div className="my-8">
      <h3 className="text-center mb-3 font-bold text-xl">Evolution Chain</h3>
      <div className="flex justify-between w-10/12 mx-auto items-center lg:w-7/12">
        {chain.map((poke, index) => {
          return (
            <>
              {index > 0 && (
                <BsArrowRight className="text-red-500 text-2xl lg:text-4xl transform -translate-y-3" />
              )}
              <div className="flex flex-col items-center">
                <div className="rounded-full w-16 h-16 lg:w-20 lg:h-20 ring-1 ring-red-500 flex items-center justify-center mb-2">
                  <p>{poke}</p>
                </div>
                <p className="text-center text-sm">POKEMON</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default EvolutionInfo;
