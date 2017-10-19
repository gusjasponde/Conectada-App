import { Injectable, Inject } from '@angular/core';
import { ApiService } from '../api'; 

import moment from 'moment';

import { response, reportTypes } from './mock';
import { Report, ReportResponse, ReportType } from './types';

@Injectable()
export class ReportsService {
    reportTypes: Array<ReportType>;
    lastUpdatedAt;

    constructor(
        @Inject(ApiService) private api: ApiService) {
    }

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

    submitReport(report: void | Report): Promise<ReportResponse> {
        // Send report to API
        return Promise.resolve(response);
    }
}
