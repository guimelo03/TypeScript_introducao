export class Negociacao {
    constructor(
        private _data: Date, 
        private readonly quantidade: number, 
        private readonly valor: number
    ) {}

    get volume(){
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime())
        return data;
    }

    get getQuantidade(): number {
        return this.quantidade;
    }

    get getValor(): number {
        return this.valor;
    }

    public static criaDe(dateString: string, quantidadeString: string, valorStrig: string): Negociacao{
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorStrig);
        return new Negociacao(date, quantidade, valor);
    }
}