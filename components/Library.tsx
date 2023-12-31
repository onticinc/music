"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
  const onClick = () => {
    // handle upload later
  };
  return (
    <div className="flex flex-col">
        <div className="flex items-center justify-between px-5 pt-4">

            <div className="inline-flex items-center gap-x-2">
                <TbPlaylist className="text-neutral-400" size={26} />
                <p className="text-neutral-400 font-medium text-md">Your Library</p>
            </div>
            <AiOutlinePlus className="text-neutral-400 hover:text-white transition cursor-pointer" size={20} onClick={onClick}/>
        </div>
        <div className="flex clex-col gap-y-2 px-3 mt-4">
            List of Songs!
        </div>
    </div>
  );
};

export default Library;
