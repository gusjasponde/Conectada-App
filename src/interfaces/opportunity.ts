export enum OpportunityType {
    internship = 1,
    research = 2,
};

export interface Opportunity {
    id: String,
    image?: String,
    opportunityType: OpportunityType,
    title: String,
    description: String,
};
