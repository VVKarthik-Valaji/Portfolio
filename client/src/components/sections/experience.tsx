import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { slideInUp, staggerContainer, staggerItem } from "@/lib/framer-variants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Trophy, Code, Github } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" />
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="relative timeline pl-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Experience Item 1 */}
            <motion.div 
              className="mb-12 relative timeline-item"
              variants={staggerItem}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <h3 className="text-xl font-semibold text-primary">Satish Dhawan Space Centre SHAR (SDSC SHAR), ISRO</h3>
                    <Badge className="mt-2 sm:mt-0 bg-primary/10 text-primary hover:bg-primary/20">Feb 2025 - Apr 2025</Badge>
                  </div>
                  <h4 className="text-lg font-medium mb-3">Intern</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <span>Developed a secure Java backend system for internal file transmission across ISRO departments.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <span>Created role-based authentication and user management modules to protect sensitive payload data.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <span>Engineered and deployed APIs with proper validation, logging, and error-handling mechanisms.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <span>Reduced internal communication latency by 35% through optimization of backend request logic.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <span>Collaborated with a cross-functional team of engineers, improving backend reliability and demonstrating strong communication in a high-stakes environment.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Experience Item 2 */}
            <motion.div 
              className="relative timeline-item"
              variants={staggerItem}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <h3 className="text-xl font-semibold text-purple-500">Academor</h3>
                    <Badge className="mt-2 sm:mt-0 bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">Feb 2024 - Mar 2024</Badge>
                  </div>
                  <h4 className="text-lg font-medium mb-3">Web Development Intern</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <span>Built and deployed a real-time weather forecasting application using ReactJS and OpenWeather API.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <span>Implemented dynamic routing, state management, and modular component design for scalability.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <span>Followed Agile practices, maintained clean code, and actively contributed to a collaborative Git-based team workflow.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <span>Participated in daily standups and sprint reviews, showcasing effective team coordination and communication skills.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInUp}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Extra-Curricular Achievements</h3>
          
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex items-center justify-center mb-6 md:mb-0">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                  <Trophy className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h4 className="text-xl font-semibold mb-3 flex items-center">
                  <Badge className="mr-2 bg-primary">1st Prize</Badge>
                  Agentica Hackathon Winner
                </h4>
                <p className="text-muted-foreground mb-4">
                  Secured first prize  among 200+ competing teams.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <span>Designed and developed Vidya++, a cutting-edge student management platform integrated with AI/ML technologies.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <span>Demonstrated real-time academic analytics, student profiling, and intelligent resource allocation capabilities.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <span>Recognized for technical depth, innovation, and scalability by industry evaluators and academic judges.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
                    <Code className="h-6 w-6 text-purple-500" />
                  </div>
                  <h4 className="text-lg font-semibold">Hackathon Participation</h4>
                </div>
                <p className="text-muted-foreground">
                  Participated in a Hackathon among 400 students, showcasing innovative problem-solving and advanced technical proficiency.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <Github className="h-6 w-6 text-green-500" />
                  </div>
                  <h4 className="text-lg font-semibold">Open-Source Contribution</h4>
                </div>
                <p className="text-muted-foreground">
                  Active Open-Source Contributor – Significantly enhanced multiple GitHub repositories and contributed to projects in the domains of artificial intelligence and full-stack web development.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
