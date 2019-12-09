export default class GetService {
    constructor() {
        this._apiBase = 'http://localhost:3000/';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }
        return await res.json();
    }

    getCoffee = async () => {
        const coffee = await this.getResource(`coffee`);
        return coffee;
    }

    getItem = async (id) => {
        const itemId = id.slice(1);
        const item = await this.getResource(`coffee`)
            .then(res => res.filter(prod => (prod.name === itemId)));
        return item
    }

    getBest = async () => {
        const best = await this.getResource(`bestsellers`);
        return best;
    }

    getGoods = async () => {
        const best = await this.getResource(`goods`);
        return best;
    }
}

