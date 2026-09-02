import { computed, Injectable, signal } from '@angular/core';

export type Language = 'en' | 'es';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  // Carga el idioma guardado previamente o usa 'en' por defecto
  readonly currentLang = signal<Language>(this.getInitialLanguage());

  private readonly translations = {
    en: {
      nav: {
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        resume: 'Resume / CV',
        resumeEs: 'Spanish (PDF)',
        resumeEn: 'English (PDF)',
      },
      hero: {
        status: 'Available for opportunities',
        title: 'Sergio Algarrada Miranda',
        role: 'Junior Full Stack & Multiplatform Developer',
        desc: 'Focused on building robust web solutions with <strong class="text-light">Java, Spring Boot, and Angular</strong>, alongside cross-platform projects using <strong class="text-light">Flutter and Firebase</strong>. Experienced with production workflows at Ayesa and clean software development practices.',
        btnProjects: 'View Projects',
        btnExperience: 'Work Experience',
        btnContact: 'Contact Me',
      },
      experience: {
        title: 'Work Experience',
        role: 'Full Stack Developer Intern',
        company: 'Ayesa · Seville, Spain',
        period: 'Apr 2025 – May 2025 · Feb 2026 – May 2026',
        bullet1:
          'Developed and maintained internal enterprise web frontends using <strong class="text-light">Angular</strong>.',
        bullet2:
          'Collaborated on backend business logic with <strong class="text-light">Java &amp; Spring Boot</strong>, querying and managing relational databases (<strong class="text-light">MySQL &amp; PostgreSQL</strong>).',
        bullet3:
          'Maintained version control workflows and collaborative branching with <strong class="text-light">Git</strong>.',
        bullet4:
          'Provided technical support, production troubleshooting, and functional feature validation.',
      },
      projects: {
        title: 'Featured Projects',
        awardBadge: '🏆 1st Prize Winner',
        awardDesc:
          'Awarded 1st place in the "Municipal Incidents App" Competition (Cantillana Town Hall).',
        urbiTitle: 'UrbiConnect',
        urbiDesc:
          'Cross-platform municipal incident management platform developed for the Cantillana Town Hall. Enables real-time incident reporting, tracking, and communication between citizens and municipal teams.',
        bullet1: 'Designed UI/UX flows and executed functional QA testing and validation.',
        bullet2:
          'Configured and integrated cloud services with <strong class="text-light">Firebase Auth, Firestore &amp; Storage</strong>.',
        bullet3:
          'Integrated geolocation and interactive maps using the <strong class="text-light">Google Maps API</strong>.',
        badgeAi: 'AI-Assisted Dev',
      },
      skills: {
  title: 'Technical Skills',
  backend: 'Backend',
  frontend: 'Frontend & Mobile',
  databases: 'Databases & Cloud',
  tools: 'Tools & Practices',
  certTitle: 'Official Certifications & Languages',
  certOpenWebinars: '+20 Technical Certifications',
  certOpenWebinarsSub: 'Java, Spring Boot, GitFlow, Agile & Testing (OpenWebinars)',
  certEnglish: 'English B2 – Cambridge Certified',
  certEnglishSub: 'Fluent professional communication',
  btnLinkedIn: 'View all certifications on LinkedIn',
},
      footer: {
        copyright: '© 2026 Sergio Algarrada Miranda. All rights reserved.',
        builtWith: 'Built with Angular & Bootstrap',
      },
    },
    es: {
      nav: {
        about: 'Sobre mí',
        experience: 'Experiencia',
        projects: 'Proyectos',
        skills: 'Habilidades',
        resume: 'Currículum / CV',
        resumeEs: 'Español (PDF)',
        resumeEn: 'Inglés (PDF)',
      },
      hero: {
        status: 'Disponible para trabajar',
        title: 'Sergio Algarrada Miranda',
        role: 'Desarrollador Junior Full Stack y Multiplataforma',
        desc: 'Especializado en el desarrollo de soluciones web robustas con <strong class="text-light">Java, Spring Boot y Angular</strong>, y aplicaciones multiplataforma con <strong class="text-light">Flutter y Firebase</strong>. Con experiencia real en entornos de producción en Ayesa y buenas prácticas de desarrollo.',
        btnProjects: 'Ver Proyectos',
        btnExperience: 'Experiencia Laboral',
        btnContact: 'Contactar',
      },
      experience: {
        title: 'Experiencia Laboral',
        role: 'Programador Full Stack (Prácticas)',
        company: 'Ayesa · Sevilla, España',
        period: 'Abr 2025 – May 2025 · Feb 2026 – May 2026',
        bullet1:
          'Desarrollo y mantenimiento del Frontend de aplicaciones empresariales internas utilizando <strong class="text-light">Angular</strong>.',
        bullet2:
          'Colaboración en la lógica de negocio del Backend con <strong class="text-light">Java y Spring Boot</strong>, y optimización de consultas en bases de datos relacionales (<strong class="text-light">MySQL y PostgreSQL</strong>).',
        bullet3:
          'Control de versiones y trabajo colaborativo fluido utilizando repositorios <strong class="text-light">Git</strong>.',
        bullet4:
          'Soporte técnico directo, resolución de incidencias en entornos reales de producción y validación de funcionalidades.',
      },
      projects: {
        title: 'Proyectos Destacados',
        awardBadge: '🏆 1.er Premio Concurso',
        awardDesc:
          'Galardonado con el 1.er premio en el concurso "App Incidencias Municipales" (Ayto. de Cantillana).',
        urbiTitle: 'UrbiConnect',
        urbiDesc:
          'Plataforma multiplataforma de gestión de incidencias municipales desarrollada para el Ayuntamiento de Cantillana. Facilita la comunicación directa entre la ciudadanía y los servicios operativos para el reporte, seguimiento y resolución de incidencias en la vía pública.',
        bullet1:
          'Diseño de flujos de interfaz (UI/UX) y ejecución de pruebas de calidad (QA) y validación funcional.',
        bullet2:
          'Configuración e integración de infraestructura cloud con <strong class="text-light">Firebase Auth, Firestore y Storage</strong>.',
        bullet3:
          'Integración de mapas interactivos y geolocalización en tiempo real mediante la <strong class="text-light">Google Maps API</strong>.',
        badgeAi: 'Desarrollo Asistido por IA',
      },
     skills: {
  title: 'Habilidades Técnicas',
  backend: 'Backend',
  frontend: 'Frontend y Móvil',
  databases: 'Bases de Datos y Cloud',
  tools: 'Herramientas y Metodologías',
  certTitle: 'Certificaciones Oficiales e Idiomas',
  certOpenWebinars: '+20 Certificaciones Técnicas',
  certOpenWebinarsSub: 'Java, Spring Boot, GitFlow, Agile y Testing (OpenWebinars)',
  certEnglish: 'Inglés B2 – Certificado por Cambridge',
  certEnglishSub: 'Comunicación técnica y profesional fluida',
  btnLinkedIn: 'Ver todas las certificaciones en LinkedIn',
},
      footer: {
        copyright: '© 2026 Sergio Algarrada Miranda. Todos los derechos reservados.',
        builtWith: 'Desarrollado con Angular y Bootstrap',
      },
    },
  };

  readonly t = computed(() => this.translations[this.currentLang()]);

  toggleLanguage(): void {
    this.currentLang.update((lang) => {
      const nextLang: Language = lang === 'en' ? 'es' : 'en';
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('portfolio_lang', nextLang);
      }
      return nextLang;
    });
  }

  private getInitialLanguage(): Language {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('portfolio_lang') as Language;
      if (stored === 'en' || stored === 'es') {
        return stored;
      }
    }
    return 'en';
  }
}
