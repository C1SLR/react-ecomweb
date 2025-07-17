function News_Letter(){
  return(
    <section className="flex justify-center">
      <div className="w-11/12">
        <div class="flex justify-center m-5 my-20">
          <div class="w-3/4">
            <h1 class="text-2xl text-center p-5">Sign Up For Our Newsletter</h1>
            <p class="text-center text-gray-400">
              Sign up to receive information about our special offers and news.
              You can unsubcribe any time. For more details about how we use
              your information, view our
              <a href="privacy policy.html" class="font-medium text-blue-700"
                >Privacy Policy.</a
              >
            </p>
            <div class="flex justify-center mt-20 my-5">
              <input
                type="text"
                placeholder="Email Address.."
                class="shadow-2xl px-5 py-3 text-gray-400 rounded-l-md focus:outline-gray-200 w-full"
              />
              <input
                type="button"
                value="Submit"
                class="lg:w-40 shadow-2xl text-white bg-cyan-700 rounded-lg transition-colors cursor-pointer hover:bg-cyan-800 px-10 py-3 w-1/3"
              />
            </div>
            <p class="text-gray-400">
              We'll never share your email with anyone else.
            </p>
          </div>
        </div>
        </div>
      </section>
  );
}
export default News_Letter;