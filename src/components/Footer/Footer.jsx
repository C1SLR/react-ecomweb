function Footer() {
  return (
    <footer>
      <div class="flex justify-center bg-blue-50">
        <div className="md:flex p-5 gap-10 w-11/12">
        <div class="xl:w-4/12 md:w-3/6">
          <div>
            <img src="/footer logo.png" alt="logo" class="my-10" />
          </div>
          <div>
            <p>
              Elephant Please was established in 2021 to alleviate and bring
              awarness to excessive purchasing, over spending and its effect on
              climate change. Elephant Please is a member of Revision AI
              Limited.
            </p>
          </div>
          <div class="flex w-full justify-around my-5">
            <div>
              <a href="https:facebook.com">
                <img src="/fb.png" alt="fb" class="p-5" />
              </a>
            </div>
            <div>
              <a href="https:twitter.com">
                <img
                  src="/X.png"
                  alt="x"
                  class="bg-blue-950 rounded-full p-5"
                />
              </a>
            </div>
            <div>
              <a href="https:youtube.com">
                <img src="/yt.png" alt="yt" class="p-5" />
              </a>
            </div>
            <div>
              <a href="https:linkedin.com">
                <img src="/in.png" alt="in" class="p-5" />
              </a>
            </div>
            <div>
              <a href="https:instagram.com">
                <img src="/ig.png" alt="ig" class="p-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:w-3/12 md:w-2/4">
          <h1 class="md:my-5 text-blue-950 font-semibold text-lg my-2">
            Elephant Please
          </h1>
          <div class="grid grid-cols-2 md:gap-5">
            <div class="my-2">
              <a href="how renting works.html">How renting works</a>
            </div>
            <div class="my-2">
              <a href="terms of use.html">Terms of use</a>
            </div>
            <div class="my-2">
              <a href="lend to start earning.html">How lending works</a>
            </div>
            <div class="my-2">
              <a href="privacy policy.html">Privacy Policy</a>
            </div>
            <div class="my-2">
              <a href="faqs.html">FAQs</a>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div>
        <p class="p-8 text-center bg-blue-100 font-semibold">
          &copy; Elephant Please 2021
        </p>
      </div>
    </footer>
  );
}
export default Footer;