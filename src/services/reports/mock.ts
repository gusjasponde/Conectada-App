import { ReportType, ReportResponse } from './types';

export const response: ReportResponse = {
    id: 250,
    title: 'Reportado',
    description: 'Reportado com sucesso!',
};

export const reportTypes: Array<ReportType> = [
    {
        id: 0,
        name: 'Outra',
    },
    {
        id: 1,
        name: 'Assédio',
    },
    {
        id: 2,
        name: 'Desperdício',
    },
    {
        id: 3,
        name: 'Roubo',
    },
    {
        id: 4,
        name: 'Perseguição',
    },
    {
        id: 5,
        name: 'Discriminação',
    },
    {
        id: 6,
        name: 'Acadêmica',
    }
];
