import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.css']
})
export class HardAndSoftSkillsComponent implements OnInit {
  
  skillFrontEnd:any;
  skillBackEnd:any;
  softSkill:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.skillFrontEnd=data.hardAndSoftSkills;
      this.skillBackEnd=data.hardAndSoftSkills;
      this.softSkill=data.hardAndSoftSkills;
    });
  }
}