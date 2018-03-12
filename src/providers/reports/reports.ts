import { Injectable, Inject } from '@angular/core';

import { ApiProvider } from '../api';
import { SentReport } from '../../interfaces/sentReport';
import { ReportType } from '../../interfaces/reportType';
import { Observable } from 'rxjs/Observable';

const response: SentReport = {
    title: 'Reportado',
    description: 'Reportado com sucesso!',
};

@Injectable()
export class ReportsProvider {
    constructor(
        @Inject(ApiProvider) private apiProvider: ApiProvider
    ) {}

    getReportTypes(): Observable<Array<ReportType>> {
        return this.apiProvider.getReportTypes();
    }

    submitReport(report): Observable<SentReport> {
        return this.apiProvider.submitReport(report)
            .map(() => response);
    }
}
