import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule } from '@angular/router';

import { DefultComponent } from './defult.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule } from '@angular/material/sidenav'
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DefultComponent,
DashboardComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule,
  SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    
   
   
  ],
  
 
})
export class DefultModule { }
