import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1: String[] = [ 'Sales', 'In-Store Sales', 'Mail-Order SalesPrueba' ];
  multiset1 = [
    {
    data: [350, 450, 20],
    backgroundColor: [ '#6857E6','#009FEE','#F09959'] 
  }
  ]
  
}
