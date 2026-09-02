import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly i18n= inject(TranslationService)
}
