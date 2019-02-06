import {HttpClientImpl} from '../impl/http-client-impl';
import {BaseConnection} from '../impl/base-connection';
import {ApiConfig, HttpClient, Request, Response} from '..';
import {Observable} from 'rxjs';
import {HttpClientAxios} from '../impl/http-client-axios';
import {Connection} from '../def/connection';

export class FetchHandler {
    private baseConnection: Connection;

    constructor(private request: Request,
                private apiConfig: ApiConfig) {
        let httpClient: HttpClient;

        if (apiConfig.debugMode) {
            httpClient = new HttpClientAxios();
        } else {
            httpClient = new HttpClientImpl();
        }

        this.baseConnection = new BaseConnection(httpClient, this.apiConfig);
    }

    public doFetch(): Observable<Response> {
        return this.baseConnection.invoke(this.request);
    }
}
