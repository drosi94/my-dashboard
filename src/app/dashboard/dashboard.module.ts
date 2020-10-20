import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AgmCoreModule } from '@agm/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MapComponent } from './components/map/map.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { UserDetailsTableComponent } from './components/user-details-table/user-details-table.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { UserDetailsService } from './user-details.service';
import { UserAddDetailsFormComponent } from './components/user-details-table/user-add-details-form/user-add-details-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    MapComponent,
    CalendarComponent,
    UserDetailsTableComponent,
    UserAddDetailsFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMJ-Owezb8TFAgvnKqQMNlrvaFPsaGjZA',
    }),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
  ],
  providers: [UserDetailsService]
})
export class DashboardModule {}
