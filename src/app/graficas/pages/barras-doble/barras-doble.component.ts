import { Component } from '@angular/core';


import { ChartData } from 'chart.js';
@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {
  // datos para las gráficas dadas por Fernando
  // https://gist.github.com/Klerith/579b300466750ba29d837db1cbf9eddf
  /*
  proveedoresData: ChartDataSets[] = [
    { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },
    { data: [50, 250, 30, 450, 200], label: 'Vendedor B' },
  ];
 
  proveedoresLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];
 
  productoData: ChartDataSets[] = [
    {
      data: [200, 300, 400, 300, 100],
      label: 'Carros',
      backgroundColor: 'blue',
    },
  ];
  */

  proveedoresData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        data: [100, 200, 300, 400, 500],
        label: 'Vendedor A',
      },
      {
        data: [50, 250, 30, 450, 200],
        label: 'Vendedor B',
      },
    ],
  };

  productoData: ChartData<'bar'> = {
    datasets: [
      {
        data: [200, 300, 400, 300, 100],
        label: 'Carros',
        backgroundColor: 'blue',
      },
    ],
  };
}