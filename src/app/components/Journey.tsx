import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Journey() {
  const milestones = [
    {
      phase: "Web Development",
      description: "Mastered HTML, CSS, JavaScript, and modern frontend frameworks",
      status: "completed",
    },
    {
      phase: "Python",
      description: "Built strong foundation in Python programming and scripting",
      status: "completed",
    },
    {
      phase: "Machine Learning",
      description: "Learned ML algorithms, data preprocessing, and model training",
      status: "completed",
    },
    {
      phase: "Deep Learning",
      description: "Exploring Neural Networks, NLP, and Computer Vision",
      status: "in-progress",
    },
    {
      phase: "AI",
      description: "Building intelligent systems and AI-powered applications",
      status: "in-progress",
    },
    {
      phase: "Generative AI",
      description: "Working with LLMs, prompt engineering, and generative models",
      status: "in-progress",
    },
    {
      phase: "Agentic AI",
      description: "Creating autonomous AI agents and multi-agent systems",
      status: "upcoming",
    },
  ];

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Learning Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500/20" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-4 border-background z-10">
                    {milestone.status === "completed" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white">{milestone.phase}</h3>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          milestone.status === "completed"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : milestone.status === "in-progress"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        }`}>
                          {milestone.status === "completed" ? "Completed" : milestone.status === "in-progress" ? "In Progress" : "Upcoming"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
