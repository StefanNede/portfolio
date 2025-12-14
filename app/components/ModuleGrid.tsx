"use client"
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react'; // Icons

// can't be asked to proper type these
interface ModuleGridProps {
    modules: Array<any>;
    setSelectedCourse: any;
}

// render a grid of modules that open to CourseModal's when clicked
const ModuleGrid: React.FC<ModuleGridProps> = ({ modules, setSelectedCourse }) => { 
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {modules.map((module) => (
          <motion.div
            key={module.id}
            layoutId={`card-${module.id}`}
            onClick={() => setSelectedCourse(module)}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            className="group cursor-pointer p-4 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-blue-500/50 transition-all backdrop-blur-sm"
          >
            <div className="flex justify-between items-start">
              <h4 className="font-semibold text-gray-200 group-hover:text-blue-200 transition-colors">
                {module.title}
              </h4>
              <ChevronRight size={16} className="text-gray-600 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>
        ))
        }
      </div>
    )
  }

export default ModuleGrid