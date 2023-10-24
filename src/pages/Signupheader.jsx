import { AiOutlineClose } from 'react-icons/ai';

const Signupheader = ({closemodel}) => {
  return (
    <>
    <h2 className="text-3xl font-bold text-gray-500">Signup</h2>

    <button
      onClick={closemodel}
      className="self-end mt-[-50px]  p-2 rounded-full hover:bg-gray-300"
    >
      <AiOutlineClose />
    </button>
    </>
  )
}

export default Signupheader