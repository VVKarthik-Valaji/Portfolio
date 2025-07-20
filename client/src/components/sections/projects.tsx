import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { slideInUp, staggerContainer, staggerItem } from "@/lib/framer-variants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, UserRound, Code, Share2, Calendar, Database, Globe } from "lucide-react";
import { useState } from "react";
import { images } from "@/lib/images";

const ProjectCard = ({ 
  image, 
  title, 
  date, 
  description, 
  tags, 
  buttonText,
  buttonColor,
  type,
  projectUrl = "#"
}: {
  image: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  buttonText: string;
  buttonColor: string;
  type: string;
  projectUrl?: string;
}) => {
  return (
    <motion.div 
      className="project-card bg-card rounded-xl overflow-hidden shadow-lg"
      variants={staggerItem}
      whileHover={{ y: -8 }}
    >
      <div className="h-48 overflow-hidden cursor-pointer" onClick={() => window.open(projectUrl, '_blank')}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <Badge variant="outline" className="text-xs">{type}</Badge>
        </div>
        <div className="mb-4">
          <span className="text-muted-foreground text-sm">{date}</span>
        </div>
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-sm">{tag}</Badge>
          ))}
        </div>
        <Button className={`w-full ${buttonColor}`}>
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const additionalProjects = [
    {
      image: images.projects.weatherApp,
      title: "Weather Forecasting App",
      date: "2024",
      description: "Built and deployed a real-time weather forecasting application using ReactJS and OpenWeather API. Implemented dynamic routing, state management, and modular component design for scalability.",
      tags: ["ReactJS", "OpenWeather API", "Agile"],
      buttonText: "View Project Details",
      buttonColor: "bg-blue-500 hover:bg-blue-500/90 text-white",
      type: "Internship Project",
      projectUrl: "#"
    },
    {
      image: images.projects.fileTransfer,
      title: "Secure File Transfer System",
      date: "2025",
      description: "Developed a secure Java backend system for internal file transmission across ISRO departments. Created role-based authentication and user management modules to protect sensitive payload data.",
      tags: ["Java", "Spring Boot", "Security", "ISRO"],
      buttonText: "View Project Details",
      buttonColor: "bg-orange-500 hover:bg-orange-500/90 text-white",
      type: "Internship Project",
      projectUrl: "#"
    },
    {
      image: images.projects.socialMedia,
      title: "Social Media Platform",
      date: "2024",
      description: "A social media platform with features for posts, comments, likes, and follow systems. Includes real-time messaging and responsive UI design.",
      tags: ["React", "Tailwind CSS", "WebSockets", "JWT"],
      buttonText: "View Project Details",
      buttonColor: "bg-indigo-500 hover:bg-indigo-500/90 text-white",
      type: "Self-Project",
      projectUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Projects" 
          description="Here are some of the key projects I've worked on, showcasing my skills and experience in different technologies and domains."
        />
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Project 1 */}
          <ProjectCard 
            image={images.projects.doctorAppointment}
            title="Doctor Appointment Booking System"
            date="2024"
            description="Developed secure full-stack application for managing appointments with user authentication and role separation. Integrated Razorpay API for seamless payment handling, calendar sync for scheduling, and admin controls."
            tags={["MERN Stack", "JWT", "Razorpay"]}
            buttonText="View Project Details"
            buttonColor="bg-primary hover:bg-primary/90 text-primary-foreground"
            type="Team Project"
            projectUrl="https://mediai-1.onrender.com/"
          />
          
          {/* Project 2 */}
          <ProjectCard 
            image={images.projects.taskManagement}
            title="Task Management Application"
            date="2025"
            description="Developed a full-stack task management system to create, update, delete, and track daily tasks efficiently. Implemented user authentication with JWT and role-based access controls for secure multi-user environment."
            tags={["React", "Node.js", "Express", "MongoDB"]}
            buttonText="View Project Details"
            buttonColor="bg-green-500 hover:bg-green-500/90 text-white"
            type="Self-Project"
            projectUrl="#"
          />
          
          {/* Project 3 */}
          <ProjectCard 
            image={images.projects.aiCodeDebugger}
            title="AI-Powered Code Debugger"
            date="2024"
            description="Designed platform to support multiple programming languages with syntax-based analysis and bug detection. Integrated chatbot for code explanation, optimization suggestions, and performance profiling."
            tags={["React", "Python", "AI Chatbot", "OCR"]}
            buttonText="View Project Details"
            buttonColor="bg-purple-500 hover:bg-purple-500/90 text-white"
            type="Self-Project"
            projectUrl="#"
          />
        </motion.div>
        
        {/* Additional Projects */}
        {showAllProjects && (
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {additionalProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                image={project.image}
                title={project.title}
                date={project.date}
                description={project.description}
                tags={project.tags}
                buttonText={project.buttonText}
                buttonColor={project.buttonColor}
                type={project.type}
                projectUrl={project.projectUrl}
              />
            ))}
          </motion.div>
        )}
        
        <motion.div 
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={slideInUp}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="inline-flex items-center"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? "Show Less Projects" : "View More Projects"} 
            <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAllProjects ? 'rotate-90' : ''}`} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
