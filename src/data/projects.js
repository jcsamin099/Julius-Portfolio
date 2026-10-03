import schoolProjectImage from "../assets/projects/School-Project.png";
import iconClubImage from "../assets/projects/Icon-Club.png";

export const projects = [
  {
    id: 1,
    title: "School Portal System",
    description:
      "A school portal system designed to provide a centralized platform for managing school-related information, with a basic accounting component.",
    image: schoolProjectImage,
    technologies: ["Next JS", "JavaScript", "Tailwind CSS", "Node JS", "Express JS", "MongoDB"],
    github: "https://github.com/jcsamin099/CCIS-School-Management-System.git",
    demo: "https://ccis-school-management-system.vercel.app/",
  },
  {
    id: 2,
    title: "CIC Club and Organization Landing Page",
    description:
      "A modern landing page for the CIC Club and Organization, showcasing their events, activities, and mission.",
    image: iconClubImage,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/jcsamin099/Icon-Club",
    demo: "https://icon-club.vercel.app/",
  }
];