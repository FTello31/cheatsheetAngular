import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { IAppConfig } from './app-config.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppConfig {
    static settings: IAppConfig;
    constructor(private http: HttpClient, handler: HttpBackend) {
        this.http = new HttpClient(handler);
    }
    load() {
        const jsonFile = `assets/config/config.${environment.name}.json`; //`assets/config/config.${environment.name}.json`
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response: IAppConfig) => {
                AppConfig.settings = <IAppConfig>response;
                resolve();
            }).catch((response: any) => {
                reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
}