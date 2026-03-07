import { useEffect, useState } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Mail, 
  MapPin, 
  ExternalLink,
  Github,
  Linkedin,
  ChevronDown,
  Sparkles,
  Zap,
  Shield,
  CreditCard,
  Server,
  Cpu,
  Layout,
  Terminal,
  ArrowRight,
  Menu,
  X,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  const skills = [
    { name: 'PHP', icon: <Terminal className="w-5 h-5" /> },
    { name: 'JavaScript', icon: <Code2 className="w-5 h-5" /> },
    { name: 'React', icon: <Layout className="w-5 h-5" /> },
    { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
    { name: 'Laravel', icon: <Layers className="w-5 h-5" /> },
    { name: 'Tailwind CSS', icon: <Sparkles className="w-5 h-5" /> },
    { name: 'MySQL', icon: <Database className="w-5 h-5" /> },
    { name: 'PostgreSQL', icon: <Database className="w-5 h-5" /> },
    { name: 'WordPress', icon: <Globe className="w-5 h-5" /> },
    { name: 'WooCommerce', icon: <CreditCard className="w-5 h-5" /> },
    { name: 'APIs REST', icon: <Zap className="w-5 h-5" /> },
    { name: 'Git', icon: <Cpu className="w-5 h-5" /> },
  ];

  const experiences = [
    {
      title: 'Desenvolvedor Júnior',
      company: 'Link Nacional',
      period: 'Abril 2024 - Presente',
      location: 'Remoto',
      description: 'Desenvolvimento e manutenção de plugins de pagamento para WordPress, compatíveis com WooCommerce e GiveWP.',
      achievements: [
        'Integração com APIs bancárias: Cielo, Rede e MaxiPago',
        'Mais de 1.000 instalações ativas dos plugins',
        'API em Laravel para validação de licenças de plugins pagos',
        'Aumento da eficiência nas integrações e satisfação dos usuários'
      ],
      techs: ['PHP', 'JavaScript', 'Laravel', 'React', 'Tailwind']
    },
    {
      title: 'Estagiário de TI',
      company: 'SUTIC - Prefeitura de São Vicente',
      period: 'Abril 2023 - Dezembro 2023',
      location: 'São Vicente, SP',
      description: 'Suporte técnico e manutenção de infraestrutura de TI.',
      achievements: [
        'Suporte técnico a usuários',
        'Instalação e configuração de softwares',
        'Manutenção de computadores e rede interna',
        'Desenvolvimento de habilidades em resolução de problemas'
      ],
      techs: ['Suporte Técnico', 'Redes', 'Hardware']
    }
  ];

  const projects = [
    {
      title: 'Gateway Pagamento Cielo',
      description: 'Plugin completo de pagamento para WooCommerce com integração à API 3.0 da Cielo. Suporta PIX, cartões de crédito/débito e parcelamentos.',
      highlights: [
        'API Cielo 3.0 integrada',
        'Suporte PIX, crédito e débito',
        'Parcelamentos configuráveis',
        'Ambiente sandbox/produção'
      ],
      techs: ['PHP', 'JavaScript', 'WordPress', 'WooCommerce', 'API Cielo'],
      icon: <CreditCard className="w-8 h-8" />,
      link: 'https://github.com/LinkNacional/wc_cielo_payment_gateway'
    },
    {
      title: 'Gateway Pagamento Rede',
      description: 'Plugin de pagamento para WooCommerce integrado com E-Rede Itaú e MaxiPago. Aceita PIX, cartões e oferece webhooks para notificações.',
      highlights: [
        'Integração E-Rede Itaú + MaxiPago',
        'PIX, crédito e débito',
        'Webhooks para notificações',
        'Tokenização de cartões'
      ],
      techs: ['PHP', 'JavaScript', 'WordPress', 'WooCommerce', 'API Rede', 'API MaxiPago'],
      icon: <CreditCard className="w-8 h-8" />,
      link: 'https://github.com/LinkNacional/integration-rede-for-woocommerce'
    },
    {
      title: 'Verificador de Domínios RDAP',
      description: 'Plugin moderno para verificação de disponibilidade de domínios usando protocolo RDAP. Inclui blocos Gutenberg e validação TLD oficial.',
      highlights: [
        'Protocolo RDAP moderno',
        'Validação TLD oficial IANA',
        'Blocos Gutenberg avançados',
        'Cache inteligente'
      ],
      techs: ['PHP', 'JavaScript', 'WordPress', 'WooCommerce', 'API RDAP'],
      icon: <Globe className="w-8 h-8" />,
      link: 'https://github.com/LinkNacional/owh-domain-whois-rdap'
    },
    {
      title: 'Sistema de Faturas e Assinaturas',
      description: 'Plugin completo para gerenciamento de faturas recorrentes e one-time. Gera PDFs, links de pagamento e integra com múltiplos gateways.',
      highlights: [
        'Faturas recorrentes automáticas',
        'Geração de PDFs profissionais',
        'Links de pagamento seguros',
        'Múltiplos métodos de pagamento'
      ],
      techs: ['PHP', 'JavaScript', 'WordPress', 'WooCommerce'],
      icon: <Layers className="w-8 h-8" />,
      link: 'https://github.com/LinkNacional/woocommerce-invoice-payment'
    },
    {
      title: 'Detecção Anti-Fraude',
      description: 'Plugin de segurança para WooCommerce com integração Google reCAPTCHA. Previne fraudes e transações maliciosas no checkout.',
      highlights: [
        'Integração Google reCAPTCHA',
        'Pontuação anti-fraude configurável',
        'Bloqueio automático de suspeitos',
        'Logs detalhados de tentativas'
      ],
      techs: ['PHP', 'JavaScript', 'WordPress', 'WooCommerce', 'API Google reCAPTCHA'],
      icon: <Shield className="w-8 h-8" />,
      link: 'https://github.com/LinkNacional/fraud-scam-detection-woocommerce'
    },
    {
      title: 'Multi-Moeda para GiveWP',
      description: 'Plugin de conversão de moedas para GiveWP que permite doações internacionais. Converte automaticamente moedas estrangeiras para BRL com taxas em tempo real.',
      highlights: [
        'Conversão automática de moedas',
        'Taxas de câmbio em tempo real',
        'Suporte a múltiplas moedas',
        'Integração PayPal Commerce'
      ],
      techs: ['PHP', 'JavaScript', 'WordPress', 'GiveWP'],
      icon: <Database className="w-8 h-8" />,
      link: 'https://github.com/LinkNacional/give-multimoeda'
    }
  ];

  const education = [
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'FATEC',
      year: '2023',
      description: 'Formação superior em desenvolvimento de software, com foco em programação, banco de dados e engenharia de software.'
    },
    {
      degree: 'Técnico em Desenvolvimento de Sistemas',
      institution: 'ETEC',
      year: '2020',
      description: 'Formação técnica com base sólida em lógica de programação, desenvolvimento web e banco de dados.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-background/80 backdrop-blur-lg border-b border-border py-3' : 'py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-purple-400" />
            <span className="text-lg font-bold">Guilherme Friedrich</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#habilidades" className="text-sm text-muted-foreground hover:text-primary transition-colors">Habilidades</a>
            <a href="#experiencia" className="text-sm text-muted-foreground hover:text-primary transition-colors">Experiência</a>
            <a href="#projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projetos</a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#sobre" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#habilidades" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Habilidades
              </a>
              <a 
                href="#experiencia" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experiência
              </a>
              <a 
                href="#projetos" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projetos
              </a>
              <a 
                href="#contato" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Redesigned */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Floating code elements */}
          <div className="absolute top-32 right-20 text-purple-500/20 text-6xl font-mono animate-float" style={{ animationDelay: '0s' }}>{'</>'}</div>
          <div className="absolute bottom-40 left-20 text-cyan-500/20 text-5xl font-mono animate-float" style={{ animationDelay: '0.5s' }}>{'{ }'}</div>
          <div className="absolute top-1/3 left-1/4 text-violet-500/15 text-4xl font-mono animate-float" style={{ animationDelay: '1s' }}>{'[ ]'}</div>
        </div>

        <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className={`transition-all duration-700 ${isVisible('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Desenvolvedor Full-Stack</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Guilherme</span>
                <br />
                <span className="gradient-text">Friedrich</span>
                <br />
                <span className="text-foreground">Sousa</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Desenvolvedor Full-Stack especializado em <span className="text-purple-400">integrações de pagamento</span> e <span className="text-cyan-400">soluções web modernas</span>. 
                Mais de <strong className="text-foreground">1.000 usuários ativos</strong> nos sistemas que desenvolvi.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0" asChild>
                  <a href="#contato">
                    <Mail className="w-4 h-4 mr-2" />
                    Entre em contato
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10" asChild>
                  <a href="#projetos">
                    <Code2 className="w-4 h-4 mr-2" />
                    Ver projetos
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10" asChild>
                  <a href="/Currículo Guilherme Friedrich Sousa.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Baixar Currículo
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold gradient-text">1.000+</div>
                  <div className="text-sm text-muted-foreground">Instalações ativas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">2+</div>
                  <div className="text-sm text-muted-foreground">Anos de experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-muted-foreground">Tecnologias</div>
                </div>
              </div>
            </div>

            {/* Right content - Code snippet card */}
            <div className={`hidden lg:block transition-all duration-700 delay-200 ${isVisible('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl" />
                
                {/* Code card */}
                <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                  {/* Window header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-4 text-xs text-muted-foreground font-mono">guilherme.dev</span>
                  </div>
                  
                  {/* Code content */}
                  <div className="p-6 font-mono text-sm">
                    <div className="space-y-2">
                      <div className="flex">
                        <span className="text-purple-400 w-6">1</span>
                        <span><span className="text-purple-400">const</span> <span className="text-cyan-400">dev</span> = {'{'}</span>
                      </div>
                      <div className="flex">
                        <span className="text-muted-foreground w-6">2</span>
                        <span className="pl-4"><span className="text-green-400">nome</span>: <span className="text-yellow-300">'Guilherme'</span>,</span>
                      </div>
                      <div className="flex">
                        <span className="text-muted-foreground w-6">3</span>
                        <span className="pl-4"><span className="text-green-400">stack</span>: [<span className="text-yellow-300">'PHP'</span>, <span className="text-yellow-300">'React'</span>, <span className="text-yellow-300">'Node'</span>],</span>
                      </div>
                      <div className="flex">
                        <span className="text-muted-foreground w-6">4</span>
                        <span className="pl-4"><span className="text-green-400">especialidade</span>: <span className="text-yellow-300">'Integrações de Pagamento'</span>,</span>
                      </div>
                      <div className="flex">
                        <span className="text-muted-foreground w-6">5</span>
                        <span className="pl-4"><span className="text-green-400">disponivel</span>: <span className="text-orange-400">true</span></span>
                      </div>
                      <div className="flex">
                        <span className="text-purple-400 w-6">6</span>
                        <span>{'}'};</span>
                      </div>
                      <div className="flex">
                        <span className="text-muted-foreground w-6">7</span>
                        <span></span>
                      </div>
                      <div className="flex">
                        <span className="text-purple-400 w-6">8</span>
                        <span><span className="text-cyan-400">dev</span>.<span className="text-blue-400">criarSolucoes</span>();</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg px-3 py-2 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs">Disponível para projetos</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg px-4 py-3 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Zap className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                      <div className="text-sm font-semibold">Otimizado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#sobre" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className={`transition-all duration-700 ${isVisible('sobre') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">Sobre mim</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Desenvolvedor com <span className="gradient-text">foco em resultados</span>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Sou um desenvolvedor apaixonado por criar soluções que realmente fazem a diferença. 
                  Com experiência sólida em desenvolvimento de plugins para WordPress e integrações 
                  de pagamento, desenvolvi plugins que hoje atendem mais de <strong className="text-purple-400">1.000 usuários ativos</strong>.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Domino tanto tecnologias backend (PHP, Laravel, Node.js) quanto frontend (React, JavaScript), 
                  com experiencia em APIs REST, arquiteturas modernas e integrações complexas. 
                  Busco constantemente aplicar as melhores práticas em projetos desafiadores.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-purple-500/30 transition-colors">
                    <div className="text-3xl font-bold gradient-text mb-1">1.000+</div>
                    <div className="text-sm text-muted-foreground">Instalações ativas</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-purple-500/30 transition-colors">
                    <div className="text-3xl font-bold gradient-text mb-1">2+</div>
                    <div className="text-sm text-muted-foreground">Anos de experiência</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-6 hover:border-purple-500/30 hover:-translate-y-1 transition-all animate-float">
                  <Code2 className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="font-semibold mb-2">Clean Code</h3>
                  <p className="text-sm text-muted-foreground">Código limpo e bem estruturado</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-cyan-500/30 hover:-translate-y-1 transition-all animate-float" style={{ animationDelay: '0.5s' }}>
                  <Zap className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="font-semibold mb-2">Performance</h3>
                  <p className="text-sm text-muted-foreground">Otimização e eficiência</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-purple-500/30 hover:-translate-y-1 transition-all animate-float" style={{ animationDelay: '1s' }}>
                  <Shield className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="font-semibold mb-2">Segurança</h3>
                  <p className="text-sm text-muted-foreground">Boas práticas de segurança</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-cyan-500/30 hover:-translate-y-1 transition-all animate-float" style={{ animationDelay: '1.5s' }}>
                  <Layers className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="font-semibold mb-2">Arquitetura</h3>
                  <p className="text-sm text-muted-foreground">Design patterns e SOLID</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/5 to-background" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className={`transition-all duration-700 ${isVisible('habilidades') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Habilidades</span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stack <span className="gradient-text">Tecnológica</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tecnologias que utilizo no dia a dia para criar soluções robustas e escaláveis
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <Card 
                  key={skill.name}
                  className="bg-card border-border hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{skill.name}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-700 ${isVisible('experiencia') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Experiência</span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trajetória <span className="gradient-text">Profissional</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Minha jornada no desenvolvimento de software
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card border-border overflow-hidden hover:border-purple-500/20 transition-colors">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                          <BriefcaseIcon className="w-8 h-8 text-purple-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">{exp.period}</Badge>
                        </div>
                        
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          <span className="font-medium text-foreground">{exp.company}</span>
                          <span>•</span>
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Zap className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.techs.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-purple-500/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className={`transition-all duration-700 ${isVisible('projetos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Projetos</span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Projetos em <span className="gradient-text">Destaque</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Soluções que desenvolvi e que estão em produção
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-card border-border overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-400">
                        {project.icon}
                      </div>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="transition-opacity"
                      >
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      </a>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="transition-all duration-700 opacity-100 translate-y-0">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Formação</span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Educação <span className="gradient-text">Acadêmica</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card border-border hover:border-purple-500/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-purple-500/10">
                        <GraduationIcon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold">{edu.degree}</h3>
                          <Badge variant="outline" className="text-xs border-purple-500/30">{edu.year}</Badge>
                        </div>
                        <p className="text-purple-400 text-sm mb-2">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-background to-background" />
        
        <div className="max-w-4xl mx-auto relative">
          <div className={`transition-all duration-700 ${isVisible('contato') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Contato</span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vamos <span className="gradient-text">conversar</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estou aberto a novas oportunidades e parcerias. Entre em contato!
              </p>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <a 
                    href="https://wa.me/5513981855959" target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="p-4 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors mb-4">
                      <PhoneIcon className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-sm">Telefone</span>
                    <span className="text-xs text-muted-foreground mt-1">(13) 98185-5959</span>
                  </a>

                  <a 
                    href="mailto:guilhermefriedrichsousa@gmail.com" 
                    className="flex flex-col items-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="p-4 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors mb-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-sm">E-mail</span>
                    <span className="text-xs text-muted-foreground mt-1">guilhermefriedrichsousa@gmail.com</span>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/guilhermefriedrich/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="p-4 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors mb-4">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-sm">LinkedIn</span>
                    <span className="text-xs text-muted-foreground mt-1">Ver perfil</span>
                  </a>

                  <a 
                    href="https://github.com/GuilhermeFriedrichS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="p-4 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors mb-4">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-sm">GitHub</span>
                    <span className="text-xs text-muted-foreground mt-1">Ver projetos</span>
                  </a>
                </div>


              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-card/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-purple-400" />
            <span className="text-sm text-muted-foreground">Guilherme Friedrich Sousa</span>
          </div>
          <p className="text-sm text-muted-foreground text-center text-balance">
            © 2026 - Desenvolvido com React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

// Icon components
function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.163 23 1 16.837 1 9V8a2 2 0 012-2z" />
    </svg>
  );
}

function GraduationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  );
}

export default App;
