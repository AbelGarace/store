import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DetailsOrder } from "../interfaces/detailsOrder.interface";
import { Order } from "../interfaces/order.interface";
import { Store } from "../interfaces/stores.interface";

@Injectable({
    providedIn: 'root'
})

export class DataService{
    private apiUrl='http://localhost:3000';
    constructor (private http: HttpClient){}

    getStores():Observable<Store[]>{
        return this.http.get<Store[]>(`${this.apiUrl}/stores`);
    }

    saveOrder(order: Order): Observable<Order>{
        return this.http.post<Order>(`${this.apiUrl}/orders`,order);
    }

    saveDetailsOrder(details:DetailsOrder): Observable<DetailsOrder>{
        return this.http.post<DetailsOrder>(`${this.apiUrl}/detailsOrders`,details);
    }
}
