import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {

  protected readonly i18n = inject(TranslationService);
}
