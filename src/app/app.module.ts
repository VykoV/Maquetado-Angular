import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AcercaDeMiComponent } from './component/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { HardAndSoftSkillsComponent } from './component/hard-and-soft-skills/hard-and-soft-skills.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { LoginComponent } from './component/login/login.component';
import { BannerComponent } from './component/banner/banner.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    HardAndSoftSkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    LoginComponent,
    BannerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
