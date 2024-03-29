import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <header class="header">
        <h1>Header</h1>
      </header>

      <nav class="sticky navbar">
        <div class="brand  display__logo">
          <a href="#top" class="nav__link">
            {" "}
            <span class="logo">Mohammad Abu Mattar</span>
          </a>
        </div>

        <input type="checkbox" id="nav" class="hidden" />
        <label for="nav" class="nav__open">
          <i></i>
          <i></i>
          <i></i>
        </label>
        <div class="nav">
          <ul class="nav__items">
            <li class="nav__item">
              <a href="#home" class="nav__link">
                Home
              </a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">
                About
              </a>
            </li>
            <li class="nav__item">
              <a href="#portfolio" class="nav__link">
                Portfolio
              </a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <section class="home">
          <div id="home">
            <h1>Home</h1>
          </div>
        </section>
        <section class="about">
          <div id="about">
            <h1>About</h1>
          </div>
        </section>
        <section class="portfolio">
          <div id="portfolio">
            <h1>Portfolio</h1>
          </div>
        </section>
        <section class="contact">
          <div id="contact">
            <h1>Contact</h1>
          </div>
        </section>
      </main>

      <footer class="footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default Navbar;
