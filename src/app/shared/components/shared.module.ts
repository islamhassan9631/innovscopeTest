
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";
import { RightSidebarComponent } from "./right-sidebar/right-sidebar.component";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';

import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { ScheudleComponent } from './scheudle/scheudle.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageboxComponent } from './messagebox/messagebox.component';
import { MatCardModule } from "@angular/material/card";
import { AddTaskComponent } from './add-task/add-task.component';


import { CardComponent } from './card/card.component';
import { TaskComponent } from './task/task.component';
import { ChartComponent } from "./chart/chart.component";
import { NgChartsModule } from "ng2-charts";
import { HighchartsChartModule } from "highcharts-angular";

@NgModule({
    declarations: [
      HeaderComponent,
      LeftSidebarComponent,
      RightSidebarComponent,
      ScheudleComponent,
      MessageboxComponent,
      AddTaskComponent,
      ChartComponent,
      CardComponent,
       TaskComponent
  
    ],
    imports: [
      CommonModule,
      MatDividerModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      FlexLayoutModule,
      MatMenuModule,
      MatListModule,
      RouterModule,
      MatListModule,
      MatIconModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      FormsModule,
      ReactiveFormsModule,
      MatCardModule,
     HighchartsChartModule,
     NgChartsModule,

    ],
    exports:[
      HeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    CardComponent,
    TaskComponent,
      ChartComponent,
   
     
    ],
   
  })
  export class SharedModule { }
  