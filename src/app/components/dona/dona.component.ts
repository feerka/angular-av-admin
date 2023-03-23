import { Component, Input  } from '@angular/core';
import { ChartData, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  ngOnChanges(): void {
    this.doughnutChartData={
   
      labels: this.labels,
      datasets: this.multisets
   
    }
   
  }

  @Input() tittle: String = '';
  @Input() labels: String[]  = [ 'Label1', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input() multisets = [
    { data: [ 350, 450, 100 ],
    backgroundColor: [ '#6857E6','#009FEE','#F02059'] }
  ]
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: this.multisets
  };

}
