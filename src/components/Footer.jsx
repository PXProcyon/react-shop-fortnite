function Footer() {
  return (
    <footer className="#000000 black">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Fortnite Shop</h5>
            <a
              className="grey-text text-lighten-4"
              href="https://github.com/PXProcyons"
            >
              Profile
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/PXProcyon"
          >
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
