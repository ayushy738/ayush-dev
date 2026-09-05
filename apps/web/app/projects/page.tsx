import { Metadata } from "next";
import HiringProjects from "../components/views/HiringProjects";
import HiringLayout from "../components/layouts/HiringLayout";

export const metadata: Metadata = {
  title: "Projects — Ayush Raj Yadav",
  description: "Explore my software development projects and portfolio.",
};

export default function ProjectsPage() {
  return (
    <HiringLayout>
      <HiringProjects />
    </HiringLayout>
  );
}
