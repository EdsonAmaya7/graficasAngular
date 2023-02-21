import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    // this.graficasService.getUsariosRedesSociales().subscribe(
    //   resp => {
    //     console.log(resp);
    //     const labels = Object.keys(resp)
    //     const datos = Object.values(resp)
    //     this.doughnutChartData = {
    //       labels: labels,
    //       datasets: [{ data: datos}]
    //     }
    //   }
    // )

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData = {
          labels: labels,
          datasets: [{ data: values }]
        }

      })
  }
  public doughnutChartLabels: string[] = []/* [ 'Dascargas', 'Ventas en tienda', 'Venta online' ] */;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: []
      },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

}