import { Component ,ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  private newLabel? = 'New label';

  constructor() {
    Chart.register()
  }

  public lineChartData = {
    datasets: [
      {
        data: [ 65, 59,  81, 56, 20, 40,80,],
        label: 'Daily',
        yAxisID: 'y1',
        backgroundColor: 'rgba(80, 81, 249, 0.35)',
        borderColor: 'rgba(80, 81, 249, 1)',
        pointBackgroundColor: 'gba(80, 81, 249, 0.35)',
        pointBorderColor: 'rgba(80, 81, 249, 1)',
        pointHoverBackgroundColor: 'rgba(80, 81, 249, 1)',
        pointHoverBorderColor: 'rgba(80, 81, 249, 0.35)',
        fill: 'origin',
      },
     
      {
        data: [ 28, 48, 40, 19, 86, 27, 90 ],
        label: 'Weekly',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: 'red',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Monthly',
        backgroundColor:'rgba(30, 167, 255, 0.38)',
        borderColor: 'rgba(30, 167, 255, 1)', 
        
         pointBackgroundColor: 'rgba(30, 167, 255, 1)',
        pointBorderColor: 'rgba(30, 167, 255, 1)',
        pointHoverBackgroundColor: 'rgba(30, 167, 255, 1)',
        pointHoverBorderColor: 'rgba(30, 167, 255, 1)',
         fill: 'origin',
      },
      
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };

  public lineChartOptions : ChartConfiguration['options']= {
    
    elements: {
    
      line: {
        tension: 0.3
      },
      
     
  },
  
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      
      
        // ticks: {
        //   color: 'red',
        // }
      
    },

    plugins: {
      legend: { display: true , position: 'top', fullSize:true,
      align: 'end',  labels: {
        boxWidth: 0
      }, 
       
    },
      // annotation: {
      //   annotations: [
      //     {
      //       type: 'line',
      //       scaleID: 'x',
      //       value: 'March',
      //       borderColor: 'orange',
      //       borderWidth: 2,
      //       label: {
      //         display: true,
      //         position: 'center',
      //         color: 'orange',
      //         content: 'LineAnno',
      //         font: {
      //           weight: 'bold'
      //         }
      //       }
      //     },
      //   ],
      // }
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // private static generateNumber(i: number): number {
  //   return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  // }

  // public randomize(): void {
  //   for (let i = 0; i < this.lineChartData.datasets.length; i++) {
  //     for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
  //       this.lineChartData.datasets[i].data[j] = ChartComponent.generateNumber(i);
  //     }
  //   }
  //   this.chart?.update();
  // }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  // public hideOne(): void {
  //   const isHidden = this.chart?.isDatasetHidden(1);
  //   this.chart?.hideDataset(1, !isHidden);
  // }

  // public pushOne(): void {
  //   this.lineChartData.datasets.forEach((x, i) => {
  //     const num = ChartComponent.generateNumber(i);
  //     x.data.push(num);
  //   });
  //   this.lineChartData?.labels?.push(`Label ${ this.lineChartData.labels.length }`);

  //   this.chart?.update();
  // }

  public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = 'green';
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  // public changeLabel(): void {
  //   const tmp = this.newLabel;
  //   this.newLabel = this.lineChartData.datasets[2].label;
  //   // this.lineChartData.datasets[2].label = tmp;

  //   this.chart?.update();
  // }
  
}
