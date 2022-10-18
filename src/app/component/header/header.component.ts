import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  miporfolio:any;

  theme: Theme = 'light-theme';


  constructor(private datosPorfolio:PorfolioService,
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miporfolio=data;
    });
    
    this.initializeTheme();
  }

  switchTheme() {
    this.document.body.classList.replace(
      this.theme, 
      this.theme === 'light-theme' 
      ? (this.theme = 'dark-theme') 
      : (this.theme = 'light-theme')
    );

  }
  
  initializeTheme = (): void => 
    this.renderer.addClass(this.document.body, this.theme);
  
}

export type Theme = 'light-theme' | 'dark-theme';
