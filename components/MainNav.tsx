const navGroups = [
  {
    label: "Learn",
    items: ["Courses", "Learning Paths"],
  },
  {
    label: "Credentials",
    items: ["Professional Certificates", "MicroMasters"],
  },
  {
    label: "Explore",
    items: ["Videos", "Podcasts", "Articles", "OCW Materials"],
  },
];

export function MainNav() {
  return (
    <header className="topNav">
      <div className="container navInner">
        <p className="brand">MIT Learning</p>
        <nav aria-label="Main navigation" className="navLinks">
          {navGroups.map((group) => (
            <details key={group.label} className="navGroup">
              <summary>{group.label}</summary>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <a className="searchLink" href="#search">
            Search
          </a>
        </nav>
      </div>
    </header>
  );
}
