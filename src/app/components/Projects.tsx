import { motion } from "motion/react";
import { Github, ExternalLink, Bot, Globe, Brain, Sparkles, User } from "lucide-react";

export function Projects() {
  const projects = [
    {
      icon: Bot,
      title: "AI Chatbot Application",
      description: "Intelligent conversational AI powered by advanced NLP models, capable of understanding context and providing human-like responses.",
      technologies: ["Python", "NLP", "Streamlit", "OpenAI API"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "MERN Stack Web Application",
      description: "Full-stack web application with React frontend, Node.js backend, and MongoDB database. Features authentication and real-time updates.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "Machine Learning Prediction System",
      description: "Predictive analytics system using advanced ML algorithms for data-driven insights and forecasting with high accuracy.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "Generative AI Assistant",
      description: "AI-powered assistant leveraging generative models for content creation, code generation, and creative problem-solving.",
      technologies: ["Python", "Generative AI", "LangChain", "Vector DB"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: User,
      title: "AI-Powered Portfolio Website",
      description: "Modern portfolio website with AI-driven features, dynamic content generation, and interactive user experiences.",
      technologies: ["React", "Tailwind CSS", "Motion", "AI Integration"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="mb-3 text-white">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-white/10 rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
