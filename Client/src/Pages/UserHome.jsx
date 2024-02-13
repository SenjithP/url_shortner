import ShortenUrlComponent from "../Components/ShortenUrlComponent";

const UserHome = () => {
  return (
<section className="flex justify-center  items-center h-screen">
  <div className="px-5 xl:px-0">
    <div className="max-w-[1170px] mx-auto">
      <div className="rounded-lg m-10 md:p-10 md:shadow-md grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:block rounded-l-lg col-span-1"> 
          <figure className="rounded-l-lg">
            <img
              src="http://srturl.in/why-us-o.svg"
              alt="register"
              className="rounded-lg w-full"
            />
          </figure>
        </div>

        <div className="rounded-l-lg py-5 text-center lg:pl-16 col-span-2"> 
          <h3 className="text-black text-[24px] leading-9 font-bold mb-1">
            Shorten your <span className="text-orange-700">URL</span> now
          </h3>

          <ShortenUrlComponent />
        </div> 
      </div>
    </div>
  </div>
</section>


  );
};

export default UserHome;
