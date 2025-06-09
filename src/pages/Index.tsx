
import { Github, Mail, Download, MapPin, Code, Database, Wrench, BookOpen, Award, ExternalLink, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = {
    technical: ["Python", "C", "Linux (basic)", "DSA", "HTML", "CSS", "JavaScript", "MySQL"],
    tools: ["Arduino", "Blynk", "Jupyter", "VS Code"],
    soft: ["Content Writing", "Digital Marketing", "Team Management"]
  };

  const projects = [
    {
      title: "Smart Plant Monitoring System",
      description: "An IoT system using Blynk and Arduino to monitor plant health in real-time.",
      technologies: ["Arduino", "Blynk", "IoT", "C++"],
      github: "https://github.com/simichakma/smart-plant-monitoring"
    },
    {
      title: "DeepFake Detection",
      description: "A Python-based AI model for identifying deepfake media using machine learning.",
      technologies: ["Python", "Machine Learning", "OpenCV", "TensorFlow"],
      github: "https://github.com/simichakma/deepfake-detection"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website built with modern web technologies.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/simichakma/portfolio"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold gradient-text">Simi Chakma</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Profile Image with enhanced styling */}
            <div className="relative mx-auto mb-12 group">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-primary via-blue-500 to-primary p-1 shadow-2xl shadow-primary/20 transition-all duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-card to-muted flex items-center justify-center text-4xl font-bold text-primary relative overflow-hidden">
                  <span className="relative z-10">SC</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-background rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Typography */}
            <div className="space-y-6 mb-12">
              <div className="space-y-2">
                <p className="text-lg md:text-xl text-primary font-medium tracking-wide animate-fade-in">
                  Hello, I'm
                </p>
                <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-fade-in delay-200">
                  <span className="gradient-text">Simi Chakma</span>
                </h1>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-light text-muted-foreground animate-fade-in delay-300">
                Aspiring <span className="text-primary font-semibold">Computer Science Engineer</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
                Turning ideas into tech solutions with <span className="text-primary font-medium">IoT</span>, 
                <span className="text-primary font-medium"> Machine Learning</span>, and innovative code.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in delay-700">
              <Button className="bg-primary hover:bg-primary/80 text-primary-foreground px-10 py-4 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 group">
                <span className="mr-2">Let's Work Together</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 group">
                <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Download Resume
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center space-x-8 animate-fade-in delay-1000">
              <a href="https://github.com/simichakma" 
                 className="group relative p-4 rounded-full bg-card/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub Profile
                </span>
              </a>
              <a href="mailto:simichakma139@gmail.com" 
                 className="group relative p-4 rounded-full bg-card/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Send Email
                </span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="w-6 h-6 text-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm a Computer Science student with hands-on experience in IoT and ML projects. 
                  I enjoy developing innovative tech solutions and continuously learning new technologies. 
                  Currently in my final year at Primeasia University, I'm passionate about creating 
                  meaningful impact through technology.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Banani, Dhaka</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span>Languages: English, Bangla</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span>B.Tech in CSE - Final Year</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span>CGPA: 3.08</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-6 h-6 text-primary" />
                  <span>Technical Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wrench className="w-6 h-6 text-primary" />
                  <span>Tools & Platforms</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="w-6 h-6 text-primary" />
                  <span>Soft Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card key={project.title} className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Contact me</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
                <CardDescription>
                  Ready to work on your projects and bring your ideas to life. 
                  Let's start a nice chat!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Email Address</p>
                    <a href="mailto:simichakma139@gmail.com" className="text-primary hover:underline">
                      simichakma139@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Banani, Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="text-center pt-6">
                  <Button className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3" asChild>
                    <a href="mailto:simichakma139@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Simi Chakma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
