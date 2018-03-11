import { IonicPage, ModalController } from 'ionic-angular';
import { Component, OnDestroy } from '@angular/core';

import { ModalPage } from '../modal/modal';
import { Report } from '../../interfaces/report';
import { ReportType } from '../../interfaces/reportType';
import { ReportsProvider } from '../../providers/reports/reports';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage implements OnDestroy {
  reportTypes: Array<ReportType> = [];
  report: Report = {
    title: '',
    description: '',
    type: 0,
  };

  reportTypesSub: Subscription;

  constructor(
    private modalCtrl: ModalController,
    private reportsProvider: ReportsProvider
  ) {}

  submitReport() {
    return this.reportsProvider.submitReport(this.report)
      .subscribe(data => {
        const modal = this.modalCtrl.create(ModalPage, data);
        modal.present();
      });
  }

  refresh($event) {
    this.reportTypesSub = this.reportsProvider.getReportTypes()
      .subscribe(reportTypes => {
        this.reportTypes = reportTypes;
        $event.complete();
      }, () => $event.cancel());
  }

  ionViewDidLoad() {
    this.reportTypesSub = this.reportsProvider.getReportTypes()
      .subscribe(reportTypes => (this.reportTypes = reportTypes));
  }

  ngOnDestroy() {
    this.reportTypesSub.unsubscribe();
  }
}
