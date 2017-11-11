import moment from 'moment';
import { Injectable, Inject } from '@angular/core';

import { Api } from '../api'; 
import { reportTypes } from './reportTypes';
import { Report } from '../../interfaces/report';
import { SentReport } from '../../interfaces/sentReport';
import { ReportType } from '../../interfaces/reportType';

const response: SentReport = {
    id: 250,
    title: 'Reportado',
    description: 'Reportado com sucesso!',
};

@Injectable()
export class Reports {
    reportTypes: Array<ReportType>;
    lastUpdatedAt;

    constructor(
        @Inject(Api) private api: Api
    ) {}

    getReportTypes(): Promise<void | Array<ReportType>> {
        if (this.shouldRefresh()) {
            return this.refresh();
        }
        return Promise.resolve(this.reportTypes);
    }

    refresh(): Promise<void | Array<ReportType>> {
        // API Call
        return Promise.resolve(reportTypes)
            .then(reportTypes => {
                this.reportTypes = reportTypes;
                this.lastUpdatedAt = moment();
                return reportTypes;
            })
            .catch(error => {
                // [todo] send error to GA
                this.lastUpdatedAt = moment();
            });
    } 

    shouldRefresh(): boolean {
        if (this.reportTypes === undefined) return true;
        // 60 seconds
        const lastUpdateDiff = moment().diff(this.lastUpdatedAt);
        if (lastUpdateDiff > 60000) return true;
        return false;
    }

    submitReport(report: void | Report): Promise<SentReport> {
        // Send report to API
        return Promise.resolve(response);
    }
}
