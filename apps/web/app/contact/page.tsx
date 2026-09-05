import { Metadata } from "next";
import HiringContact from "../components/views/HiringContact";
import HiringLayout from "../components/layouts/HiringLayout";

export const metadata: Metadata = {
  title: "Contact — Ayush Raj Yadav",
  description: "Get in touch with Ayush Raj Yadav for opportunities or collaborations.",
};

export default function ContactPage() {
  return (
    <HiringLayout>
      <HiringContact />
    </HiringLayout>
  );
}
