function Header() {
  return (
    <header>
      <section>
        <nav className="flex justify-center">
            <div className="w-11/12">
          <div class="flex justify-between">
            <div class="p-5">
              <a href="index.html">
                <img src="/src/assets/logo.png" alt="logo" />
              </a>
            </div>
            <div class="flex justify-evenly">
              <div class="p-5">
                <a href="signin.html">Sign in</a>
              </div>
              <div class="p-5">
                <a href="#">
                  <img src="/src/assets/menu.png" alt="menu" />
                </a>
              </div>
            </div>
          </div>
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Header;
