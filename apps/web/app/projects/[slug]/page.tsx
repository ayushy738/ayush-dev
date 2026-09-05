import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "../../data/portfolio";
import HiringProjectDetail from "../../components/views/HiringProjectDetail";
import HiringLayout from "../../components/layouts/HiringLayout";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} — Ayush Raj Yadav`,
    description: project.overview,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.id,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <HiringLayout>
      <HiringProjectDetail project={project} />
    </HiringLayout>
  );
}
