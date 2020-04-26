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
    width?: string, //todo - number
    field: string,
    text: string,
    type?: string,
    visible: true
    headerClassName?: string,
    style?: object,
    format?: any, //todo - make required?
    headerStyle? : any,
}

export interface ISettings{
    rowsinPage: number,
    activePage: number,
    withCheckBoxes: boolean,
    showDisplaySettings: boolean,
    showAddEditBlock: boolean,
    editItem: any,
    shiftClickItemId: any,
    toolBarRowId: any
}

export interface IState{
    analytics: any,
    currentSection: string,
    columns: IColumn[],
    items: any,
    selectedItems: any,
    settings: ISettings,
    showThrobber: boolean,
    sortParams: ISortParam[]
}