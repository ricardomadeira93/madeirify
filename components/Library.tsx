"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
interface LibraryProps {}

const Library: React.FC<LibraryProps> = ({}) => {
  const onClick = () => {};
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-500" size={26} />
          <p className="text-neutral-400 text-md font-medium">Your Library</p>
        </div>
        <AiOutlinePlus
          className="text-neutral-500 cursor-pointer hover:text-white transition"
          onClick={onClick}
          size={22}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3 text-white">Song List</div>
    </div>
  );
};

export default Library;
