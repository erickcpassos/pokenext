import React from "react";

function Stat({ attribute, value }) {
  return (
    <div className="grid grid-cols-3 ring-2 ring-red-500 w-9/12 mx-auto rounded-lg my-2 text-sm overflow-hidden">
      <p className="justify-self-stretch text-center col-start-1 col-end-3 bg-red-500 text-white">
        {attribute}
      </p>
      <p className="justify-self-stretch text-center">{value}</p>
    </div>
  );
}

export default Stat;
