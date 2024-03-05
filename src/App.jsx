import { useEffect } from "react";
import { Topbar } from "./components/index";
function App() {
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((result) => result.json())
      .then((res) => console.log(res));
  }, []);
  return (
    <main className="flex flex-col h-full">
      <Topbar />
      <div className="flex flex-col md:flex-row m-16 gap-8">
        <section className="flex w-3/4">
          <div className="bg-white p-4 h-fit">
            <h2>Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              suscipit feugiat sem, nec bibendum ipsum sodales sit amet.
              Praesent nec lectus a libero aliquam sollicitudin sed a nunc.
            </p>
            <div className=" bg-[#E8F4FD] flex flex-col sm:flex-row w-full gap-4 text-justify  my-6 rounded-lg p-4">
              <div className="text-nowrap justify-center items-center flex flex-col">
                <div className="w-24 h-28">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww"
                    alt="Image"
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <p className="font-bold text-lg pt-3">Elina Williams</p>
                <p className="font-normal text-base text-[#788F9B]">
                  Designation here
                </p>
              </div>
              <div className="pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                suscipit feugiat sem, nec bibendum ipsum sodales sit amet.
                Praesent nec lectus a libero aliquam sollicitudin sed a nunc.
                Integer a nulla eget est ultricies aliquam. Quisque hendrerit,
                odio nec lobortis aliquet, nisi eros scelerisque lacus, vel
                rutrum dui ex non dolor. Vivamus vestibulum diam vel turpis
                vehicula, ac fermentum justo consequat. Nulla facilisi. Sed
                gravida, neque sit amet dictum fermentum, justo nisi bibendum
                libero, ut fringilla justo leo id lectus.
              </div>
            </div>
            {/* <div className=" bg-[#CDDBE2] flex gap-4 text-justify ">
              <div>
                <div className="w-24 h-28 ">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                    alt="Image"
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <p>Name</p>
                <p>Designation</p>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                suscipit feugiat sem, nec bibendum ipsum sodales sit amet.
                Praesent nec lectus a libero aliquam sollicitudin sed a nunc.
                Integer a nulla eget est ultricies aliquam. Quisque hendrerit,
                odio nec lobortis aliquet, nisi eros scelerisque lacus, vel
                rutrum dui ex non dolor. Vivamus vestibulum diam vel turpis
                vehicula, ac fermentum justo consequat. Nulla facilisi. Sed
                gravida, neque sit amet dictum fermentum, justo nisi bibendum
                libero, ut fringilla justo leo id lectus.
              </div>
            </div>
            <div className=" bg-[#CDDBE2] flex gap-4 text-justify ">
              <div>
                <div className="w-24 h-28 ">
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Image"
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <p>Name</p>
                <p>Designation</p>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                suscipit feugiat sem, nec bibendum ipsum sodales sit amet.
                Praesent nec lectus a libero aliquam sollicitudin sed a nunc.
                Integer a nulla eget est ultricies aliquam. Quisque hendrerit,
                odio nec lobortis aliquet, nisi eros scelerisque lacus, vel
                rutrum dui ex non dolor. Vivamus vestibulum diam vel turpis
                vehicula, ac fermentum justo consequat. Nulla facilisi. Sed
                gravida, neque sit amet dictum fermentum, justo nisi bibendum
                libero, ut fringilla justo leo id lectus.
              </div>
            </div> */}
          </div>
        </section>
        <section className="flex flex-col w-1/4 h-full">
          <div className="bg-[#0052FE] text-white flex flex-col gap-8 p-8 justify-center items-center rounded-lg">
            <h3 className=" font-bold text-white leading-8 text-center text-2xl">
              Get Started with KoinX <br /> for FREE
            </h3>
            <h5 className="text-sm w-72 font-normal text-center leading-6">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax
            </h5>
            <img
              alt="calculator-asset"
              width="180"
              height="167"
              src="https://www.koinx.com/_next/static/media/CryptoGuide.555c0e7d.svg"
            />
            <button className="bg-white border-2 border-solid-white text-black px-6 py-2 rounded-lg">
              <p className="text-lg font-semibold">
                {" "}
                Get Started for FREE{" ->"}
              </p>
            </button>
          </div>
          <div>
            <h3>Trending</h3>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
