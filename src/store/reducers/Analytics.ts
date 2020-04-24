import { maskAmount } from '../../components/functions';
import { IColumn, IPortfolio } from '../interfaces';

const Analytics = {
	transfers: (state: any, action: any) => {
		let discountPercent = 6;

		function countItemAnalytics(aData: any) {
			for (let i = 0; i < aData.length; i++) {
				const item = aData[i];
				const dt: any = new Date(item.dt);
				const now: any = new Date();
				item.daysCount = (now - dt) / (1000 * 60 * 60 * 24);
				item.amountDisc = item.amount * (1 + discountPercent / 100 * item.daysCount / 366);
			}

			return aData;
		}

		let stateCopy = Object.assign({}, state);
		if (stateCopy.currentSection !== 'transfers') {
			console.warn('Аналитика пока доступна только для зачислений');
			return;
		}

		const newColumns: IColumn[] = [
			{
				width: '100px',
				field: 'dt',
				text: 'Дата',
				format: (val: any) => { const dt = new Date(val); return dt.toLocaleDateString() },
				visible: true
			},
			{
				width: '200px',
				field: 'Portfolio',
				text: 'Портфель',
				format: (Portfolio: IPortfolio) => { return Portfolio.name; },
				visible: true
			},
			{
				width: '150px',
				field: 'Portfolio',
				text: 'Статус',
				format: (Portfolio: IPortfolio) => { return Portfolio.isActive ? 'Активный' : 'Не активный'; },
				visible: true
			},
			{
				width: '150px',
				field: 'amount',
				text: 'Сумма',
				type: 'float',
				headerClassName: 'header-amount',
				style: { textAlign: 'right', paddingRight: '15px' },
				format: maskAmount,
				visible: true
			},
			{
				width: '120px',
				field: 'daysCount',
				text: 'Кол-во дней',
				type: 'float',
				style: { textAlign: 'right', paddingRight: '15px' },
				format: maskAmount,
				visible: true
			},
			{
				width: '120px',
				field: 'amountDisc',
				text: 'Под ' + discountPercent + ' %',
				type: 'float',
				headerClassName: 'header-amount',
				style: { textAlign: 'right', paddingRight: '15px' },
				format: maskAmount,
				visible: true
			}
		];

		stateCopy.columns = newColumns;
		countItemAnalytics(stateCopy.items);

		stateCopy.page = 0;
		return stateCopy;
	},

}

export default Analytics