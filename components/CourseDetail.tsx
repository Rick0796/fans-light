import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Clock, BookOpen, Trophy, Calendar } from 'lucide-react';
import { coursesData } from '../data/courses';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const id = parseInt(courseId || '0');
  const course = coursesData[id];

  useEffect(() => {
    // Force scroll to top immediately when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <h2 className="text-3xl font-bold mb-4">课程未找到</h2>
        <Link to="/" className="text-tech-accent hover:underline">返回首页</Link>
      </div>
    );
  }

  // Note: Removed 'data-aos' from the main parent divs to ensure content is visible immediately 
  // without waiting for animation library to trigger.
  return (
    <div className="pt-20 min-h-screen pb-20">
      {/* Header */}
      <div className="relative bg-tech-dark py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/10 to-tech-dark z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-tech-purple/20 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto relative z-10 max-w-5xl">
          <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group">
            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            返回课程列表
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
            {course.title}
          </h1>
          <p className="text-xl md:text-2xl text-tech-accent font-light mb-8">
            {course.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm font-mono text-slate-300">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Clock className="w-4 h-4 text-tech-accent" />
              <span>时长: 3个月 (12周)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <BookOpen className="w-4 h-4 text-tech-accent" />
              <span>模式: 理论 + 实战</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Trophy className="w-4 h-4 text-tech-accent" />
              <span>目标: 就业/创业级技能</span>
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Content */}
      <div className="container mx-auto px-4 max-w-5xl -mt-10 relative z-20">
        <div className="space-y-12">
          {course.phases.map((phase, phaseIndex) => (
            <div 
              key={phaseIndex} 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-xl"
            >
              <div className="flex items-start md:items-center gap-4 mb-8 pb-6 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tech-blue to-tech-purple flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <span className="text-xl font-bold text-white">{phaseIndex + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{phase.name}</h3>
                  {phase.description && <p className="text-slate-400">{phase.description}</p>}
                </div>
              </div>

              <div className="grid gap-6">
                {phase.weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="bg-black/20 rounded-xl p-6 border border-white/5 hover:border-tech-accent/30 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-tech-accent" />
                      <h4 className="text-lg font-bold text-slate-200">{week.title}</h4>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-xs font-bold text-tech-blue uppercase tracking-wider mb-3">理论课程</h5>
                        <ul className="space-y-2">
                          {week.theory.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-tech-blue mt-1.5 shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-xs font-bold text-tech-purple uppercase tracking-wider mb-3">实操任务</h5>
                        <ul className="space-y-2">
                          {week.practice.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-tech-purple mt-1.5 shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full text-white font-bold text-lg shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300"
          >
            立即报名该课程
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;