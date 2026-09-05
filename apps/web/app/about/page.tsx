import { Metadata } from "next";
import HiringAbout from "../components/views/HiringAbout";
import HiringLayout from "../components/layouts/HiringLayout";

export const metadata: Metadata = {
  title: "About — Ayush Raj Yadav",
  description: "Learn more about Ayush Raj Yadav, Software Developer.",
};

export default function AboutPage() {
  return (
    <HiringLayout>
      <HiringAbout />
    </HiringLayout>
  );
}
