export const testPortfolios = [
    { id: 1, name: 'Открытие Брокер', isActive: true, amount: 100500 },
    { id: 2, name: 'Финам', isActive: true, amount: 35000 },
    { id: 3, name: 'Тинькофф Инвестиции', isActive: true, amount: 120000 },
    { id: 4, name: 'Сбербанк', isActive: true, amount: 17000 },
    { id: 5, name: 'ВТБ Капитал', isActive: true, amount: 17000 },
    { id: 6, name: 'БКС Брокер', isActive: false, amount: undefined },
    { id: 7, name: 'ИК Фридом Финанс', isActive: true, amount: 17000 },
    { id: 8, name: 'Fidelity', isActive: true, amount: 17000 },
    { id: 9, name: 'Interactive brokers', isActive: true, amount: 800000 },
    { id: 10, name: 'TD Ameritrade', isActive: false }
];

export const testTransfers = [
    { id: 1, portfolioId: 2, currencyId: 1, dt: "2018-08-20T14:00:00.000Z", amount: "60000.00", Portfolio: testPortfolios[0] },
    { id: 2, portfolioId: 2, currencyId: 1, dt: "2018-08-27T14:00:00.000Z", amount: "190000.00", Portfolio: testPortfolios[0] },
    { id: 3, portfolioId: 2, currencyId: 1, dt: "2018-12-03T14:00:00.000Z", amount: "50000.00", Portfolio: testPortfolios[0] },
    { id: 4, portfolioId: 2, currencyId: 1, dt: "2018-12-10T14:00:00.000Z", amount: "50000.00", Portfolio: testPortfolios[0] },
];