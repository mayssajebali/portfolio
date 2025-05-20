import { ExtraOptions, RouterModule, Routes } from '@angular/router'; 
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MentalSparkComponent } from './components/mental-spark/mental-spark.component';
import { MedplusComponent } from './components/medplus/medplus.component';
import { UnitrackerComponent } from './components/unitracker/unitracker.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

export const routes: Routes = [
  { path: '', title: 'Home', component: LandingPageComponent },
  { path: 'projects/mentalSpark', title: 'MentalSpark', component: MentalSparkComponent },
  { path: 'projects/medplus', title: 'MedPlus', component: MedplusComponent },
  { path: 'projects/unitracker', title: 'UniTracker', component: UnitrackerComponent },
  // Redirection de toutes les routes inconnues vers la page d'accueil
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
