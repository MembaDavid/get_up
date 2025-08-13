"use client";

const projects = [
  {
    id: 1,
    title: "Hymn Projection App",
    description:
      "A cross-platform app for worship sessions with projection capabilities.",
    image: "https://images.unsplash.com/photo-1565562183660-62c4a72ab233?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh5bW4lMjBwcm9qZWN0aW9uJTIwYXBwfGVufDB8fDB8fHww",
    link: "#",
  },
  {
    id: 2,
    title: "AI Music Composer",
    description:
      "An AI model that learns a composer’s style and generates new music.",
    image: "https://plus.unsplash.com/premium_photo-1703617663829-ac7430988118?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWklMjBtdXNpYyUyMGNvbXBvc2VyfGVufDB8fDB8fHww",
    link: "#",
  },
  {
    id: 3,
    title: "Interactive Supermarket",
    description:
      "A 3D online shopping experience that feels like a real store.",
    image: "https://images.unsplash.com/photo-1679954570743-fadc1f2953f4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJhY3RpdmUlMjBzdXBlcm1hcmtldHxlbnwwfHwwfHx8MA%3D%3D",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 animate-fade-in">
        <h1 className="text-5xl font-extrabold text-gray-900">
          My Portfolio
        </h1>
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
