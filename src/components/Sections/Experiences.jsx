import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2022 - Present",
    degree: "Full Stack and WordPress Developer at Webera",
    content: "Full Stack Developer at Webera ",
  },
  {
    id: 2,
    year: "2022",
    degree: "Drupal Frontend Developer at TRT8",
    content: "PAS - TRT8 - Frontend Developer",
  },
  {
    id: 3,
    year: "2018 - present",
    degree: "WordPress Freelancer",
    content: "Freelancer at Fiverr",
  },
  {
    id: 4,
    year: "2020 - present",
    degree: "Bachelor in Computer Science at UFPA",
    content:
      "Study of programming languages ​​and IT at Universidade Federal do Pará",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
