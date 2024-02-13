import { useRef, useState } from "react";
import { useShotenUrlMutation } from "../Slices/urlApiSlice";
import { toast } from "react-toastify";

const ShortenUrlComponent = () => {
  const [shotenUrl] = useShotenUrlMutation();
  const [url, setUrl] = useState();

  const [formData, setFormData] = useState({
    url: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { url } = formData;
    try {
      const response = await shotenUrl({ url }).unwrap();
      toast.success(response.message);
      setUrl(response.shortenedUrl);
      setFormData({url: ""})
    } catch (error) {
      if (error.data && error.data.error) {
        toast.error(error.data.error);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  const textRef = useRef(null);

  const handleCopy = () => {
    if (textRef.current) {
      textRef.current.select();
      navigator.clipboard.writeText(textRef.current.value);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="">
          <input
            type="text"
            placeholder="Enter the URL"
            name="url"
            value={formData.url}
            onChange={(e) => handleInputChange(e)}
            className="my-2 w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-orange-700 text-[16px] leading-7 text-black placeholder:text-gray rounded-md cursor-pointer mb-3 md:mb-0"
          />
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="w-full bg-orange-700 hover:bg-orange-600 text-white text-lg leading-7 rounded-lg px-4 py-3"
          >
            Shorten Now
          </button>
        </div>
      </form>

      <div className="flex flex-row justify-center items-center border rounded-lg shadow-xl border-black p-4 m-4">
        <textarea
        placeholder="You can copy the shortened URL from here."
          ref={textRef}
          readOnly
          value={url}
          className="flex-grow resize-none border-none outline-none"
        />
        <button
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </>
  );
};

export default ShortenUrlComponent;
