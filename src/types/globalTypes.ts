import {faker} from "@faker-js/faker";

export interface CustomerData {
    startDate: string;
    endDate: string;
    customer: string;
    impression: number;
    conversion: number;
    attributeMatches: number;
    conversionRate: number;
    avgFrequency: number;
    avgTimeToConversion: number;
    noDataImpressions?: boolean;
    noDataConversions?: boolean;
    lowConversionRate?: number;
}

export interface Alerts {
    lowConversionRate: number;
    averageTimeToConvert: number;
    averageImpression: number;
    noDataImpressions: boolean;
    noDataConversions: boolean;
}

export interface Configurations {
    impression: number;
    conversion: number;
    conversionRate: number;
}

export interface Tags {
    attributeMatches: number;
}

export interface Details {
    startDate: string;
    endDate: string;
    customerName: string;
}

export interface NewCustomerData {
    details: Details
    config: Configurations
    tags: Tags
    alerts: Alerts
}

export type SortConfig = {
    column: string;
    direction: "asc" | "desc";
};

export const mockTableData: CustomerData[] = Array.from({length: 10}).map(() => ({
    startDate: faker.date.past().toISOString(),
    endDate: faker.date.future().toISOString(),
    customer: faker.company.name(),
    impression: faker.number.int({min: 150000000}),
    conversion: faker.number.int({min: 100000000, max: 150000000}),
    attributeMatches: faker.number.int({max: 100000000}),
    conversionRate: faker.number.int({max: 100000000}),
    avgFrequency: faker.number.float({min: 1, max: 10, precision: 0.01}),
    avgTimeToConversion: faker.number.float({min: 10, max: 100, precision: 0.01}),
}));

