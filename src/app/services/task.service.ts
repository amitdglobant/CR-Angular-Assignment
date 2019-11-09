import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private card = new Subject();

    setCard(cardDetails: any) { // TODO: Create an interface for card
        this.card.next(cardDetails);
    }

    getCard() {
        return this.card.asObservable();
    }

}