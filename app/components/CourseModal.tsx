"use client"

import "../styles/page.css";
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react'; // Icons

// can't be asked to proper type these
interface CourseModalProps {
    data: any;
    onClose: any;
}

// A pop-up component
const CourseModal: React.FC<CourseModalProps> = ({ data , onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 1. Dark Backdrop with Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* 2. The Glassmorphic Modal Content */}
      <motion.div
        layoutId={`card-${data.id}`} // Magic layout transition
        className="relative w-full max-w-lg bg-gray-900/90 border border-blue-500/30 rounded-2xl p-6 shadow-2xl shadow-blue-500/20 overflow-hidden"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-7 right-5 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={20}/>
        </button>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{data.title}</h3>
            <p className="text-blue-400 text-sm">{data.subtitle}</p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            {data.description}
          </p>

          {/* Topics Tags */}
          <div className="flex flex-wrap gap-2">
            {data.topics.map((topic:String, i:React.Key) => (
              <span 
                key={i} 
                className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-500/20 rounded-full border border-blue-500/20"
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <div className="pt-4">
            <a 
              href={data.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
            >
              View Course Page <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CourseModal