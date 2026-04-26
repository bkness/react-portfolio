import React from "react";
import Project from "../components/Project";
import { Container, Row, Col } from "react-bootstrap";

const projects = [
  {
    name: "forged-cli",
    description:
      "A dev environment toolkit published on npm. Includes a security scanner that checks npm packages for typosquatting, tarball integrity, and publisher rotation — plus project scaffolding, README generation, and shell workflow commands. Built with Node.js and ESM.",
    technologies: "Node.js / npm / ESM / CLI",
    link: "https://www.npmjs.com/package/forged-cli",
    repo: "https://github.com/RevenueWebs/forged-cli",
    image: "readme_gen",
  },
  {
    name: "Natours",
    description:
      "A fully responsive landing page built as a deep-dive into advanced CSS and Sass architecture. Every visual effect — the animated hero, 3D card flips, skewed testimonials, and pure-CSS hamburger nav — is implemented without a single line of JavaScript.",
    technologies: "HTML5 / Sass / CSS3",
    link: "https://bkness.github.io/natours/",
    repo: "https://github.com/bkness/natours",
    image: "natours",
  },
  {
    name: "Video Game Hub",
    description:
      "Full-stack MERN application with GraphQL and Apollo for secure authentication. Features a gaming news feed powered by a News API, a blog system with GraphQL queries and mutations, and JWT-based user auth. Built collaboratively using Agile methodologies.",
    technologies: "MongoDB / GraphQL / Apollo / React / Node / JWT",
    link: "https://github.com/bkness/Video-Gaming-Hub",
    repo: "https://github.com/bkness/Video-Gaming-Hub",
    image: "game",
  },
  {
    name: "Local Brewery Finder",
    description:
      "Full-stack application that lets users log in, search for, and save their favorite breweries. Includes commenting, favorites management, and interactive maps via Leaflet. Built with a team of four using Node.js, Express, MySQL, Handlebars, and Sequelize.",
    technologies: "Node / Express / MySQL / Handlebars / Sequelize / Leaflet",
    link: "https://local-breweries-d7e27e181616.herokuapp.com/",
    repo: "https://github.com/bkness/Local-Breweries",
    image: "LocalBrewery",
  },
  {
    name: "MVC Tech Blog",
    description:
      "Dynamic tech blog using the MVC architecture. Users can manage accounts, publish, update, and comment on posts. Implements bcrypt for password hashing and express-session for user session management, with Handlebars for dynamic rendering.",
    technologies: "Node / Express / MySQL / Handlebars / Sequelize / Bcrypt",
    link: "https://mvc--tech-blog-715ec89956fb.herokuapp.com/",
    repo: "https://github.com/bkness/MVC-Tech-Blog",
    image: "blog",
  },
  {
    name: "Social Network API",
    description:
      "RESTful API backend for a social network built with MongoDB, Express, and Mongoose. Supports users sharing thoughts, reacting to friends' posts, and managing friend lists. Developed and tested with Insomnia.",
    technologies: "MongoDB / Express / Mongoose / Node",
    link: "https://www.youtube.com/watch?v=g3LsVPTANH0",
    repo: "https://github.com/bkness/Social-Network-API",
    image: "social",
  },
];

function Portfolio() {
  return (
    <Container className="my-5">
      <Row>
        {projects.map((project, index) => (
          <Col sm={12} md={6} lg={6} key={index} className="mb-4">
            <Project project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
