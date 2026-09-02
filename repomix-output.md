This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
public/
  favicon.ico
src/
  app/
    components/
      experience/
        experience.css
        experience.html
        experience.spec.ts
        experience.ts
      footer/
        footer.css
        footer.html
        footer.spec.ts
        footer.ts
      hero/
        hero.css
        hero.html
        hero.spec.ts
        hero.ts
      navbar/
        navbar.css
        navbar.html
        navbar.spec.ts
        navbar.ts
      projects/
        projects.css
        projects.html
        projects.spec.ts
        projects.ts
      skills/
        skills.css
        skills.html
        skills.spec.ts
        skills.ts
    app.config.ts
    app.css
    app.html
    app.routes.ts
    app.spec.ts
    app.ts
  index.html
  main.ts
  styles.css
.editorconfig
.gitignore
.prettierrc
angular.json
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="src/app/components/experience/experience.css">

</file>

<file path="src/app/components/experience/experience.html">
<section id="experience" class="py-5 min-vh-100 d-flex align-items-center">
  <div class="container">
    <!-- Encabezado -->
    <div class="mb-5">
      <h2 class="display-6 fw-bold text-light">Work Experience</h2>
    </div>

    <div class="row">
      <div class="col-lg-10">
        <div class="tech-card p-4">
          <div
            class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3"
          >
            <div>
              <h3 class="h4 fw-bold text-light mb-1">Full Stack Developer Intern</h3>
              <h4 class="h6 text-secondary mb-0">Ayesa · Seville, Spain</h4>
            </div>

            <span
              class="badge bg-secondary bg-opacity-25 text-light border border-secondary border-opacity-25 mt-2 mt-md-0 align-self-start align-self-md-center"
            >
              Apr 2025 – May 2025 · Feb 2026 – May 2026
            </span>
          </div>
       
<!-- Responsabilidades principales -->

<ul class="text-light opacity-75 mb-4">
    <li class="mb-2">Developed and maintained internal enterprise web frontends using <strong class="text-light">Angular</strong>.</li>
<li class="mb-2">
              Collaborated on backend business logic with <strong class="text-light">Java &amp; Spring Boot</strong>, querying and managing relational databases (<strong class="text-light">MySQL &amp; PostgreSQL</strong>).
            </li>
            <li class="mb-2">
              Maintained version control workflows and collaborative branching with <strong class="text-light">Git</strong>.
            </li>
            <li>
              Provided technical support and bug tracking in live production environments.
            </li>
</ul>

<div class="d-flex flex-wrap gap-2">
            <span class="badge bg-dark text-info border border-secondary">Java</span>
            <span class="badge bg-dark text-info border border-secondary">Spring Boot</span>
            <span class="badge bg-dark text-info border border-secondary">Angular</span>
            <span class="badge bg-dark border border-secondary text-info">PostgreSQL</span>
            <span class="badge bg-dark border border-secondary text-info">MySQL</span>
            <span class="badge bg-dark text-info border border-secondary">Git</span>
          </div>


      </div>
    </div>
  </div>
   </div>
</section>
</file>

<file path="src/app/components/experience/experience.spec.ts">
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Experience } from './experience';

describe('Experience', () => {
  let component: Experience;
  let fixture: ComponentFixture<Experience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience],
    }).compileComponents();

    fixture = TestBed.createComponent(Experience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
</file>

<file path="src/app/components/experience/experience.ts">
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {}
</file>

<file path="src/app/components/footer/footer.css">

</file>

<file path="src/app/components/footer/footer.html">
<footer class="py-4 text-center border-top" style="border-color: var(--border-card) !important;">
  <div class="container">
    <!-- Texto de Copyright -->
    <p class="mb-1 text-light">
      &copy; 2026 Sergio Algarrada Miranda. All rights reserved.
    </p>

    <!-- Subtítulo técnico -->
    <p class="small text-secondary mb-0">Built with Angular &amp; Bootstrap</p>
  </div>
</footer>
</file>

<file path="src/app/components/footer/footer.spec.ts">
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
</file>

<file path="src/app/components/footer/footer.ts">
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {}
</file>

<file path="src/app/components/hero/hero.css">

</file>

<file path="src/app/components/hero/hero.html">
<section id="about" class="py-5 min-vh-100 d-flex align-items-center">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-8">
        <!-- Indicador de disponibilidad profesional -->
        <span class="badge status-pill px-3 py-2 rounded-pill mb-3 fs-6 fw-normal">
          <i class="bi bi-circle-fill me-1" style="font-size: 0.6rem;"></i> Available for opportunities
        </span>
        
        <h1 class="display-4 fw-bold text-light mb-1">Sergio Algarrada Miranda</h1>
        <h2 class="fs-4 mb-4" style="color: #38bdf8;">Junior Full Stack & Multiplatform Developer</h2>
        
        <p class="lead text-light opacity-75 mb-4" style="line-height: 1.7;">
          Focused on building robust web solutions with <strong class="text-light">Java, Spring Boot, and Angular</strong>, alongside cross-platform projects using <strong class="text-light">Flutter and Firebase</strong>. Experienced with production workflows at Ayesa and clean software development practices.
        </p>

        <div class="d-flex gap-3">
          <a href="#projects" class="btn btn-tech px-4 py-2">
            View Projects <i class="bi bi-arrow-right ms-1"></i>
          </a>
          <a href="#experience" class="btn btn-outline-light px-4 py-2">
            Work Experience
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</file>

<file path="src/app/components/hero/hero.spec.ts">
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from './hero';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
</file>

<file path="src/app/components/hero/hero.ts">
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {}
</file>

<file path="src/app/components/navbar/navbar.css">
.navbar-toggler {
  color: #f8fafc;
  font-size: 1.25rem;
  padding: 0.25rem 0.6rem;
  background: transparent;
}

.navbar-toggler:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent-cyan);
}
</file>

<file path="src/app/components/navbar/navbar.html">
<nav class="navbar navbar-expand-lg fixed-top border-bottom" style="background-color: rgba(11, 17, 32, 0.85); backdrop-filter: blur(12px); border-color: var(--border-card) !important;">
  <div class="container">
    <!-- Brand / Logo -->
    <a class="navbar-brand fw-bold text-light tracking-wide" href="#about" (click)="closeMenu()">
      &lt;sergioam26 /&gt;
    </a>

    <!-- Botón hamburguesa para móviles -->
    <button
      class="navbar-toggler border-secondary text-light shadow-none"
      type="button"
      (click)="toggleMenu()"
      [attr.aria-expanded]="isMenuOpen()"
      aria-label="Toggle navigation"
    >
      <i class="bi" [class.bi-list]="!isMenuOpen()" [class.bi-x-lg]="isMenuOpen()"></i>
    </button>

    <!-- Menú colapsable -->
    <div class="collapse navbar-collapse" [class.show]="isMenuOpen()" id="navbarNav">
      <!-- Enlaces de navegación centrales -->
      <ul class="navbar-nav mx-auto my-3 my-lg-0 gap-lg-4 text-center">
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="#about" (click)="closeMenu()">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="#experience" (click)="closeMenu()">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="#projects" (click)="closeMenu()">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="#skills" (click)="closeMenu()">Skills</a>
        </li>
      </ul>

      <!-- Enlaces externos y botón de CV -->
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 pb-3 pb-lg-0">
        <div class="d-flex align-items-center gap-3">
          <a
            href="https://github.com/sergioam26"
            target="_blank"
            rel="noopener noreferrer"
            class="text-light fs-5 opacity-75 hover-opacity-100"
            title="GitHub"
          >
            <i class="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/sergio-algarrada-miranda-a5b353293"
            target="_blank"
            rel="noopener noreferrer"
            class="text-light fs-5 opacity-75 hover-opacity-100"
            title="LinkedIn"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </div>

        <a href="#" class="btn btn-cv-glow btn-sm px-3 py-1 d-flex align-items-center gap-2">
          <i class="bi bi-file-earmark-arrow-down-fill"></i>
          <span>Resume / CV</span>
        </a>
      </div>
    </div>
  </div>
</nav>
</file>

<file path="src/app/components/navbar/navbar.spec.ts">
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
</file>

<file path="src/app/components/navbar/navbar.ts">
import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  // Estado para controlar si el menú colapsable está abierto o cerrado en móviles

  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void{
      this.isMenuOpen.set(false);
  }

}
</file>

<file path="src/app/components/projects/projects.css">

</file>

<file path="src/app/components/projects/projects.html">
<section id="projects" class="py-5 min-vh-100 d-flex align-items-center">
  <div class="container">
    <!-- Encabezado de sección -->
    <div class="mb-5">
      <h2 class="display-6 fw-bold text-light">Featured Projects</h2>
    </div>

    <div class="row g-4">
      <div class="col-lg-8">
        <!-- Tarjeta de UrbiConnect -->
        <div class="tech-card p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="h4 fw-bold text-light mb-0">UrbiConnect</h3>
            <a href="https://github.com/sergioam26/UrbiConnect" target="_blank" rel="noopener noreferrer" class="text-light fs-5" title="GitHub Repository">
              <i class="bi bi-github"></i>
            </a>
          </div>

          <p class="text-light opacity-75 mb-3">
            Cross-platform municipal incident management platform developed for the Cantillana Town Hall. Enables real-time incident reporting, tracking, and communication between citizens and municipal teams.
          </p>

          <ul class="text-light opacity-75 mb-4">
            <li class="mb-2">Designed UI/UX flows and executed functional QA testing and validation.</li>
            <li class="mb-2">Configured and integrated cloud services with <strong class="text-light">Firebase Auth, Firestore &amp; Storage</strong>.</li>
            <li>Integrated geolocation and interactive maps using the <strong class="text-light">Google Maps API</strong>.</li>
          </ul>

          <div class="d-flex flex-wrap gap-2">
            <span class="badge bg-dark text-info border border-secondary">Flutter</span>
            <span class="badge bg-dark text-info border border-secondary">Dart</span>
            <span class="badge bg-dark text-info border border-secondary">Firebase</span>
            <span class="badge bg-dark text-info border border-secondary">Google Maps API</span>
            <span class="badge bg-dark border border-secondary text-light">AI-Assisted Dev</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</file>

<file path="src/app/components/projects/projects.spec.ts">
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projects } from './projects';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
</file>

<file path="src/app/components/projects/projects.ts">
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {}
</file>

<file path="src/app/components/skills/skills.css">

</file>

<file path="src/app/components/skills/skills.html">
<section id="skills" class="py-5 min-vh-100 d-flex align-items-center">
  <div class="container">
    <!-- Encabezado de la sección -->

    <div class="mb-5">
    
      <h2 class="display-6 fw-bold text-light">Technical Skills</h2>
    </div>

    <div class="row g-4">
      <!-- Aquí meteremos las tarjetas de habilidades -->

      <!-- 1. Backend -->

      <div class="col-md-6 col-lg-3">
        <div class="tech-card p-4 h-100">
          <div class="d-flex align-items-center gap-2 mb-3">
            <i class="bi bi-server fs-4" style="color: var(--accent-cyan)"></i>
            <h3 class="h5 fw-bold text-light mb-0">Backend</h3>
          </div>

          <div class="d-flex flex-wrap gap-2">
            <span class="badge bg-dark border border-secondary text-light">Java</span>
            <span class="badge bg-dark border border-secondary text-light">Spring Boot</span>
            <span class="badge bg-dark border border-secondary text-light">REST APIs</span>
            <span class="badge bg-dark border border-secondary text-light">Maven</span>
          </div>
        </div>
      </div>

      <!-- 2. Frontend & Mobile -->

      <div class="col-md-6 col-lg-3">
        <div class="tech-card p-4 h-100">
          <div class="d-flex align-items-center gap-2 mb-3">
            <i class="bi bi-phone-flip fs-4" style="color: var(--accent-cyan)"></i>
            <h3 class="h5 fw-bold text-light mb-0">Frontend & Mobile</h3>
          </div>

          <div class="d-flex flex-wrap gap-2">
            <span class="badge bg-dark border border-secondary text-light">Angular</span>
            <span class="badge bg-dark border border-secondary text-light">Flutter</span>
            <span class="badge bg-dark border border-secondary text-light">Dart</span>
            <span class="badge bg-dark border border-secondary text-light">HTML5 &amp; CSS3</span>
            <span class="badge bg-dark border border-secondary text-light">Bootstrap</span>
          </div>
        </div>
      </div>

      <!-- 3. Databases & Cloud -->
       <div class="col-md-6 col-lg-3">
        <div class="tech-card p-4 h-100">
          <div class="d-flex align-items-center gap-2 mb-3">
            <i class="bi bi-database fs-4" style="color: var(--accent-cyan);"></i>
            <h3 class="h5 fw-bold text-light mb-0">Databases & Cloud</h3>
          </div>

          <div class="d-flex flex-wrap gap-2">
            <span class="badge bg-dark border border-secondary text-light">MySQL</span>
            <span class="badge bg-dark border border-secondary text-light">PostgreSQL</span>
            <span class="badge bg-dark border border-secondary text-light">Firebase Firestore</span>
            <span class="badge bg-dark border border-secondary text-light">Firebase Auth</span>
          </div>
        </div>
      </div>

      <!-- 4. Tools & Methodologies -->
      <div class="col-md-6 col-lg-3">
        <div class="tech-card p-4 h-100">
          <div class="d-flex align-items-center gap-2 mb-3">
            <i class="bi bi-gear-wide-connected fs-4" style="color: var(--accent-cyan);"></i>
            <h3 class="h5 fw-bold text-light mb-0">Tools & Practices</h3>
          </div>

          <div class="d-flex flex-wrap gap-2">
            <span class="badge bg-dark border border-secondary text-light">Git &amp; GitHub</span>
            <span class="badge bg-dark border border-secondary text-light">GitFlow</span>
            <span class="badge bg-dark border border-secondary text-light">Scrum</span>
            <span class="badge bg-dark border border-secondary text-light">Javadoc &amp; Markdown</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
</file>

<file path="src/app/components/skills/skills.spec.ts">
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skills } from './skills';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
</file>

<file path="src/app/components/skills/skills.ts">
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {}
</file>

<file path="src/app/app.config.ts">
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
</file>

<file path="src/app/app.css">

</file>

<file path="src/app/app.routes.ts">
import { Routes } from '@angular/router';

export const routes: Routes = [];
</file>

<file path="src/app/app.spec.ts">
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
</file>

<file path="src/index.html">
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>PortfolioSergio</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
</file>

<file path="src/main.ts">
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
</file>

<file path=".editorconfig">
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single
ij_typescript_use_double_quotes = false

[*.md]
max_line_length = off
trim_trailing_whitespace = false
</file>

<file path=".gitignore">
# See https://docs.github.com/get-started/getting-started-with-git/ignoring-files for more about ignoring files.

# Compiled output
/dist
/tmp
/out-tsc
/bazel-out

# Node
/node_modules
npm-debug.log
yarn-error.log

# IDEs and editors
.idea/
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# Visual Studio Code
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/mcp.json
.history/*

# Miscellaneous
/.angular/cache
.sass-cache/
/connect.lock
/coverage
/libpeerconnection.log
testem.log
/typings
__screenshots__/

# System files
.DS_Store
Thumbs.db
</file>

<file path=".prettierrc">
{
  "printWidth": 100,
  "singleQuote": true,
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
</file>

<file path="angular.json">
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm"
  },
  "newProjectRoot": "projects",
  "projects": {
    "portfolio-sergio": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "portfolio-sergio:build:production"
            },
            "development": {
              "buildTarget": "portfolio-sergio:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
</file>

<file path="README.md">
# PortfolioSergio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
</file>

<file path="tsconfig.app.json">
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
</file>

<file path="tsconfig.json">
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
</file>

<file path="tsconfig.spec.json">
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
</file>

<file path="src/app/app.html">
<app-navbar></app-navbar>
<main>
  <app-hero></app-hero>
  <app-experience></app-experience>
  <app-projects></app-projects>
  <app-skills></app-skills>
</main>
<app-footer></app-footer>
</file>

<file path="src/app/app.ts">
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Footer } from './components/footer/footer';

@Component({
  imports: [ Navbar, Hero, Experience, Projects, Skills, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio-sergio');
}
</file>

<file path="src/styles.css">
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap-icons/font/bootstrap-icons.css";

:root {
  --bg-main: #0b1120;        /* Azul noche profundo y limpio */
  --bg-card: #131d31;        /* Azul pizarra sólido */
  --border-card: #1e293b;    /* Bordes definidos */
  --accent-blue: #0284c7;    /* Azul corporativo alegre */
  --accent-cyan: #38bdf8;    /* Cian fresco para destaques */
  --accent-green: #10b981;   /* Verde esmeralda (activo / disponible) */
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-main) !important;
  color: #f8fafc !important;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  padding-top: 70px; /* Compensación para la barra de navegación fixed-top */
}

/* Tarjeta estructurada con borde sutil al interactuar */
.tech-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 10px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.tech-card:hover {
  border-color: var(--accent-cyan);
  transform: translateY(-2px);
}

/* Botón primario azul sólido */
.btn-tech {
  background-color: var(--accent-blue);
  color: #ffffff;
  border: none;
  font-weight: 500;
  border-radius: 6px;
  transition: opacity 0.2s ease;
}

.btn-tech:hover {
  opacity: 0.9;
  color: #ffffff;
}

/* Badge de estado disponible */
.status-pill {
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--accent-green);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

/* Botón de CV con presencia activa y contraste limpio */
.btn-cv-glow {
  background-color: #0284c7;
  color: #ffffff !important;
  border: 1px solid #38bdf8;
  font-weight: 600;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.25);
  transition: all 0.2s ease;
}

.btn-cv-glow:hover {
  background-color: #0369a1;
  border-color: #7dd3fc;
  box-shadow: 0 0 16px rgba(56, 189, 248, 0.45);
  transform: translateY(-1px);
}

/* Enlaces de navegación activos y visibles */
.nav-link-custom {
  color: #f8fafc !important;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.2s ease;
  padding: 0.5rem 0;
}

.nav-link-custom:hover {
  color: #38bdf8 !important;
}

/* Línea inferior animada al pasar el cursor */
.nav-link-custom::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #38bdf8;
  transition: width 0.2s ease;
}

.nav-link-custom:hover::after {
  width: 100%;
}

/* Transición suave para enlaces de iconos de redes */
.hover-opacity-100 {
  transition: opacity 0.2s ease;
}

.hover-opacity-100:hover {
  opacity: 1 !important;
}
</file>

<file path="package.json">
{
  "name": "portfolio-sergio",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "packageManager": "npm@11.17.0",
  "dependencies": {
    "@angular/common": "^22.1.0",
    "@angular/compiler": "^22.1.0",
    "@angular/core": "^22.1.0",
    "@angular/forms": "^22.1.0",
    "@angular/platform-browser": "^22.1.0",
    "@angular/router": "^22.1.0",
    "bootstrap": "^5.3.8",
    "bootstrap-icons": "^1.13.1",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0"
  },
  "devDependencies": {
    "@angular/build": "^22.1.5",
    "@angular/cli": "^22.1.5",
    "@angular/compiler-cli": "^22.1.0",
    "jsdom": "^28.0.0",
    "prettier": "^3.8.1",
    "typescript": "~6.0.2",
    "vitest": "^4.0.8"
  }
}
</file>

</files>
