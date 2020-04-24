interface ISortParam {
    field: string,
    type: string,
    ascOrder: boolean
}

interface IPortfolio {
    id: string,
    name: string,
    isActive: boolean,
    amount?: number
}

export type { ISortParam, IPortfolio }