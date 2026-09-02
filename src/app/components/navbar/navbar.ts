import { Component, inject, signal } from '@angular/core';
import { TranslationService } from '../../services/translation';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  // Control del menú hamburguesa móvil

  protected readonly i18n= inject(TranslationService);

  protected readonly isMenuOpen = signal(false);

  // Control del desplegable de idiomas del CV

  protected readonly isCvMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
    this.isCvMenuOpen.set(false);
  }

  protected toggleCvMenu(event: Event): void {
    event.stopPropagation();
    this.isCvMenuOpen.update((open) => !open);
  }

  protected closeCvMenu(): void {
    this.isCvMenuOpen.set(false);
  }
}
