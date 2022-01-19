import React from "react";

const Footer = () => {
  return (
    <footer class=" text-center bg-light">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/gulshan4t7/"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-facebook-f"></i>
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://twitter.com/gulshan4t7"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-twitter"></i>
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="mailto:abhinvg90834@gmail.com"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-google"></i>
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://instagram.com/gulshan4t7"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-instagram"></i>
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://github.com/POOL4T7"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-github"></i>
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/cap-pool/"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-linkedin"></i>
          </a>
        </section>
      </div>
      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 - {new Date().getFullYear()} Copyright:{" "}
        <a class="text-white" href="/">
          Chat App
        </a>
      </div>
    </footer>
  );
};

export default Footer;
