import { motion } from "framer-motion";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, subtitle, center = true }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    {label && (
      <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-2">
        {label}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
