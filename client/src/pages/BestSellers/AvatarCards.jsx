import React from "react";

const AvatarCards = ({img, name, handle, gradient}) => {
    return(
        <div className="w-full md:w-52 rounded-lg overflow-hidden border-slate-400/10 pb-6 hover:shadow-xl duration-500 ease-in-out hover:shadow-white">
          <div className="flex flex-col">
            <div className={`h-24 ${gradient}`}></div>
            <div className="self-start -mt-12 mb-6 mx-auto">
                <img src={img} alt="" className="rounded-full bg-center object-cover w-24 h-24 overflow-hidden mx-auto"/>
            </div>
            <div className="text-center mb-6 md:mb-2">
                <h3 className="text-x1">{name}</h3>
                <p className="text-slate-400 text-sm">{handle}</p>
            </div>
            </div>
        </div>
    )
}

export default AvatarCards