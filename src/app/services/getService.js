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

    getBest = async () => {
        const best = await this.getResource(`bestsellers`);
        return best;
    }
}

