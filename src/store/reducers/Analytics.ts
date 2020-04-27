import { maskAmount } from '../../components/functions';
import { IColumn, IPortfolio, IState } from '../interfaces';

const Analytics = {
	toggle: (state: IState, action: any): IState => {
		let stateCopy = Object.assign({}, state);
		stateCopy.analytics.show = action.show;
		return stateCopy;
	},

	transfers: (state: IState, action: any): IState => {
		const discountRate: number = action.discountRate ? action.discountRate : state.analytics.discountRate;
		const currentPortfolioValue: number = action.currentPortfolioValue ? action.currentPortfolioValue : state.analytics.currentPortfolioValue;

		function countItemAnalytics(aData: any) {
			for (let i = 0; i < aData.length; i++) {
				const item = aData[i];
				const dt: any = new Date(item.dt);
				const now: any = new Date();
				item.daysCount = (now - dt) / (1000 * 60 * 60 * 24);
				item.durationCoef = item.daysCount / 366;
				item.amountDisc = item.amount * (1 + discountRate / 100 * item.durationCoef);
			}

			return aData;
		}

		let stateCopy = Object.assign({}, state);
		if (stateCopy.currentSection !== 'transfers') {
			console.warn('Аналитика пока доступна только для зачислений');
			return stateCopy;
		}

		stateCopy.analytics.show = true;
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
				width: '120px',
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
				width: '140px',
				field: 'daysCount',
				text: 'Кол-во дней',
				type: 'float',
				headerClassName: 'header-amount',
				style: { textAlign: 'right', paddingRight: '15px' },
				format: maskAmount,
				visible: true
			},
			{
				width: '120px',
				field: 'amountDisc',
				text: 'Под ' + discountRate + ' %',
				type: 'float',
				headerClassName: 'header-amount',
				style: { textAlign: 'right', paddingRight: '15px' },
				format: maskAmount,
				visible: true
			}
		];

		stateCopy.columns = newColumns;
		countItemAnalytics(stateCopy.items);
		stateCopy.analytics.NPV = maskAmount(stateCopy.items.reduce((sum: number, item: any) => { return sum + item.amountDisc }, 0));
		stateCopy.analytics.amountAll = stateCopy.items.reduce((sum: number, item: any) => { return sum + item.amount }, 0);
		let amountAllXDuration = stateCopy.items.reduce((sum: number, item: any) => { return sum + item.amount * item.durationCoef }, 0)
		stateCopy.analytics.irr = (currentPortfolioValue - stateCopy.analytics.amountAll) / amountAllXDuration;

		stateCopy.settings.activePage = 0;
		return stateCopy;
	},

}

export default Analytics