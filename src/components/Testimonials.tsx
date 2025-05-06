import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, avatar }) => {
  return (
    <div className="card p-6 flex flex-col h-full">
      <div className="text-primary-500 mb-4">
        <Quote size={24} />
      </div>
      <p className="flex-grow mb-4 text-neutral-700">{content}</p>
      <div className="flex items-center mt-auto">
        {avatar ? (
          <img src={avatar} alt={author} className="w-10 h-10 rounded-full mr-3" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <span className="text-primary-700 font-medium">{author.charAt(0)}</span>
          </div>
        )}
        <div>
          <p className="font-medium text-neutral-800">{author}</p>
          <p className="text-sm text-neutral-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Cursor has completely transformed my development workflow. I can prototype features in half the time it used to take me. The AI suggestions are surprisingly accurate.",
      author: "Alex Morgan",
      role: "Senior Frontend Developer",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "I was skeptical about AI code editors, but Cursor changed my mind. It feels like pair programming with an expert who understands my codebase. Game changer.",
      author: "Nia Johnson",
      role: "Full Stack Engineer",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "Our team's productivity has increased significantly since adopting Cursor. The ability to ask questions about the codebase and get instant, contextual answers is invaluable.",
      author: "James Chen",
      role: "CTO, TechStart Inc.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "As someone learning to code, Cursor has been an incredible learning tool. It helps me understand code patterns and suggests improvements that have accelerated my learning curve.",
      author: "Sophia Garcia",
      role: "Computer Science Student",
      avatar: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "I've tried many AI coding tools, but Cursor stands out with its impressive understanding of complex codebases. It's become essential for maintaining our legacy systems.",
      author: "David Kim",
      role: "Lead Backend Developer",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "The refactoring capabilities alone make Cursor worth it. What used to take days now takes hours. Our code quality has improved dramatically as a result.",
      author: "Emma Wilson",
      role: "Software Architect",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-100 rounded-full opacity-40"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4">Loved by developers <span className="text-gradient">worldwide</span></h2>
          <p className="text-lg">
            Join thousands of developers and teams who are shipping better code, faster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;