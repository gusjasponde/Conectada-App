import { IonicPage, NavController, NavParams, 
  ViewController, LoadingController, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';

import { ModalPage } from '../modal/modal';
import { Report } from '../../interfaces/report';
import { ReportType } from '../../interfaces/reportType';
import { Reports } from '../../providers/reports/reports';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {
  reportTypes: Array<ReportType> = [];
  report: Report = {
    title: '',
    description: '',
    type: 0,
  };

  reportTypesSub: Subscription;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams, 
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private reports: Reports
  ) {}

  submitReport() {
    return this.reports.submitReport(this.report)
      .subscribe(data => {
        const { title, description } = data;
        const modal = this.modalCtrl.create(ModalPage, data);
        modal.present();
      });
  }

  refresh($event) {
    this.reportTypesSub = this.reports.getReportTypes()
      .subscribe(reportTypes => {
        this.reportTypes = reportTypes;
        $event.complete();
      }, () => $event.cancel());
  }

  ionViewDidLoad() {
    this.reportTypesSub = this.reports.getReportTypes()
      .subscribe(reportTypes => (this.reportTypes = reportTypes));
  }

  ngOnDestroy() {
    this.reportTypesSub.unsubscribe();
  }
}
