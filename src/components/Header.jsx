function Header() {
  return (
    <nav className="#000000 black">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo right">
          Fortnite Shop
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
