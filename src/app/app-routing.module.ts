import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DonationsComponent } from './donations/donations.component';
import { EventsComponent } from './events/events.component';
import { VisitComponent } from './visit/visit.component';
import { SermonsComponent } from './sermons/sermons.component';
import { MinistriesComponent } from './ministries/ministries.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'about', component: AboutComponent},
    { path: 'ministries', component: MinistriesComponent},
    { path: 'sermons', component: SermonsComponent},
    { path: 'events', component: EventsComponent},
    { path: 'donations', component: DonationsComponent},
    { path: 'visit', component: VisitComponent},

    // otherwise redirect to Home
    { path: '**', redirectTo: ''}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
