import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: [
  ]
})
export class AcountSettingsComponent implements OnInit {
  
  constructor( private settingsService: SettingsService  ) {}

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme( theme: string ) {
        
    this.settingsService.changeTheme( theme );
    
  }


}
