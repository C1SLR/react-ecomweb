function Herosection() {
  return (
    <section className="flex justify-center">
      <div className="w-11/12">
        <div class="md:flex">
          <div class="w-full">
            <div class="p-5">
              <h1 class="text-4xl">
                Rent <strong class="text-blue-800">Cameras</strong> From
                <strong class="text-blue-800">People</strong> In Your Community
              </h1>
              <p class="text-gray-600 mt-5">
                Enjoy the item without the button to own and at a fraction of
                the price.
              </p>
            </div>
            <div>
              <div class="flex justify-center">
                <input
                  type="search"
                  placeholder="Search Here..."
                  class="md:w-full md:ml-5 shadow-2xl px-5 py-3 text-gray-400 rounded-l-md focus:outline-gray-200"
                />
                <button class="shadow-2xl px-10 py-3 text-white bg-cyan-700 rounded-r-lg transition-colors cursor-pointer hover:bg-cyan-800">
                  Search
                </button>
              </div>
              <div class="flex gap-5 items-center">
                <p class="pl-5">or</p>
                <button class="p-3 m-5 text-cyan-700 border-2 border-cyan-700 rounded-lg hover:bg-cyan-700 hover:text-white">
                  <a href="itemlist.html"> List on item </a>
                </button>
              </div>
            </div>
          </div>
          <div class="ml-20 mb-10">
            <img
              src="/src/assets/camera.jpg"
              alt="banner"
              class="rounded-l-[20%]"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="lg:w-2/3 md:justify-evenly md:w-3/4 md:flex-row flex flex-col items-center w-1/2">
            <div class="md:hidden flex flex-col items-center my-5">
              <img src="/src/assets/community.png" alt="community" />
              <h3 class="font-semibold mt-2">Community based</h3>
              <p class="text-center text-gray-400">
                Take part in the community. Grow Together
              </p>
            </div>
            <div class="md:flex md:flex-col md:items-center md:my-5 hidden">
              <img src="/src/assets/joy.png" alt="community" />
              <h3 class="md:font-semibold mt-2">Share the Joy</h3>
              <p class="md:text-center md:text-gray-400">
                Grow closer. Take part in the community.
              </p>
            </div>
            <div class="flex flex-col items-center my-5">
              <img src="/src/assets/save money.png" alt="save money" />
              <h3 class="font-semibold mt-2">Save money</h3>
              <p class="text-center text-gray-400">
                Buy less. Rent on demand for a fraction of the price.
              </p>
            </div>
            <div class="flex flex-col items-center my-5">
              <img src="/src/assets/help the plant.png" alt="plant" />
              <h3 class="font-semibold mt-2">Help the planet</h3>
              <p class="text-center text-gray-400">
                Live greener. Reduce waste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Herosection;
