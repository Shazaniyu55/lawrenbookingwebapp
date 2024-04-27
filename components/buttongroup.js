import {FaArrowLeft} from 'react-icons/fa'

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="flex items-center gap-2 mx-auto">
      <button
        aria-label="play_icon"
        className="hover:text-black text-neutral-200 hover:bg-yellow rounded-full p-2"
        onClick={previous}
      >
        <FaArrowLeft size={20} className="text-3xl " />
      </button>
      <button
        aria-label="play_icon"
        className="hover:text-black text-neutral-200 rotate-180  hover:bg-yellow rounded-full p-2"
        onClick={next}
      >
        <FaArrowLeft size={20} className="text-3xl " />
      </button>
    </div>
  );
};

export default ButtonGroup;
