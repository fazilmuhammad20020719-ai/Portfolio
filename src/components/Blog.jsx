import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const posts = [
  {
    title: "10 React Performance Optimization Tips",
    excerpt: "Learn how to make your React applications lightning fast with these advanced optimization techniques and best practices.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
    date: "May 15, 2026",
    author: "Admin",
    category: "React"
  },
  {
    title: "The Future of Web Design in 2026",
    excerpt: "Exploring the upcoming trends in UI/UX design, from glassmorphism to spatial computing interfaces.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    date: "Apr 22, 2026",
    author: "Admin",
    category: "Design"
  },
  {
    title: "Building Scalable APIs with Node.js",
    excerpt: "A comprehensive guide to structuring your Node.js backend for maximum scalability and maintainability.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    date: "Mar 10, 2026",
    author: "Admin",
    category: "Backend"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-32 container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Latest <span className="text-gradient">Articles</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">Insights, tutorials, and thoughts on software development and design.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="group rounded-3xl overflow-hidden glass flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                {post.category}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2BD764] transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>
              
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2BD764] hover:text-[#2BD764] transition-colors mt-auto">
                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="px-8 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/5 transition-all text-white">
          View All Posts
        </button>
      </div>
    </section>
  );
};

export default Blog;
