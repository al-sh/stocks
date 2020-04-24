export interface ISortParam {
    field: string,
    type: string,
    ascOrder: boolean
}

export interface IPortfolio {
    id: number,
    name: string,
    isActive: boolean,
    amount?: number,
    Transfers?: ITransfer[]
}

export interface ITransfer {
    id: number,
    currencyId: number,
    dt: string,
    amount: number,
    Portfolio: IPortfolio
}

export interface IColumn{
    width: string, //todo - number
    field: string,
    text: string,
    type?: string,
    headerClassName?: string,
    style?: object,
    format?: any, //todo - make required?
    visible: true
}
