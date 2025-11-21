import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Course {
  id: number;
  title: string; // Chinese Title
  enTitle: string; // English Title
  description: string;
  iconClass: string;
  image: string;
  color: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "直播运营",
    enTitle: "LIVE STREAMING",
    description: "致力于系统化培养学员掌握直播电商领域的全链路运营能力。涵盖直播行业生态分析、账号定位、自然流打法、付费投流及数据复盘。",
    iconClass: "fa-solid fa-microphone-lines",
    // Updated Image: Neon Microphone Setup (Tech/Studio Theme)
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 2,
    title: "人工智能从入门到精通",
    enTitle: "ARTIFICIAL INTELLIGENCE",
    description: "驾驭未来生产力工具。从Prompt工程到Midjourney绘图，再到AI视频生成，全面掌握AIGC核心技能，重塑创作思维。",
    iconClass: "fa-solid fa-robot",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "短视频创作",
    enTitle: "SHORT VIDEO CREATION",
    description: "从0到1打造爆款账号。精通脚本策划、手机/相机拍摄运镜、剪映/PR后期剪辑及账号运营变现全流程。",
    iconClass: "fa-solid fa-clapperboard",
    // Updated Image: High quality, reliable Camera Lens image
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 4,
    title: "跨境电商",
    enTitle: "CROSS-BORDER E-COMMERCE",
    description: "连接全球市场。深入学习Amazon、TikTok Shop等平台规则，掌握选品策略、物流仓储及海外数字营销推广。",
    iconClass: "fa-solid fa-earth-americas",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "from-orange-500 to-amber-500"
  },
  {
    id: 5,
    title: "店铺运营",
    enTitle: "STORE OPERATIONS",
    description: "精通国内电商生态。涵盖淘宝/京东/拼多多/抖店等主流平台，从店铺搭建、视觉装修到流量获取与转化率优化。",
    iconClass: "fa-solid fa-store",
    // Stable Retail Store image
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "from-emerald-500 to-teal-500"
  }
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-24 relative bg-tech-dark">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tech-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-tech-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              实操课程
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-tech-accent mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            紧跟行业风向，精选五大核心领域，打造“技能+实战+思维”三位一体的课程体系。
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-tech-accent/50 transition-all duration-500 shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay for Readability - Restored to Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-tech-dark via-tech-dark/80 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                {/* Color Tint on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-500`}></div>
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-lg text-white`}>
                      <i className={`${course.iconClass} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">{course.enTitle}</h4>
                      <h3 className="text-2xl font-bold text-white group-hover:text-tech-accent transition-colors">{course.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 border-l-2 border-white/20 pl-4">
                    {course.description}
                  </p>

                  <Link 
                    to={`/course/${course.id}`}
                    className="inline-flex items-center gap-2 text-white font-bold border-b border-tech-accent pb-1 hover:text-tech-accent transition-all"
                  >
                    <span>查看课程详情</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
