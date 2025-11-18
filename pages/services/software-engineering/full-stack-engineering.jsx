import React from "react";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";

import { FaPaintBrush, FaBolt, FaDatabase } from "react-icons/fa";
import Head from "next/head";

export default function FullStackEngineering() {
  return (
    <>
      <Head>
        <title>Full-stack Engineering | Skyfobs</title>
        <meta
          name="description"
          content="Expert full-stack engineering services including frontend, backend, and cloud architecture solutions."
        />
        <meta property="og:title" content="Full-stack Engineering | Skyfobs" />
        <meta
          property="og:description"
          content="Expert full-stack engineering services including frontend, backend, and cloud architecture solutions."
        />
      </Head>
      <HeroSection
        title="Full-stack Engineering"
        intro="Expert teams building performant and maintainable apps with modern frameworks."
      />

      <IconFeatureGrid
        items={[
          {
            icon: <FaPaintBrush />,
            title: "Frontend",
            text: "React, Vue, Angular, UI/UX Design",
          },
          {
            icon: <FaBolt />,
            title: "Backend",
            text: "Node.js, Python, APIs, Microservices",
          },
          {
            icon: <FaDatabase />,
            title: "Database",
            text: "SQL, NoSQL, Caching, Data Modeling",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Full-stack Engineering",
            paragraphs: [
              "Full-stack engineering encompasses the complete software development lifecycle, from user interfaces to server infrastructure. Full-stack engineers bridge the gap between frontend and backend, creating cohesive, end-to-end solutions.",
            ],
          },

          {
            heading: "Frontend Excellence",
            paragraphs: [],
          },

          {
            heading: "Modern JavaScript Frameworks",
            paragraphs: [
              "React, Vue, and Angular dominate the frontend landscape, each offering component-based architectures that promote reusability and maintainability. Understanding virtual DOM, state management, and component lifecycle enables building responsive, interactive user interfaces.",
            ],
          },

          {
            heading: "Responsive Design and Accessibility",
            paragraphs: [
              "Creating applications that work seamlessly across devices requires mastery of CSS frameworks, flexible layouts, and mobile-first design principles. Accessibility ensures your applications serve all users, regardless of abilities or assistive technologies.",
            ],
          },

          {
            heading: "Performance Optimization",
            paragraphs: [
              "Fast-loading applications improve user experience and conversion rates. Techniques include code splitting, lazy loading, image optimization, caching strategies, and minimizing bundle sizes through tree shaking and efficient bundling.",
            ],
          },

          {
            heading: "Backend Proficiency",
            paragraphs: [],
          },

          {
            heading: "Server-Side Development",
            paragraphs: [
              "Whether using Node.js, Python with Django or Flask, Ruby on Rails, or Java with Spring Boot, backend engineers must understand request handling, routing, middleware, and business logic implementation.",
            ],
          },

          {
            heading: "Database Design and Optimization",
            paragraphs: [
              "Effective data modeling requires understanding relational database design, normalization, indexing strategies, and query optimization. Modern applications often combine SQL databases for transactional data with NoSQL solutions for flexible, scalable storage.",
            ],
          },

          {
            heading: "API Design",
            paragraphs: [
              "RESTful APIs remain popular, but GraphQL offers advantages for complex data requirements. Proper API design includes versioning strategies, comprehensive documentation, error handling, and adherence to HTTP standards.",
            ],
          },

          {
            heading: "DevOps and Deployment",
            paragraphs: [
              "Full-stack engineers increasingly embrace DevOps practices, including containerization, continuous deployment, infrastructure automation, and monitoring. Understanding cloud platforms like AWS, Azure, or Google Cloud enables efficient deployment and scaling.",
            ],
          },

          {
            heading: "The Full-stack Mindset",
            paragraphs: [
              "Beyond technical skills, full-stack engineers think holistically about problems. They consider user experience, system performance, security implications, and business requirements simultaneously. This comprehensive perspective enables them to make informed trade-offs and deliver complete solutions.",
            ],
          },
        ]}
      />
    </>
  );
}
