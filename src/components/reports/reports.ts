import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ModalController } from 'ionic-angular';

import { Modal } from '../modal/modal';
import { Report, ReportType } from '../../services/reports/types';
import { ReportsService } from '../../services/reports/reports';

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class Reports {
  private reportTypes: void | Array<ReportType> = [];
  public report: void | Report = {
    title: '',
    description: '',
    type: 0,
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private ReportsService: ReportsService) {
  }

  private ionViewDidLoad(){
    this.getReportTypes();
  }

  private getReportTypes() {
    return this.ReportsService.getReportTypes()
      .then(reportTypes => {
        this.reportTypes = reportTypes;
      });
  }

  private submitReport() {
    return this.ReportsService.submitReport(this.report)
      .then(data => {
        const { title, description } = data;
        const modal = this.modalCtrl.create(Modal, data);
        modal.present();
      });
  }

  private refresh($event) {
    return this.getReportTypes()
      .then(() => $event.complete())
      .catch(() => $event.cancel());
  }
}
