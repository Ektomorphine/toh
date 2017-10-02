import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Hero} from './model-hero';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService{

    constructor(private http: Http){ }



    postData(obj: Hero){
        const body = JSON.stringify(obj);

        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.post('http://localhost:3000/heroes', body, { headers: headers })
                        .map((resp:Response)=>resp.json())
                        .catch((error:any) =>{return Observable.throw(error);});
    }

    getData(){
        return this.http.get('./assets/data.json');
    }
}
    

