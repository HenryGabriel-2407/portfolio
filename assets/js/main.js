/* ============================================================
   Henry Gabriel — Portfólio · main.js
   Interações + i18n (pt/en/es) + tema claro/escuro
   + visualizador protegido de certificados
   ============================================================ */

/* ============================================================
   I18N · dicionário de textos
   ============================================================ */
const I18N = {
    pt: {
        'doc.title': 'Henry Gabriel — Analista de Dados & Automação',
        'nav.home': 'Início', 'nav.about': 'Sobre', 'nav.services': 'Serviços',
        'nav.projects': 'Projetos', 'nav.experience': 'Experiência', 'nav.skills': 'Skills',
        'nav.certs': 'Certificados', 'nav.contact': 'Contato',
        'ui.viewCert': 'Ver certificado', 'ui.workload': 'de carga horária',
        'ui.loading': 'carregando…', 'ui.loadError': 'Não foi possível carregar o certificado',
        'ui.copyEmail': 'Copiar e-mail', 'ui.copied': 'Copiado!',
        'ui.protected': 'Conteúdo protegido — somente visualização',
        'ui.cvFile': 'henry-gabriel-curriculo-ptbr.pdf',
        'hero.badge': 'Disponível para novos projetos', 'hero.hello': 'Olá, eu sou',
        'hero.desc': 'Transformo dados brutos em decisões rápidas e ideias em aplicações reais. Do meu próprio negócio à consultoria, aplico <strong>Python, SQL, Power BI e desenvolvimento web</strong> para automatizar processos, construir interfaces e gerar insights que funcionam na prática.',
        'hero.btnProjects': 'Ver projetos', 'hero.btnCv': 'Currículo',
        'hero.float1t': 'Dados → Decisão', 'hero.float1s': 'análise aplicada',
        'hero.float2t': 'Horas → Minutos', 'hero.float2s': 'automação real',
        'about.tag': '// sobre mim',
        'about.h2': 'Quem está por trás <span class="gradient-text">dos dados</span>',
        'about.p1': 'Sou estudante de <strong>Sistemas de Informação</strong> com foco em análise de dados e automação em contextos reais. Minha trajetória é diferente da maioria: antes de escrever linhas de código, aprendi a resolver problemas reais <strong>gerenciando meu próprio negócio</strong> como sócio-proprietário do Empório Bodoski.',
        'about.p2': 'Hoje, como estagiário de TI na <strong>HS Consultoria</strong>, atuo com análise de dados aplicada à engenharia de petróleo e biocombustíveis — automatizando documentos regulatórios em Python, estruturando fluxos de dados e construindo dashboards interativos.',
        'about.p3': 'Gosto do momento em que um dado bruto vira uma decisão clara. É isso que busco entregar em cada projeto.',
        'about.c1t': 'Estudante', 'about.c1p': 'Sistemas de Informação — Avantis (2023–2026), foco em dados e automação.',
        'about.c2t': 'Sócio-proprietário', 'about.c2p': 'Empório Bodoski (2022–2023): gestão, estoque e processos na prática.',
        'about.c3t': 'Estagiário de TI', 'about.c3p': 'HS Consultoria (2023–atual): dados no setor de petróleo e biocombustíveis.',
        'about.s1': 'cursos concluídos', 'about.s2': '+ horas de formação',
        'about.s3': 'idiomas em estudo', 'about.s4': '+ repos no GitHub',
        'srv.tag': '// serviços',
        'srv.h2': 'Como posso ajudar <span class="gradient-text">seu negócio</span>',
        'srv.p': 'Soluções sob medida para empresas que querem parar de perder tempo com processos manuais.',
        'srv.c1t': 'Automação de Processos', 'srv.c1p': 'Tarefas repetitivas em Python: geração de documentos, envio de e-mails em massa, consolidação de planilhas. De horas para minutos.',
        'srv.c2t': 'Dashboards Interativos', 'srv.c2p': 'Visualizações claras em Power BI ou Excel para acompanhar indicadores em tempo real e apoiar decisões estratégicas.',
        'srv.c3t': 'ETL & Tratamento de Dados', 'srv.c3p': 'Coleta, limpeza e estruturação de dados espalhados em planilhas e sistemas — prontos para análise confiável.',
        'srv.c4t': 'Integração de APIs', 'srv.c4p': 'Conexão entre sistemas via APIs REST: seus dados fluindo automaticamente entre plataformas sem retrabalho.',
        'srv.c5t': 'Desenvolvimento Web & Full Stack', 'srv.c5p': 'Criação de sites e aplicações web responsivas, do frontend ao backend. Interfaces modernas com HTML, CSS, JavaScript e frameworks front-end.',
        'srv.ctaP': 'Precisa de algo específico?', 'srv.ctaBtn': 'Solicitar orçamento',
        'prj.tag': '// projetos',
        'prj.h2': 'Cases & <span class="gradient-text">projetos</span>',
        'prj.ftFlag': '⭐ Case principal', 'prj.ftTitle': 'Automação de Certificados de Eventos',
        'prj.ftPbT': 'O problema', 'prj.ftPbP': 'Emitir certificados manualmente para cada participante consumia horas de trabalho repetitivo por evento.',
        'prj.ftSolT': 'A solução', 'prj.ftSolP': 'Sistema em Python que lê planilhas Excel de participantes, gera certificados personalizados em massa e envia tudo automaticamente por e-mail (SMTP).',
        'prj.ftResT': 'O resultado', 'prj.ftResP': 'Redução de <em>horas</em> de trabalho manual para <em>minutos</em> por evento — zero erro de digitação.',
        'prj.ftBtn': 'Ver no GitHub',
        'prj.bcFlag': '⭐ Cliente real · Out 2024', 'prj.bcTitle': 'Site Belo Conceito',
        'prj.bcP': 'Site institucional para loja de móveis planejados em Itapema/SC: catálogo com galeria e lightbox, FAQ interativo, slideshow, carrossel de produtos e contato direto via WhatsApp — com documentação técnica completa.',
        'prj.garTitle': 'Garçom Digital App',
        'prj.garP': 'Aplicativo de pedidos digitais para restaurantes: clientes montam pedidos direto pelo celular, agilizando o atendimento na mesa.',
        'prj.forP': 'Sistema completo para pizzaria: gestão de pedidos, menu e operação desenvolvida em Python com foco em simplicidade.',
        'prj.datTitle': 'Data Analysis com Python',
        'prj.datP': 'Análise exploratória de dados com pandas: limpeza, estatísticas descritivas e visualização de padrões em datasets reais.',
        'prj.apiP': 'Desenvolvimento de APIs REST modernas com FastAPI: rotas, validação de dados e documentação automática.',
        'prj.dbP': 'Exploração da intersecção entre bancos de dados e inteligência artificial: consultas e tratamento assistidos por IA.',
        'prj.funTitle': 'Fundamentos & Estruturas',
        'prj.funP': 'Base sólida construída na graduação: estruturas de dados em C++, RPG de turnos em Java e sistemas em C.',
        'stk.responsive': 'Responsivo', 'stk.logic': 'Lógica', 'stk.analytics': 'Análise', 'stk.ai': 'IA',
        'exp.tag': '// trajetória',
        'exp.h2': 'Experiência & <span class="gradient-text">formação</span>',
        'exp.i1date': '2023 — atual', 'exp.i1title': 'Estágio de Tecnologia da Informação',
        'exp.i1co': 'HS Consultoria · Petróleo & Biocombustíveis',
        'exp.i1b1': 'Análise de dados aplicada à engenharia, transformando dados brutos em informação estratégica para tomada de decisão.',
        'exp.i1b2': 'Automação de processos críticos em Python — geração de documentos regulatórios com menos tempo e menos erros.',
        'exp.i1b3': 'Elaboração de relatórios técnicos e dashboards interativos, estruturando fluxos de dados confiáveis.',
        'exp.i1b4': 'Apoio na produção de relatórios e defesas jurídicas, traduzindo dados técnicos em conteúdo claro e objetivo.',
        'exp.i2title': 'Sócio-proprietário',
        'exp.i2b1': 'Gestão de equipe multidisciplinar alinhada aos objetivos estratégicos do negócio.',
        'exp.i2b2': 'Automação e organização de dados para controle de estoque e pedidos, reduzindo falhas operacionais.',
        'exp.i2b3': 'Melhoria da eficiência da cadeia de suprimentos com visão de dono — cada ponto percentual importava.',
        'exp.i3date': '2023 — 2026 (cursando)', 'exp.i3title': 'Bacharelado em Sistemas de Informação',
        'exp.i3b1': 'Foco em análise de dados, engenharia de software e infraestrutura.',
        'exp.i3b2': 'Projetos práticos em C++, Java, Python e desenvolvimento web.',
        'skl.tag': '// skills',
        'skl.h2': 'Tecnologias & <span class="gradient-text">competências</span>',
        'skl.g1': 'Linguagens & Dados', 'skl.g2': 'Automação & Engenharia',
        'skl.g3': 'Infra & Ferramentas', 'skl.g4': 'Idiomas',
        'skl.etl': 'ETL & Pipelines', 'skl.backend': 'Back-end', 'skl.danalytics': 'Análise de Dados',
        'skl.networks': 'Redes de Computadores', 'skl.cybersec': 'Cibersegurança',
        'skl.genai': 'IA Generativa', 'skl.embedded': 'Sistemas Embarcados · em estudo', 'skl.webdev': 'Desenvolvimento Web · Full Stack',
        'skl.apirest': 'APIs REST · JSON', 'skl.fullstack': 'Full Stack · FastAPI + SQLAlchemy + PostgreSQL', 'skl.pdf': 'Geração de PDF · jsPDF',
        'skl.numpy': 'NumPy & Matplotlib', 'skl.dw': 'Data Warehouse · Big Data',
        'skl.llm': 'IA Generativa & LLMs · Gemini / LangChain',
        'skl.virt': 'Virtualização · Windows Server · Active Directory', 'skl.forense': 'Computação Forense',
        'skl.lpt': '🇧🇷 Português — nativo', 'skl.len': '🇺🇸 Inglês — intermediário',
        'skl.les': '🇪🇸 Espanhol — intermediário', 'skl.ljp': '🇯🇵 Japonês — intermediário',
        'crt.tag': '// certificados',
        'crt.h2': 'Formação <span class="gradient-text">comprovada</span>',
        'crt.p': 'Clique em qualquer certificado para visualizar. <em>Visualização protegida — os documentos não podem ser baixados ou copiados.</em>',
        'crt.note': 'Documento protegido — exibição apenas para consulta.',
        'ct.tag': '// contato',
        'ct.h2': 'Vamos construir algo <span class="gradient-text">juntos?</span>',
        'ct.p': 'Disponível para oportunidades CLT e PJ em dados, automação e desenvolvimento web.',
        'ct.email': 'E-mail',
        'foot.made': 'feito com café e Python',
        typed: ['Desenvolvimento Web & Full Stack', 'Analista de Dados', 'Automação com Python', 'Power BI & Dashboards', 'ETL & Pipelines']
    },
    en: {
        'doc.title': 'Henry Gabriel — Data Analyst & Automation',
        'nav.home': 'Home', 'nav.about': 'About', 'nav.services': 'Services',
        'nav.projects': 'Projects', 'nav.experience': 'Experience', 'nav.skills': 'Skills',
        'nav.certs': 'Certificates', 'nav.contact': 'Contact',
        'ui.viewCert': 'View certificate', 'ui.workload': 'of coursework',
        'ui.loading': 'loading…', 'ui.loadError': 'Could not load the certificate',
        'ui.copyEmail': 'Copy email', 'ui.copied': 'Copied!',
        'ui.protected': 'Protected content — view only',
        'ui.cvFile': 'henry-gabriel-resume-en.pdf',
        'hero.badge': 'Available for new projects', 'hero.hello': "Hi, I'm",
        'hero.desc': "I turn raw data into fast decisions and ideas into real applications. From running my own business to consulting, I apply <strong>Python, SQL, Power BI and web development</strong> to automate processes, build interfaces and generate insights that work in the real world.",
        'hero.btnProjects': 'View projects', 'hero.btnCv': 'Currículum',
        'hero.float1t': 'Data → Decision', 'hero.float1s': 'applied analysis',
        'hero.float2t': 'Hours → Minutes', 'hero.float2s': 'real automation',
        'about.tag': '// about me',
        'about.h2': 'The person behind <span class="gradient-text">the data</span>',
        'about.p1': "I'm an <strong>Information Systems</strong> student focused on data analysis and automation in real-world contexts. My path is different from most: before writing lines of code, I learned to solve real problems <strong>running my own business</strong> as co-owner of Empório Bodoski.",
        'about.p2': "Today, as an IT intern at <strong>HS Consultoria</strong>, I work with data analysis applied to oil engineering and biofuels — automating regulatory documents in Python, structuring data flows and building interactive dashboards.",
        'about.p3': "I love the moment when raw data becomes a clear decision. That's what I aim to deliver in every project.",
        'about.c1t': 'Student', 'about.c1p': 'Information Systems — Avantis (2023–2026), focus on data and automation.',
        'about.c2t': 'Co-owner', 'about.c2p': 'Empório Bodoski (2022–2023): management, inventory and hands-on processes.',
        'about.c3t': 'IT Intern', 'about.c3p': 'HS Consultoria (2023–present): data in the oil and biofuels sector.',
        'about.s1': 'courses completed', 'about.s2': '+ hours of training',
        'about.s3': 'languages being studied', 'about.s4': '+ repos on GitHub',
        'srv.tag': '// services',
        'srv.h2': 'How I can help <span class="gradient-text">your business</span>',
        'srv.p': 'Tailored solutions for companies that want to stop wasting time on manual processes.',
        'srv.c1t': 'Process Automation', 'srv.c1p': 'Repetitive tasks in Python: document generation, bulk email sending, spreadsheet consolidation. From hours to minutes.',
        'srv.c2t': 'Interactive Dashboards', 'srv.c2p': 'Clear visualizations in Power BI or Excel to track indicators in real time and support strategic decisions.',
        'srv.c3t': 'ETL & Data Wrangling', 'srv.c3p': 'Collecting, cleaning and structuring data scattered across spreadsheets and systems — ready for reliable analysis.',
        'srv.c4t': 'API Integration', 'srv.c4p': 'Connecting systems through REST APIs: your data flowing automatically between platforms with no rework.',
        'srv.c5t': 'Web Development & Full Stack', 'srv.c5p': 'Building responsive websites and web applications, from frontend to backend. Modern interfaces with HTML, CSS, JavaScript and front-end frameworks.',
        'srv.ctaP': 'Need something specific?', 'srv.ctaBtn': 'Request a quote',
        'prj.tag': '// projects',
        'prj.h2': 'Cases & <span class="gradient-text">projects</span>',
        'prj.ftFlag': '⭐ Main case', 'prj.ftTitle': 'Event Certificate Automation',
        'prj.ftPbT': 'The problem', 'prj.ftPbP': 'Issuing certificates manually for each participant consumed hours of repetitive work per event.',
        'prj.ftSolT': 'The solution', 'prj.ftSolP': 'A Python system that reads participant Excel spreadsheets, generates personalized certificates in bulk and sends everything automatically by email (SMTP).',
        'prj.ftResT': 'The result', 'prj.ftResP': 'From <em>hours</em> of manual work down to <em>minutes</em> per event — zero typos.',
        'prj.ftBtn': 'View on GitHub',
        'prj.bcFlag': '⭐ Real client · Oct 2024', 'prj.bcTitle': 'Belo Conceito Website',
        'prj.bcP': 'Institutional website for a custom furniture store in Itapema/SC: catalog with gallery and lightbox, interactive FAQ, slideshow, product carousel and direct WhatsApp contact — with complete technical documentation.',
        'prj.garTitle': 'Digital Waiter App',
        'prj.garP': 'Digital ordering app for restaurants: customers build their orders right on their phones, speeding up table service.',
        'prj.forP': 'Complete pizzeria system: order, menu and operations management developed in Python with a focus on simplicity.',
        'prj.datTitle': 'Data Analysis with Python',
        'prj.datP': 'Exploratory data analysis with pandas: cleaning, descriptive statistics and pattern visualization on real datasets.',
        'prj.apiP': 'Modern REST APIs with FastAPI: routes, data validation and automatic documentation.',
        'prj.dbP': 'Exploring the intersection between databases and artificial intelligence: AI-assisted queries and data processing.',
        'prj.funTitle': 'Fundamentals & Structures',
        'prj.funP': 'A solid foundation built during college: data structures in C++, a turn-based RPG in Java and systems in C.',
        'stk.responsive': 'Responsive', 'stk.logic': 'Logic', 'stk.analytics': 'Analysis', 'stk.ai': 'AI',
        'exp.tag': '// journey',
        'exp.h2': 'Experience & <span class="gradient-text">education</span>',
        'exp.i1date': '2023 — present', 'exp.i1title': 'IT Internship',
        'exp.i1co': 'HS Consultoria · Oil & Biofuels',
        'exp.i1b1': 'Data analysis applied to engineering, turning raw data into strategic information for decision-making.',
        'exp.i1b2': 'Automation of critical processes in Python — generating regulatory documents faster and with fewer errors.',
        'exp.i1b3': 'Building technical reports and interactive dashboards, structuring reliable data flows.',
        'exp.i1b4': 'Support in producing legal reports and defenses, translating technical data into clear, objective content.',
        'exp.i2title': 'Co-owner',
        'exp.i2b1': "Managing a multidisciplinary team aligned with the company's strategic goals.",
        'exp.i2b2': 'Data automation and organization for inventory and order control, reducing operational failures.',
        'exp.i2b3': "Improved supply chain efficiency with an owner's mindset — every percentage point mattered.",
        'exp.i3date': '2023 — 2026 (in progress)', 'exp.i3title': "Bachelor's in Information Systems",
        'exp.i3b1': 'Focus on data analysis, software engineering and infrastructure.',
        'exp.i3b2': 'Hands-on projects in C++, Java, Python and web development.',
        'skl.tag': '// skills',
        'skl.h2': 'Technologies & <span class="gradient-text">skills</span>',
        'skl.g1': 'Languages & Data', 'skl.g2': 'Automation & Engineering',
        'skl.g3': 'Infra & Tools', 'skl.g4': 'Languages',
        'skl.etl': 'ETL & Pipelines', 'skl.backend': 'Back-end', 'skl.danalytics': 'Data Analysis',
        'skl.networks': 'Computer Networks', 'skl.cybersec': 'Cybersecurity',
        'skl.genai': 'Generative AI', 'skl.embedded': 'Embedded Systems · studying', 'skl.webdev': 'Web Development · Full Stack',
        'skl.apirest': 'REST APIs · JSON', 'skl.fullstack': 'Full Stack · FastAPI + SQLAlchemy + PostgreSQL', 'skl.pdf': 'PDF generation · jsPDF',
        'skl.numpy': 'NumPy & Matplotlib', 'skl.dw': 'Data Warehouse · Big Data',
        'skl.llm': 'Generative AI & LLMs · Gemini / LangChain',
        'skl.virt': 'Virtualization · Windows Server · Active Directory', 'skl.forense': 'Digital Forensics',
        'skl.lpt': '🇧🇷 Portuguese — native', 'skl.len': '🇺🇸 English — intermediate',
        'skl.les': '🇪🇸 Spanish — intermediate', 'skl.ljp': '🇯🇵 Japanese — intermediate',
        'crt.tag': '// certificates',
        'crt.h2': 'Verified <span class="gradient-text">training</span>',
        'crt.p': 'Click any certificate to view it. <em>Protected view — documents cannot be downloaded or copied.</em>',
        'crt.note': 'Protected document — display for consultation only.',
        'ct.tag': '// contact',
        'ct.h2': 'Shall we build something <span class="gradient-text">together?</span>',
        'ct.p': 'Available for full-time and freelance roles in data, automation and web development.',
        'ct.email': 'Email',
        'foot.made': 'made with coffee and Python',
        typed: ['Web Development & Full Stack', 'Data Analyst', 'Python Automation', 'Power BI & Dashboards', 'ETL & Pipelines']
    },
    es: {
        'doc.title': 'Henry Gabriel — Analista de Datos & Automatización',
        'nav.home': 'Inicio', 'nav.about': 'Sobre mí', 'nav.services': 'Servicios',
        'nav.projects': 'Proyectos', 'nav.experience': 'Experiencia', 'nav.skills': 'Habilidades',
        'nav.certs': 'Certificados', 'nav.contact': 'Contacto',
        'ui.viewCert': 'Ver certificado', 'ui.workload': 'de carga horaria',
        'ui.loading': 'cargando…', 'ui.loadError': 'No se pudo cargar el certificado',
        'ui.copyEmail': 'Copiar correo', 'ui.copied': '¡Copiado!',
        'ui.protected': 'Contenido protegido — solo visualización',
        'ui.cvFile': 'henry-gabriel-cv-es.pdf',
        'hero.badge': 'Disponible para nuevos proyectos', 'hero.hello': 'Hola, soy',
        'hero.desc': 'Convierto datos crudos en decisiones rápidas e ideas en aplicaciones reales. Desde la gestión de mi propio negocio hasta la consultoría, aplico <strong>Python, SQL, Power BI y desarrollo web</strong> para automatizar procesos, construir interfaces y generar insights que funcionan en la práctica.',
        'hero.btnProjects': 'Ver proyectos', 'hero.btnCv': 'Currículum',
        'hero.float1t': 'Datos → Decisión', 'hero.float1s': 'análisis aplicado',
        'hero.float2t': 'Horas → Minutos', 'hero.float2s': 'automatización real',
        'about.tag': '// sobre mí',
        'about.h2': 'Quién está detrás <span class="gradient-text">de los datos</span>',
        'about.p1': 'Soy estudiante de <strong>Sistemas de Información</strong> con foco en análisis de datos y automatización en contextos reales. Mi trayectoria es diferente a la de la mayoría: antes de escribir líneas de código, aprendí a resolver problemas reales <strong>gestionando mi propio negocio</strong> como socio propietario del Empório Bodoski.',
        'about.p2': 'Hoy, como pasante de TI en <strong>HS Consultoria</strong>, trabajo con análisis de datos aplicado a la ingeniería de petróleo y biocombustibles — automatizando documentos regulatorios en Python, estructurando flujos de datos y construyendo dashboards interactivos.',
        'about.p3': 'Me gusta el momento en que un dato crudo se convierte en una decisión clara. Es eso lo que busco entregar en cada proyecto.',
        'about.c1t': 'Estudiante', 'about.c1p': 'Sistemas de Información — Avantis (2023–2026), foco en datos y automatización.',
        'about.c2t': 'Socio propietario', 'about.c2p': 'Empório Bodoski (2022–2023): gestión, inventario y procesos en la práctica.',
        'about.c3t': 'Pasante de TI', 'about.c3p': 'HS Consultoria (2023–actualidad): datos en el sector de petróleo y biocombustibles.',
        'about.s1': 'cursos completados', 'about.s2': '+ horas de formación',
        'about.s3': 'idiomas en estudio', 'about.s4': '+ repos en GitHub',
        'srv.tag': '// servicios',
        'srv.h2': 'Cómo puedo ayudar <span class="gradient-text">a tu negocio</span>',
        'srv.p': 'Soluciones a medida para empresas que quieren dejar de perder tiempo con procesos manuales.',
        'srv.c1t': 'Automatización de Procesos', 'srv.c1p': 'Tareas repetitivas en Python: generación de documentos, envío de correos masivos, consolidación de hojas de cálculo. De horas a minutos.',
        'srv.c2t': 'Dashboards Interactivos', 'srv.c2p': 'Visualizaciones claras en Power BI o Excel para seguir indicadores en tiempo real y apoyar decisiones estratégicas.',
        'srv.c3t': 'ETL & Tratamiento de Datos', 'srv.c3p': 'Recolección, limpieza y estructuración de datos dispersos en hojas de cálculo y sistemas — listos para un análisis confiable.',
        'srv.c4t': 'Integración de APIs', 'srv.c4p': 'Conexión entre sistemas vía APIs REST: tus datos fluyendo automáticamente entre plataformas sin retrabajo.',
        'srv.c5t': 'Desarrollo Web & Full Stack', 'srv.c5p': 'Creación de sitios y aplicaciones web responsivas, del frontend al backend. Interfaces modernas con HTML, CSS, JavaScript y frameworks front-end.',
        'srv.ctaP': '¿Necesitas algo específico?', 'srv.ctaBtn': 'Solicitar presupuesto',
        'prj.tag': '// proyectos',
        'prj.h2': 'Casos & <span class="gradient-text">proyectos</span>',
        'prj.ftFlag': '⭐ Caso principal', 'prj.ftTitle': 'Automatización de Certificados de Eventos',
        'prj.ftPbT': 'El problema', 'prj.ftPbP': 'Emitir certificados manualmente para cada participante consumía horas de trabajo repetitivo por evento.',
        'prj.ftSolT': 'La solución', 'prj.ftSolP': 'Sistema en Python que lee hojas de cálculo de Excel con los participantes, genera certificados personalizados en masa y envía todo automáticamente por correo electrónico (SMTP).',
        'prj.ftResT': 'El resultado', 'prj.ftResP': 'Reducción de <em>horas</em> de trabajo manual a <em>minutos</em> por evento — cero errores de digitación.',
        'prj.ftBtn': 'Ver en GitHub',
        'prj.bcFlag': '⭐ Cliente real · Oct 2024', 'prj.bcTitle': 'Sitio web Belo Conceito',
        'prj.bcP': 'Sitio institucional para una tienda de muebles planeados en Itapema/SC: catálogo con galería y lightbox, FAQ interactivo, slideshow, carrusel de productos y contacto directo por WhatsApp — con documentación técnica completa.',
        'prj.garTitle': 'App Garzón Digital',
        'prj.garP': 'Aplicación de pedidos digitales para restaurantes: los clientes arman sus pedidos directamente desde el celular, agilizando la atención en la mesa.',
        'prj.forP': 'Sistema completo para pizzería: gestión de pedidos, menú y operación desarrollada en Python con foco en la simplicidad.',
        'prj.datTitle': 'Análisis de Datos con Python',
        'prj.datP': 'Análisis exploratorio de datos con pandas: limpieza, estadísticas descriptivas y visualización de patrones en datasets reales.',
        'prj.apiP': 'Desarrollo de APIs REST modernas con FastAPI: rutas, validación de datos y documentación automática.',
        'prj.dbP': 'Exploración de la intersección entre bases de datos e inteligencia artificial: consultas y tratamiento asistidos por IA.',
        'prj.funTitle': 'Fundamentos & Estructuras',
        'prj.funP': 'Base sólida construida en la carrera: estructuras de datos en C++, RPG por turnos en Java y sistemas en C.',
        'stk.responsive': 'Responsivo', 'stk.logic': 'Lógica', 'stk.analytics': 'Análisis', 'stk.ai': 'IA',
        'exp.tag': '// trayectoria',
        'exp.h2': 'Experiencia & <span class="gradient-text">formación</span>',
        'exp.i1date': '2023 — actualidad', 'exp.i1title': 'Pasantía en Tecnología de la Información',
        'exp.i1co': 'HS Consultoria · Petróleo & Biocombustibles',
        'exp.i1b1': 'Análisis de datos aplicado a la ingeniería, transformando datos crudos en información estratégica para la toma de decisiones.',
        'exp.i1b2': 'Automatización de procesos críticos en Python — generación de documentos regulatorios con menos tiempo y menos errores.',
        'exp.i1b3': 'Elaboración de informes técnicos y dashboards interactivos, estructurando flujos de datos confiables.',
        'exp.i1b4': 'Apoyo en la producción de informes y defensas jurídicas, traduciendo datos técnicos en contenido claro y objetivo.',
        'exp.i2title': 'Socio propietario',
        'exp.i2b1': 'Gestión de un equipo multidisciplinario alineado con los objetivos estratégicos del negocio.',
        'exp.i2b2': 'Automatización y organización de datos para el control de inventario y pedidos, reduciendo fallas operativas.',
        'exp.i2b3': 'Mejora de la eficiencia de la cadena de suministro con visión de dueño — cada punto porcentual importaba.',
        'exp.i3date': '2023 — 2026 (en curso)', 'exp.i3title': 'Grado en Sistemas de Información',
        'exp.i3b1': 'Foco en análisis de datos, ingeniería de software e infraestructura.',
        'exp.i3b2': 'Proyectos prácticos en C++, Java, Python y desarrollo web.',
        'skl.tag': '// habilidades',
        'skl.h2': 'Tecnologías & <span class="gradient-text">competencias</span>',
        'skl.g1': 'Lenguajes & Datos', 'skl.g2': 'Automatización & Ingeniería',
        'skl.g3': 'Infra & Herramientas', 'skl.g4': 'Idiomas',
        'skl.etl': 'ETL & Pipelines', 'skl.backend': 'Back-end', 'skl.danalytics': 'Análisis de Datos',
        'skl.networks': 'Redes de Computadoras', 'skl.cybersec': 'Ciberseguridad',
        'skl.genai': 'IA Generativa', 'skl.embedded': 'Sistemas Embarcados · en estudio', 'skl.webdev': 'Desarrollo Web · Full Stack',
        'skl.apirest': 'APIs REST · JSON', 'skl.fullstack': 'Full Stack · FastAPI + SQLAlchemy + PostgreSQL', 'skl.pdf': 'Generación de PDF · jsPDF',
        'skl.numpy': 'NumPy & Matplotlib', 'skl.dw': 'Data Warehouse · Big Data',
        'skl.llm': 'IA Generativa & LLMs · Gemini / LangChain',
        'skl.virt': 'Virtualización · Windows Server · Active Directory', 'skl.forense': 'Informática Forense',
        'skl.lpt': '🇧🇷 Portugués — nativo', 'skl.len': '🇺🇸 Inglés — intermedio',
        'skl.les': '🇪🇸 Español — intermedio', 'skl.ljp': '🇯🇵 Japonés — intermedio',
        'crt.tag': '// certificados',
        'crt.h2': 'Formación <span class="gradient-text">comprobada</span>',
        'crt.p': 'Haz clic en cualquier certificado para verlo. <em>Vista protegida — los documentos no se pueden descargar ni copiar.</em>',
        'crt.note': 'Documento protegido — visualización solo para consulta.',
        'ct.tag': '// contacto',
        'ct.h2': '¿Construimos algo <span class="gradient-text">juntos?</span>',
        'ct.p': 'Disponible para oportunidades en relación de dependencia y freelance en datos, automatización y desarrollo web.',
        'ct.email': 'Correo',
        'foot.made': 'hecho con café y Python',
        typed: ['Desarrollo Web & Full Stack', 'Analista de Datos', 'Automatización con Python', 'Power BI & Dashboards', 'ETL & Pipelines']
    }
};

/* ---------- dados dos certificados ---------- */
const CERTS = [
    { slug: 'responsabilidade-juridica-digital', org: 'Curso Livre', horas: '30h',
      titulo: { pt: 'Responsabilidade Jurídica nos Ambientes Digitais', en: 'Legal Liability in Digital Environments', es: 'Responsabilidad Jurídica en Entornos Digitales' },
      ano: { pt: 'Jul 2026', en: 'Jul 2026', es: 'Jul 2026' } },
    { slug: 'ia-area-fiscal-estrategia', org: 'Estratégia Concursos', horas: '34h',
      titulo: { pt: 'IA para Concursos — Área Fiscal', en: 'AI for Public Exams — Tax Area', es: 'IA para Oposiciones — Área Fiscal' },
      ano: { pt: 'Jul 2026', en: 'Jul 2026', es: 'Jul 2026' } },
    { slug: 'nano-fiap-dominando-iot', org: 'FIAP', horas: '80h',
      titulo: { pt: 'Nano: Dominando a IoT — Do Sensor à Nuvem', en: 'Nano: Mastering IoT — From Sensor to Cloud', es: 'Nano: Dominando el IoT — Del Sensor a la Nube' },
      ano: { pt: '2026', en: '2026', es: '2026' } },
    { slug: 'imersao-frontend-alura', org: 'Alura', horas: '5h',
      titulo: { pt: 'Imersão Front-End — 2ª edição', en: 'Front-End Immersion — 2nd edition', es: 'Inmersión Front-End — 2ª edición' },
      ano: { pt: 'Mar 2025', en: 'Mar 2025', es: 'Mar 2025' } },
    { slug: 'excel-analise-dados-preditiva', org: 'Preditiva.ai', horas: '12h',
      titulo: { pt: 'Excel para Análise de Dados', en: 'Excel for Data Analysis', es: 'Excel para Análisis de Datos' },
      ano: { pt: 'Jan 2025', en: 'Jan 2025', es: 'Ene 2025' } },
    { slug: 'html-css-alura', org: 'Alura', horas: '8h',
      titulo: { pt: 'HTML e CSS: ambientes, estrutura de arquivos e tags', en: 'HTML and CSS: environments, file structure and tags', es: 'HTML y CSS: entornos, estructura de archivos y etiquetas' },
      ano: { pt: 'Jan 2025', en: 'Jan 2025', es: 'Ene 2025' } },
    { slug: 'python-dados-asimov', org: 'ASIMOV', horas: '4h',
      titulo: { pt: 'Python para Dados: do zero à análise completa', en: 'Python for Data: from zero to full analysis', es: 'Python para Datos: de cero al análisis completo' },
      ano: { pt: 'Jan 2025', en: 'Jan 2025', es: 'Ene 2025' } },
    { slug: 'python-ia-chatbot-asimov', org: 'ASIMOV', horas: '4h',
      titulo: { pt: 'Python para IA: do zero ao primeiro chatbot', en: 'Python for AI: from zero to your first chatbot', es: 'Python para IA: de cero a tu primer chatbot' },
      ano: { pt: 'Jan 2025', en: 'Jan 2025', es: 'Ene 2025' } },
    { slug: 'powerbi-empowerdata', org: 'Empowerdata', horas: '8h',
      titulo: { pt: 'Acelerador de Carreira com Power BI', en: 'Career Accelerator with Power BI', es: 'Acelerador de Carrera con Power BI' },
      ano: { pt: 'Jan 2024', en: 'Jan 2024', es: 'Ene 2024' } },
    { slug: 'semana-academica-si', org: 'Universidade Avantis', horas: '35h',
      titulo: { pt: 'Semana Acadêmica de Sistemas de Informação', en: 'Information Systems Academic Week', es: 'Semana Académica de Sistemas de Información' },
      ano: { pt: 'Jun 2024', en: 'Jun 2024', es: 'Jun 2024' } },
    { slug: 'imersao-ia-alura-google', org: 'Alura + Google', horas: '6h',
      titulo: { pt: 'Imersão Inteligência Artificial', en: 'Artificial Intelligence Immersion', es: 'Inmersión Inteligencia Artificial' },
      ano: { pt: 'Mai 2024', en: 'May 2024', es: 'May 2024' } }
];

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* idioma salvo (padrão: pt) */
let LANG = 'pt';
try {
    const savedLang = localStorage.getItem('hg-lang');
    if (savedLang && I18N[savedLang]) LANG = savedLang;
} catch (e) {}

const tr = key => I18N[LANG][key] ?? I18N.pt[key] ?? '';

/* ============================================================
   TEMA CLARO / ESCURO
   ============================================================ */
function syncThemeMeta(theme) {
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#eef1f8' : '#07090f');
}

function applyTheme(theme, save = true) {
    document.documentElement.setAttribute('data-theme', theme);
    syncThemeMeta(theme);
    buildWatermark();
    if (save) {
        try { localStorage.setItem('hg-theme', theme); } catch (e) {}
    }
}

$('#themeToggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
});

/* ============================================================
   IDIOMAS
   ============================================================ */
function applyTranslations() {
    const dict = I18N[LANG];
    $$('[data-i18n]').forEach(el => {
        const val = dict[el.dataset.i18n];
        if (val != null) el.textContent = val;
    });
    $$('[data-i18n-html]').forEach(el => {
        const val = dict[el.dataset.i18nHtml];
        if (val != null) el.innerHTML = val;
    });
    document.documentElement.lang = LANG === 'pt' ? 'pt-BR' : LANG;
    document.title = dict['doc.title'];
    $('#loaderText').textContent = dict['ui.loading'];
    const cvLink = $('#cvLink');
    if (cvLink) cvLink.href = 'assets/docs/' + dict['ui.cvFile'];
    const shield = $('.viewer-shield');
    if (shield) shield.setAttribute('title', dict['ui.protected']);
    $$('.cert-card').forEach((card, i) => {
        if (!CERTS[i]) return;
        card.setAttribute('aria-label', `${dict['ui.viewCert']}: ${CERTS[i].titulo[LANG]}`);
    });
    $('#langCode').textContent = LANG.toUpperCase();
    $$('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === LANG));
}

function setLang(lang) {
    if (!I18N[lang]) return;
    LANG = lang;
    try { localStorage.setItem('hg-lang', lang); } catch (e) {}
    ti = 0; ci = 0; deleting = false;
    typingEl.textContent = '';
    applyTranslations();
    if (modal.classList.contains('open')) {
        const c = CERTS[currentCert];
        $('#modalCertTitle').textContent = c.titulo[LANG];
        $('#modalCertMeta').textContent = `${c.org} · ${c.ano[LANG]} · ${c.horas}`;
    }
}

const langToggle = $('#langToggle');
const langMenu = $('#langMenu');
const langWrap = $('.lang-wrap');

langToggle.addEventListener('click', e => {
    e.stopPropagation();
    langMenu.classList.toggle('open');
});
$$('.lang-opt').forEach(btn => btn.addEventListener('click', () => {
    setLang(btn.dataset.lang);
    langMenu.classList.remove('open');
}));
document.addEventListener('click', e => {
    if (!langWrap.contains(e.target)) langMenu.classList.remove('open');
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && langMenu.classList.contains('open')) {
        langMenu.classList.remove('open');
    }
});

/* ============================================================
   NAVBAR · menu mobile · progresso
   ============================================================ */
const navbar = $('#navbar');
const progressBar = $('#progressBar');

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 24);

    const docH = document.documentElement.scrollHeight - innerHeight;
    progressBar.style.width = `${docH > 0 ? (y / docH) * 100 : 0}%`;

    $('#toTop').classList.toggle('show', y > 600);
}, { passive: true });

const menuToggle = $('#menuToggle');
const navLinks = $('#navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
});

$$('.nav-link').forEach(a => a.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    navLinks.classList.remove('open');
}));

/* link ativo conforme a seção visível */
const sections = $$('section[id]');
const navObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            $$('.nav-link').forEach(l =>
                l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
        }
    });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => navObserver.observe(s));

/* ============================================================
   EFEITO DE DIGITAÇÃO (hero)
   ============================================================ */
let ti = 0, ci = 0, deleting = false;
const typingEl = $('#typing');

(function type() {
    const words = I18N[LANG].typed;
    const word = words[ti];
    typingEl.textContent = word.slice(0, ci);
    let delay = deleting ? 38 : 78;

    if (!deleting && ci === word.length) { delay = 1900; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; ti = (ti + 1) % words.length; delay = 350; }
    else ci += deleting ? -1 : 1;

    setTimeout(type, delay);
})();

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObserver.unobserve(e.target);
        }
    });
}, { threshold: .12 });
$$('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   CONTADORES (stats)
   ============================================================ */
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.dataset.count;
        const dur = 1400, t0 = performance.now();
        (function tick(now) {
            const p = Math.min((now - t0) / dur, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
        })(t0);
        counterObserver.unobserve(el);
    });
}, { threshold: .6 });
$$('[data-count]').forEach(el => counterObserver.observe(el));

/* ============================================================
   GRID DE CERTIFICADOS
   ============================================================ */
const grid = $('#certsGrid');

CERTS.forEach((c, i) => {
    const card = document.createElement('article');
    card.className = 'cert-card glass reveal';
    card.style.transitionDelay = `${(i % 4) * .07}s`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
        <div class="cert-thumb">
            <img src="assets/certificados/${c.slug}.jpg" alt="" loading="lazy" draggable="false">
            <div class="cert-thumb-overlay">
                <span class="cert-view-btn">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
                    <span data-i18n="ui.viewCert">${I18N[LANG]['ui.viewCert']}</span>
                </span>
            </div>
        </div>
        <div class="cert-info">
            <h3>${c.titulo[LANG]}</h3>
            <span class="cert-meta">${c.org} · ${c.ano[LANG]}</span>
            <span class="cert-hours">${c.horas} <span data-i18n="ui.workload">${I18N[LANG]['ui.workload']}</span></span>
        </div>`;
    card.addEventListener('click', () => openCert(i));
    card.addEventListener('keydown', ev => {
        if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); openCert(i); }
    });
    grid.appendChild(card);
    revealObserver.observe(card);
});

/* bloqueio extra nos thumbs (fora do modal também) */
document.addEventListener('dragstart', e => {
    if (e.target.tagName === 'IMG') e.preventDefault();
});

/* ============================================================
   VISUALIZADOR PROTEGIDO DE CERTIFICADOS
   ------------------------------------------------------------
   Estratégias anti-cópia (estáticas, sem backend):
   1. A imagem é carregada via fetch→blob→objectURL (o caminho
      real do arquivo não aparece em "copiar endereço da imagem").
   2. <img> com pointer-events:none: clique-direito cai numa
      camada protetora (.viewer-shield), que não oferece
      "salvar imagem como".
   3. Marca d'água diagonal sobre o documento.
   4. Bloqueio de Ctrl+S/Ctrl+P, arrastar e menu de contexto
      enquanto o modal está aberto.
   Obs.: nenhum site estático garante proteção absoluta contra
   um usuário técnico determinado — isso eleva a barreira ao
   máximo possível sem servidor próprio.
   ============================================================ */
const modal = $('#certModal');
const modalImg = $('#certImage');
const watermarkEl = $('#watermark');
const loader = $('#certLoader');
let currentCert = 0;

/* marca d'água gerada em SVG (texto repetido na diagonal) */
function buildWatermark() {
    const light = document.documentElement.getAttribute('data-theme') === 'light';
    const fill = light ? 'rgba(15,23,42,0.13)' : 'rgba(255,255,255,0.16)';
    const text = 'HENRY GABRIEL • PORTFÓLIO';
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='340' height='220'>
        <text x='20' y='120' transform='rotate(-28 170 110)' font-family='Arial, sans-serif'
              font-size='15' fill='${fill}' letter-spacing='2'>${text}</text>
        <text x='-150' y='230' transform='rotate(-28 170 110)' font-family='Arial, sans-serif'
              font-size='15' fill='${fill}' letter-spacing='2'>${text}</text>
        <text x='190' y='10' transform='rotate(-28 170 110)' font-family='Arial, sans-serif'
              font-size='15' fill='${fill}' letter-spacing='2'>${text}</text>
    </svg>`;
    watermarkEl.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

function openCert(i) {
    currentCert = i;
    const c = CERTS[i];
    $('#modalCertTitle').textContent = c.titulo[LANG];
    $('#modalCertMeta').textContent = `${c.org} · ${c.ano[LANG]} · ${c.horas}`;

    loader.classList.remove('hidden');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    /* pré-carrega a imagem antes de exibir (faz o loader sumir quando pronta) */
    const src = `assets/certificados/${c.slug}.jpg`;
    modalImg.onload = () => loader.classList.add('hidden');
    modalImg.onerror = () => {
        loader.classList.add('hidden');
        $('#modalCertTitle').textContent = tr('ui.loadError');
    };
    modalImg.src = src;
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    modalImg.onload = null;
    modalImg.onerror = null;
    modalImg.removeAttribute('src');
}

function navCert(step) {
    openCert((currentCert + step + CERTS.length) % CERTS.length);
}

$('#closeModal').addEventListener('click', closeModal);
$('#modalBackdrop').addEventListener('click', closeModal);
$('#prevCert').addEventListener('click', () => navCert(-1));
$('#nextCert').addEventListener('click', () => navCert(1));

document.addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') navCert(1);
    if (e.key === 'ArrowLeft') navCert(-1);
    /* bloqueia salvar/imprimir enquanto visualiza */
    if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'p')) {
        e.preventDefault();
    }
});

/* sem menu de contexto dentro do modal (e nos thumbs dos cards) */
['#certModal', '#certsGrid'].forEach(sel =>
    $(sel).addEventListener('contextmenu', e => e.preventDefault()));

/* ============================================================
   COPIAR E-MAIL
   ============================================================ */
const copyBtn = $('#copyEmail');
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText('henrygabriel2407@gmail.com');
        copyBtn.classList.add('copied');
        copyBtn.title = tr('ui.copied');
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.title = tr('ui.copyEmail');
        }, 2000);
    } catch {
        location.href = 'mailto:henrygabriel2407@gmail.com';
    }
});

/* ============================================================
   VOLTAR AO TOPO · ANO · INIT TEMA/IDIOMA
   ============================================================ */
$('#toTop').addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' }));

$('#year').textContent = new Date().getFullYear();

/* sincroniza ícones/meta/marca d'água com o tema já aplicado no <head>,
   depois aplica o idioma salvo em toda a página */
applyTheme(document.documentElement.getAttribute('data-theme') || 'dark', false);
applyTranslations();
