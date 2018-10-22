import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject, ReplaySubject} from 'rxjs';
import {map, filter, switchMap} from 'rxjs/operators';


export class MessageBody {
    title: string;
    message: string;
    email: string;
    password: string;
}

export class MessageResp {
    code: number;
    message: string;
    body: MessageBody[];
}

export class UserData {
}


@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    providers: [UserData, MessageBody],
    styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

    loaded = false;
    data:MessageResp;

    constructor(
        private http: HttpClient,
        private ud: UserData) {
    }

    postMessages(m: MessageBody) {
        this.http.post<MessageResp>(
            "http://localhost:8080/api/post", m).subscribe(data => this.data = data)
    }

    getMessages() {
        this.http.post<MessageResp>("http://localhost:8080/api/read", this.ud)
            .subscribe(
                x => { console.log("getMsg - data = ", x); /* data.x = x */},
                err => {console.error('Observer got an error: ' + err);},
                () => {console.log("loading complete") , this.loaded = true;}
            )
    }

    ngOnInit() {
    }

}
