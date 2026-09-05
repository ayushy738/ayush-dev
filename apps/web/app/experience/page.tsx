import { Metadata } from "next";
import HiringExperience from "../components/views/HiringExperience";
import HiringLayout from "../components/layouts/HiringLayout";

export const metadata: Metadata = {
  title: "Experience — Ayush Raj Yadav",
  description: "Work experience and professional background of Ayush Raj Yadav.",
};

export default function ExperiencePage() {
  return (
    <HiringLayout>
      <HiringExperience />
    </HiringLayout>
  );
}
