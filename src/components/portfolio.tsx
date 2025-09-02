"use client";

const projects = [
  {
    id: 1,
    title: "Surprise Your Loved One",
    description:
      "A playful website designed to create random surprises, gifts, and heartfelt messages for loved ones.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    link: "https://habibi-my-love.vercel.app",
  },
  {
    id: 2,
    title: "University Church Website",
    description:
      "A modern church website with announcements, giving options, alumni support, and student ministry features.",
    image:
      "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    link: "https://mmarausda.vercel.app",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description:
      "A sleek personal portfolio website to showcase projects, skills, and achievements with modern design and animations.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    link: "https://get-up-six.vercel.app",
  },
  //   {
  //   id: 3,
  //   title: "Hymn App",
  //   description:
  //     "A multi-language hymn app with audio, notation, offline support, and projection for worship sessions.",
  //   image:
  //     "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  //   link: "#",
  // },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 animate-fade-in">
        <h1 className="text-5xl font-extrabold text-gray-900">My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Showcasing my projects, ideas, and the cool things I build with code
          and creativity.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600">{project.description}</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
