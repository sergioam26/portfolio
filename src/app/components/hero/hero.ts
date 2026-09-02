import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly i18n = inject(TranslationService);
}
