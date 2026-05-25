import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-purple-950/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with passion for AI and innovation</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chandra Reddy Mannem. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
