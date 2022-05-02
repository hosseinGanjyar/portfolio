import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EducationItemComponent } from './educations/education-item/education-item.component';
import { EducationsComponent } from './educations/educations.component';
import { ExperienceItemComponent } from './experiences/experience-item/experience-item.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { LanguageComponent } from './licences/language/language.component';
import { LicencesComponent } from './licences/licences.component';
import { MainComponent } from './main/main.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { SocialItemComponent } from './shared/socials/social-item/social-item.component';
import { SocialsComponent } from './shared/socials/socials.component';
import { SkillItemComponent } from './skills/skill-item/skill-item.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  imports: [CommonModule, ModulesRoutingModule, CoreModule],
  declarations: [
    MainComponent,
    ExperiencesComponent,
    EducationsComponent,
    SkillsComponent,
    SkillItemComponent,
    ExperienceItemComponent,
    EducationItemComponent,
    LicencesComponent,
    LanguageComponent,
    SocialsComponent,
    SocialItemComponent,
    ContactInfoComponent,
  ],
})
export class ModulesModule {}
