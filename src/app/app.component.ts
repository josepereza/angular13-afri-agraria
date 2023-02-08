import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afri-agraria';

  constructor(private translateService: TranslateService) {
    const browserLanguage = translateService.getBrowserLang()!;
    translateService.addLangs(['de', 'es', 'pt', 'en']);

    translateService.setDefaultLang('de');
   
  }
  
}
