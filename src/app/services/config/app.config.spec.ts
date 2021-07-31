import { HttpBackend, HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { environment } from "src/environments/environment";
import { AppConfig } from "./app.config";

describe('AppConfig', () => {
    let service: AppConfig;
    let httpMock: HttpTestingController;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
              {provide: HttpBackend},
              { provide: HttpClient},
              { provide: AppConfig}
            ]
          });
      service = TestBed.inject(AppConfig);
      httpMock=TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
      });

      it('should be created', () => {
        expect(service).toBeTruthy();
      });
});