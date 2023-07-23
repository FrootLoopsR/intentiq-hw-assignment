import {CustomerData, NewCustomerData} from '../types/globalTypes';

export const createCustomerData = (newCustomerData: NewCustomerData): CustomerData => {
    return {
        startDate: newCustomerData.details.startDate,
        endDate: newCustomerData.details.endDate,
        customer: newCustomerData.details.customerName,
        impression: newCustomerData.config.impression,
        conversion: newCustomerData.config.conversion,
        conversionRate: newCustomerData.config.conversionRate,
        attributeMatches: newCustomerData.tags.attributeMatches,
        avgFrequency: newCustomerData.alerts.averageImpression,
        avgTimeToConversion: newCustomerData.alerts.averageTimeToConvert,
        noDataImpressions: newCustomerData.alerts.noDataImpressions,
        noDataConversions: newCustomerData.alerts.noDataConversions,
        lowConversionRate: newCustomerData.alerts.averageTimeToConvert
    }
}

export const isDateStringValid = (dateString: string): boolean => {
    const isoDateFormatRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    return isoDateFormatRegex.test(dateString);
};

export const convertToDDMMYYYY = (isoDateString: string): string => {
    const date = new Date(isoDateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
};
