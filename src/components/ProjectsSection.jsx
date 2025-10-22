import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "My profile",
    description:
      "A profile page displaying personal details, background, and contact created app using React and Tailwind",
    image: "/project1.jpg",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "https://github.com/cred7",
  },
  {
    id: 2,
    title: "SaaS landing page",
    description: "A back end authentication service created using express.js",
    image: "/project2.jpg",
    tags: ["Express.js"],
    demoUrl: "https://github.com/cred7",
    githubUrl: "https://github.com/cred7",
  },
  {
    id: 3,
    title: "SaaS landing page",
    description: "A  functional website for Gor mahia Football club",
    image: "/project3.jpg",
    tags: ["TailwindCSS", "Next", "postgresql"],
    demoUrl: "https://github.com/cred7",
    githubUrl: "https://github.com/cred7",
  },
];
export const ProjectsSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>
        {/* <span className="text-background">span</span>
        <br />
        <span className="text-foreground">span</span>
        <br />
        <span className="text-primary">span</span>
        <br />
        <span className="text-primary-foreground">span</span>
        <br /> */}
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          repellendus facilis provident sapiente et ?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 mx-2 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
                <p className="text-muted-foregroun text-sm mb-4">
                  {proj.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/cred7"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
