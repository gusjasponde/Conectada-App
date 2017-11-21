export enum ReportType {
    Other,
    Harassment,
    Waste,
    Theft,
    Persecution,
    Discrimination,
    Academic,
};

export interface Report {
    title: String,
    description: String,
    type: ReportType,
};
