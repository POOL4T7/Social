import React from "react";

const Footer = () => {
  return (
    <footer className=" text-center bg-light">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/gulshan4t7/"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://twitter.com/gulshan4t7"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="mailto:abhinvg90834@gmail.com"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-google"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://instagram.com/gulshan4t7"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/POOL4T7"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/cap-pool/"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 - {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="/">
          Chat App
        </a>
      </div>
    </footer>
  );
};

export default Footer;
