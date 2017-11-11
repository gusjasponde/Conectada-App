import moment from 'moment';
import { Injectable, Inject } from '@angular/core';

import { Api } from '../api'; 
import { reportTypes } from './reportTypes';
import { Report } from '../../interfaces/report';
import { SentReport } from '../../interfaces/sentReport';
import { ReportType } from '../../interfaces/reportType';
import { Observable } from 'rxjs/Observable';

const response: SentReport = {
    id: 250,
    title: 'Reportado',
    description: 'Reportado com sucesso!',
};

@Injectable()
export class Reports {
    constructor(
        @Inject(Api) private api: Api
    ) {}

    getReportTypes(): Observable<Array<ReportType>> {
        return Observable.from(Promise.resolve(reportTypes));
    }

    submitReport(report: void | Report): Observable<SentReport> {
        return Observable.from(Promise.resolve(response));
    }
}
