const actionTiles = [
  {
    title: "Explore Topics",
    description:
      "Browse free videos, podcasts, and articles to discover what you want to study.",
    cta: "Start Exploring",
  },
  {
    title: "Learn with Structure",
    description:
      "Follow guided learning paths and hands-on courses built by MIT faculty.",
    cta: "View Learning Paths",
  },
  {
    title: "Earn Career Credentials",
    description:
      "Build job-ready skills with cohort-based programs and recognized certificates.",
    cta: "See Credentials",
  },
];

const freeCourses = [
  {
    type: "Learning Path",
    title: "AI Foundations for Decision Makers",
    detail: "4-course sequence · 8 weeks",
    cta: "Begin Path",
  },
  {
    type: "Free Course",
    title: "Data Literacy for Everyone",
    detail: "Self-paced · 4 hours",
    cta: "Start Free",
  },
  {
    type: "Free Course",
    title: "Systems Thinking in Practice",
    detail: "Self-paced · 6 hours",
    cta: "Start Free",
  },
];

const credentialCards = [
  {
    title: "Professional Certificate in Applied AI",
    duration: "16 weeks",
    effort: "8-10 hrs/week",
    cohort: "Spring Cohort",
    price: "$2,400",
  },
  {
    title: "MicroMasters in Supply Chain Leadership",
    duration: "10 months",
    effort: "10-12 hrs/week",
    cohort: "Fall Cohort",
    price: "$1,900",
  },
  {
    title: "Professional Certificate in Sustainability",
    duration: "12 weeks",
    effort: "6-8 hrs/week",
    cohort: "Summer Cohort",
    price: "$1,600",
  },
];

const knowledgeCards = [
  {
    type: "Article",
    title: "How MIT Researchers Are Reframing Climate Innovation",
    description: "An editorial deep-dive into practical ideas shaping global policy.",
  },
  {
    type: "Podcast",
    title: "Inside the Lab: Building Human-Centered AI",
    description: "A conversation with faculty on ethics, design, and deployment at scale.",
  },
  {
    type: "OCW Material",
    title: "Signals and Systems Lecture Collection",
    description: "Open lecture notes and videos curated for independent learners.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="heroSection" id="search">
        <div className="container heroContent">
          <p className="eyebrow">Explore → Learn → Earn</p>
          <h1>Find the right MIT learning journey for your next step.</h1>
          <p className="subline">
            Begin with open knowledge, build confidence through free coursework, and advance
            toward professional credentials.
          </p>
          <form className="searchBar" role="search">
            <label htmlFor="homepage-search" className="srOnly">
              Search MIT learning opportunities
            </label>
            <input
              id="homepage-search"
              type="search"
              placeholder="Search by topic, skill, or program"
            />
            <button type="submit">Search</button>
          </form>
          <ul className="capabilityStrip" aria-label="Platform capabilities">
            <li>Open access knowledge</li>
            <li>Structured learning paths</li>
            <li>Industry-recognized credentials</li>
          </ul>
        </div>
      </section>

      <section className="container sectionSpacing">
        <div className="sectionHeader">
          <p className="sectionLabel">Choose How to Learn</p>
          <h2>Pick the format that fits your goals right now.</h2>
        </div>
        <div className="cardGrid threeCol">
          {actionTiles.map((tile) => (
            <article key={tile.title} className="card">
              <h3>{tile.title}</h3>
              <p>{tile.description}</p>
              <a href="#" className="textLink">
                {tile.cta} →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="container sectionSpacing">
        <div className="sectionHeader">
          <p className="sectionLabel">Start Learning for Free</p>
          <h2>Build momentum with one guided path and free courses.</h2>
        </div>
        <div className="cardGrid threeCol">
          {freeCourses.map((course, index) => (
            <article key={course.title} className={index === 0 ? "card featured" : "card"}>
              <p className="pill">{course.type}</p>
              <h3>{course.title}</h3>
              <p>{course.detail}</p>
              <button className={index === 0 ? "primaryBtn" : "secondaryBtn"}>{course.cta}</button>
            </article>
          ))}
        </div>
      </section>

      <section className="container sectionSpacing" aria-labelledby="credentials-heading">
        <div className="sectionHeader">
          <p className="sectionLabel">Professional Credentials</p>
          <h2 id="credentials-heading">Advance from learning to earning.</h2>
        </div>
        <div className="cardGrid threeCol">
          {credentialCards.map((credential) => (
            <article key={credential.title} className="card credentialCard">
              <h3>{credential.title}</h3>
              <ul>
                <li>
                  <strong>Duration:</strong> {credential.duration}
                </li>
                <li>
                  <strong>Effort:</strong> {credential.effort}
                </li>
                <li>
                  <strong>Cohort:</strong> {credential.cohort}
                </li>
                <li>
                  <strong>Price:</strong> {credential.price}
                </li>
              </ul>
              <button className="primaryBtn">Apply Now</button>
            </article>
          ))}
        </div>
      </section>

      <section className="exploreSection">
        <div className="container sectionSpacing">
          <div className="sectionHeader">
            <p className="sectionLabel">Explore MIT Knowledge</p>
            <h2>Editorial stories and open materials to keep curiosity moving.</h2>
          </div>
          <div className="cardGrid threeCol">
            {knowledgeCards.map((card) => (
              <article key={card.title} className="knowledgeCard">
                <p className="editorialTag">{card.type}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href="#" className="textLink">
                  Read or watch →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
