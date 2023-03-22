import http from '@/http-common';

class Service {
    get(data: any): Promise<any> {
        return http.get(`/last/${data}`);
    }
}

export default new Service;