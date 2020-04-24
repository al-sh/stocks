import { maskAmount } from '../../components/functions';
import { IPortfolio, ITransfer } from '../interfaces';

const Switch = {

	transfers: (state: any, action: any) => {
		let stateCopy = Object.assign({}, state);
		stateCopy.currentSection = 'transfers';
		stateCopy.columns = [
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
			}
		];

		//const newItems = await getDataFromBack('/transfers.getall');  
		//console.log(newItems);
		stateCopy.items = action.items;

		stateCopy.page = 0;
		return stateCopy;
	},

	portfolios: (state: any, action: any) => {
		let stateCopy = Object.assign({}, state);
		stateCopy.currentSection = 'portfolios';
		stateCopy.columns = [
			{
				width: '250px',
				field: 'name',
				text: 'Название',
				visible: true
			},
			{
				width: '160px',
				field: 'isActive',
				text: 'Статус',
				format: (isActive: boolean) => { return isActive ? 'Активный' : 'Не активный'; },
				visible: true
			},
			{
				width: '150px',
				field: 'Transfers',
				text: 'Сумма',
				type: 'float',
				style: { textAlign: 'right', paddingRight: '15px' },
				format: (Transfers: ITransfer[]) => {
					if (Transfers) { //todo: add transfers to testPortfolios
						return maskAmount(Transfers.reduce((sum, item) => { return sum + item.amount }, 0))
					}
				},
				visible: true
			}
		]

		//console.log(newItems);
		stateCopy.items = action.items;

		stateCopy.page = 0;
		return stateCopy;
	}
}

export default Switch