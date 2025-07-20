import { motion } from "framer-motion";
import { slideInUp } from "@/lib/framer-variants";

interface SectionHeadingProps {
  title: string;
  description?: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideInUp}
      className="mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold font-sans mb-2 text-center">{title}</h2>
      <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
      {description && (
        <p className="text-center max-w-2xl mx-auto text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
}
