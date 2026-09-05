import { Metadata } from "next";
import IDEShell from "../components/IDEShell";
import { IDEProvider } from "../context/IDEContext";

export const metadata: Metadata = {
  title: "Dev Mode — Ayush Raj Yadav",
  description: "Explore the developer environment of Ayush Raj Yadav.",
};

export default function DevModePage() {
  return (
    <IDEProvider>
      <IDEShell />
    </IDEProvider>
  );
}
