import { motion } from "motion/react";
import { Brain, Code, Rocket, Target } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Deep passion for Generative AI and intelligent systems",
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Building scalable applications with MERN stack",
    },
    {
      icon: Rocket,
      title: "Continuous Learner",
      description: "Always exploring cutting-edge technologies",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Creating solutions through AI and automation",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm <span className="text-white">Chandra Reddy Mannem</span>, a dedicated technology enthusiast from India,
              focused on mastering software engineering and artificial intelligence. My journey in tech is driven by
              an insatiable curiosity to understand how intelligent systems work and how they can transform the world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am continuously learning advanced technologies and building real-world projects that bridge the gap
              between theoretical knowledge and practical implementation. My expertise spans across full-stack web
              development with the MERN stack, Python programming, and cutting-edge AI technologies including Machine
              Learning, Deep Learning, and Generative AI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to become a <span className="text-purple-400">world-class AI engineer and full-stack developer</span>,
              creating intelligent applications that solve real-world problems. I'm particularly interested in Generative AI,
              Agentic AI systems, and building scalable solutions that leverage the power of modern AI technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
