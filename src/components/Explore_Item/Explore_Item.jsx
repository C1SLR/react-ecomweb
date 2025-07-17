function Explore_Item() {
  return (
    <section className="flex justify-center m-5">
      <div class="w-11/12">
        <div class="md:grid-cols-5 grid grid-cols-2 gap-3">
          <div class="md:col-span-3 mr-auto">
            <h2 class="text-2xl font-bold">Explore Item Categories</h2>
          </div>
          <div class="md:col-span-2 ml-auto">
            <button class="md:bg-white md:text-cyan-700 md:border-2 md:hover:bg-gray-200 shadow-2xl text-white bg-cyan-700 rounded-lg transition-colors cursor-pointer hover:bg-cyan-800 px-10 py-3">
              <a href="search.html">View All</a>
            </button>
          </div>
          <div class="md:col-span-5 col-span-2">
            <p class="text-gray-400">
              Hover and select to view items available to be rented. Frim film &
              Photography to Drones to Clothes & Shoes. If you can think of it,
              you can find it.
            </p>
          </div>
          <div class="relative group col-span-2 row-span-2 cursor-pointer">
            <img src="/src/assets/exploreimg1.png" alt="img1" class="w-full" />
            <div class="absolute inset-0 bottom-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
              <p class="text-white text-lg font-semibold pb-2">Cameras</p>
            </div>
          </div>
          <div class="relative group cursor-pointer">
            <img
              src="/src/assets/exploreimg2.png"
              alt="img2"
              class="md:h-full w-full"
            />
            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
              <p class="text-white text-lg font-semibold pb-2">GPU</p>
            </div>
          </div>
          <div class="relative group cursor-pointer">
            <img
              src="/src/assets/exploreimg3.png"
              alt="img3"
              class="md:h-full w-full"
            />
            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
              <p class="text-white text-lg font-semibold pb-2">Warehouse</p>
            </div>
          </div>
          <div class="relative group cursor-pointer">
            <img
              src="/src/assets/exploreimg4.png"
              alt="img4"
              class="md:h-full w-full"
            />
            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
              <p class="text-white text-lg font-semibold pb-2">Celebration</p>
            </div>
          </div>
          <div class="relative group cursor-pointer">
            <img
              src="/src/assets/exploreimg5.png"
              alt="img5"
              class="md:h-full w-full"
            />
            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
              <p class="text-white text-lg font-semibold pb-2">Sports</p>
            </div>
          </div>
          <div class="relative group cursor-pointer">
            <img
              src="/src/assets/exploreimg6.png"
              alt="img6"
              class="md:h-full w-full"
            />
            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
              <p class="text-white text-lg font-semibold pb-2">Headphones</p>
            </div>
          </div>
          <div class="relative group cursor-pointer">
            <img
              src="/src/assets/exploreimg7.png"
              alt="img7"
              class="md:h-full w-full h-auto block rounded-md"
            />
            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
              <p class="text-white text-lg font-semibold pb-2">Clothing</p>
            </div>
          </div>
        </div>
        <div class="md:flex md:items-center bg-blue-50 rounded-2xl my-25">
          <div class="md:w-1/2 p-5">
            <h2 class="font-semibold text-2xl mb-5">Acess on the go</h2>
            <p>
              Elephant Please is a responsive website, open it on any browser
              and use it on your devices. Rent more ,save more. Lend more, earn
              more.
            </p>
          </div>
          <div class="md:w-1/2">
            <img src="/src/assets/iphone.png" alt="phone" class="md:w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Explore_Item;