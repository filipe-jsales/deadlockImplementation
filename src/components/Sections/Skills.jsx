import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  progressData: [
    {
      id: 1,
      name: "Wordpress",
      percentage: 65,
    },
    {
      id: 2,
      name: "HTML & CSS",
      percentage: 70,
    },
    {
      id: 3,
      name: "Backend",
      percentage: 80,
    },
    {
      id: 4,
      name: "Frontend",
      percentage: 70,
    },
    {
      id: 5,
      name: "UI/UX",
      percentage: 60,
    },
    {
      id: 6,
      name: "Agile",
      percentage: 90,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
    </>
  );
}

export default Skills;
