import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http){}

    storeServers(servers: any[]) {
        const headers = new Headers({'content-type': 'application/json'});
        // return this.http.post('https://angular-dummy-2061b.firebaseio.com/data.json', servers, {headers: headers});
        return this.http.put('https://angular-dummy-2061b.firebaseio.com/data.json', servers, {headers: headers});
    }

    getServers() {
        return this.http.get('https://angular-dummy-2061b.firebaseio.com/data.json').map(
            (response: Response) => {
                const data = response.json();
                for (const server of data) {
                    server.name = 'Fetched ' + server.name;
                }
                return data;
            }
        ).catch(
            (error: Response) => {
                console.log(error);
                return Observable.throw('Something Went Wrong!');
            }
        );
    }

    getAppName() {
        return this.http.get('https://angular-dummy-2061b.firebaseio.com/appName.json').map(
            (response: Response) => {
                return response.json();
            }
        );
    }
}
