function Rent_And_Lend() {
  return (
    <section className="flex justify-center">
      <div className="w-11/12">
        <div class="md:flex md:gap-5 m-5">
          <div>
            <h2 class="font-bold text-2xl mb-5">
              <strong class="md:text-cyan-700 font-bold">Rent</strong> to save
              and be green
            </h2>
            <p class="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              at culpa magni minus omnis magnam maxime repudiandae, earum odit?
              Laudantium adipisci unde doloremque aliquam iure dolores id
              eligendi rerum iste quidem! Praesentium vel saepe ab quos veniam!
              Ducimus, voluptatum magni.
            </p>
            <a
              href="how renting works.html"
              class="md:font-semibold md:flex hidden"
            >
              How Renting Works
            </a>
            <button class="md:hidden shadow-2xl text-white bg-cyan-700 rounded-lg transition-colors cursor-pointer hover:bg-cyan-800 px-10 py-3 my-10">
              <a href="how renting works.html"> How Renting Works </a>
            </button>
          </div>
          <div>
            <img
              src="/src/assets/Group 143.png"
              alt="group143"
              class="md:block hidden"
            />
            <img
              src="/src/assets/Group 141.png"
              alt="group141"
              class="md:hidden w-full"
            />
          </div>
        </div>
        <div class="md:flex md:gap-5 m-5">
          <div class="w-1/2">
            <img
              src="/src/assets/Group 142.png"
              alt="group142"
              class="md:block w-full hidden"
            />
          </div>
          <div class="md:w-1/2">
            <h2 class="font-bold text-2xl my-5">Lend to start earning</h2>
            <p class="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              laborum magni reprehenderit placeat sapiente tempore maxime quasi
              fugit hic obcaecati animi repellendus consectetur ad rem minima,
              explicabo distinctio maiores excepturi amet expedita. Eum alias
              nesciunt ea quasi numquam illo cumque?
            </p>
            <button class="shadow-2xl text-white bg-cyan-700 rounded-lg transition-colors cursor-pointer hover:bg-cyan-800 px-10 py-3 my-10">
              <a href="itemlist.html"> List and earn </a>
            </button>
            <img
              src="/src/assets/Group 142.png"
              alt="group142"
              class="md:hidden w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Rent_And_Lend;
