export enum Operator {
    Plus = '+',
    Minus = '-',
    Multiply = '*',
    Power = '^',
    Divide = '/',
    Sqrt = 'sqrt',
    Equality = '=',

}

export enum BtnType {
    Operator = 'OPERATOR',
    Number = 'NUMBER',
    Symbol = 'SYMBOL',
    Bracket = 'BRACKET'
}

export enum Symbol {
    Dot = '.',
}

export enum Bracket {
    OpenBracket = '(',
    CloseBracket = ')'
}

export interface ICalcBtn {
    operator?: Operator,
    number?: number
    symbol?: Symbol,
    bracket?: Bracket,
    type: BtnType,
    className?: string
}
