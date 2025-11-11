import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: 'Нейронные сети',
      description: 'Эксперименты с глубоким обучением',
      tech: 'Python, TensorFlow',
      link: '#'
    },
    {
      title: 'Веб-платформа',
      description: 'Современные веб-приложения',
      tech: 'React, TypeScript',
      link: '#'
    },
    {
      title: 'Визуализация данных',
      description: 'Интерактивные визуализации',
      tech: 'D3.js, WebGL',
      link: '#'
    },
    {
      title: 'API дизайн',
      description: 'RESTful архитектура',
      tech: 'Node.js, GraphQL',
      link: '#'
    }
  ];

  const socials = [
    { name: 'GitHub', icon: 'Github', link: 'https://github.com' },
    { name: 'Twitter', icon: 'Twitter', link: 'https://twitter.com' },
    { name: 'LinkedIn', icon: 'Linkedin', link: 'https://linkedin.com' },
    { name: 'Email', icon: 'Mail', link: 'mailto:hello@example.com' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15), transparent 40%)`
        }}
      />

      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <div className={`font-heading font-bold text-xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <span className="text-gradient">портфолио</span>
            </div>
            <div className={`flex gap-6 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <a href="#work" className="hover:text-primary transition-colors duration-300">Работы</a>
              <a href="#about" className="hover:text-primary transition-colors duration-300">Обо мне</a>
              <a href="#contact" className="hover:text-primary transition-colors duration-300">Контакты</a>
            </div>
          </nav>
        </header>

        <main className="pt-32 px-6 pb-20">
          <section className="max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
            <div className={`space-y-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter">
                <span className="block text-gradient hover-glow cursor-default">Hello</span>
              </h1>
              <p className={`text-muted-foreground text-lg md:text-xl max-w-2xl transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                Создаю цифровые продукты на стыке дизайна и кода. 
                Специализируюсь на современных веб-технологиях и креативных решениях.
              </p>
            </div>

            <div className={`mt-12 flex gap-4 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <a 
                href="#work" 
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              >
                <span className="flex items-center gap-2">
                  Смотреть работы
                  <Icon name="ArrowRight" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-border rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary"
              >
                Связаться
              </a>
            </div>
          </section>

          <section id="work" className="max-w-7xl mx-auto mt-32 scroll-mt-24">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-16">
              Избранные <span className="text-gradient">работы</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  className="group relative p-8 rounded-2xl bg-card border border-border transition-all duration-500 hover:scale-[1.02] hover:border-primary hover:shadow-xl hover:shadow-primary/10"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'backwards'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-heading font-bold text-2xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Icon 
                        name="ArrowUpRight" 
                        className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                      />
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(', ').map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section id="about" className="max-w-7xl mx-auto mt-32 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                  Обо <span className="text-gradient">мне</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Я разработчик, который любит создавать красивые и функциональные веб-проекты. 
                    Фокусируюсь на современных технологиях и чистом коде.
                  </p>
                  <p>
                    Когда не занимаюсь кодингом, изучаю новые технологии, 
                    участвую в open source проектах и делюсь знаниями с сообществом.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary/20 animate-glow" />
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="max-w-7xl mx-auto mt-32 scroll-mt-24">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-center">
              Давайте <span className="text-gradient">познакомимся</span>
            </h2>
            <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
              Есть проект или просто хотите пообщаться? Пишите через любую из этих платформ.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
                >
                  <Icon name={social.icon} className="w-5 h-5 transition-colors duration-300 group-hover:text-primary" />
                  <span className="font-medium transition-colors duration-300 group-hover:text-primary">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-32 py-8 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground">
            <p>© 2024 Портфолио. Сделано с любовью.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;