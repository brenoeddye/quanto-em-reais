import http from '@/http-common';

class Service {
    async getDolar(): Promise<object> {
        return await http.get(`/last/USD-BRL`)
            .then((res: any) => {
                return res.data.USDBRL.high
            })
            .catch((e: Error) => {
                return e
            })
    }
    async getEuro(): Promise<object> {
        return await http.get(`/last/EUR-BRL`)
            .then((res: any) => {
                return res.data.EURBRL.high
            })
            .catch((e: Error) => {
                return e
            })
    }
    async getBitcoin(): Promise<object> {
        return await http.get(`/last/BTC-BRL`)
            .then((res: any) => {
                return res.data.BTCBRL.high
            })
            .catch((e: Error) => {
                return e
            })
    }
}

export default new Service;