import { IonicPage, NavController, NavParams, 
  ViewController, LoadingController, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';

import { ModalPage } from '../modal/modal';
import { Report } from '../../interfaces/report';
import { ReportType } from '../../interfaces/reportType';
import { Reports } from '../../providers/reports/reports';

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {
  reportTypes: void | Array<ReportType> = [];
  report: void | Report = {
    title: '',
    description: '',
    type: 0,
  };

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams, 
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private reports: Reports
  ) {}

  ionViewDidLoad(){
    this.getReportTypes();
  }

  getReportTypes() {
    return this.reports.getReportTypes()
      .then(reportTypes => {
        this.reportTypes = reportTypes;
      });
  }

  submitReport() {
    return this.reports.submitReport(this.report)
      .then(data => {
        const { title, description } = data;
        const modal = this.modalCtrl.create(ModalPage, data);
        modal.present();
      });
  }

  refresh($event) {
    return this.getReportTypes()
      .then(() => $event.complete())
      .catch(() => $event.cancel());
  }
}
