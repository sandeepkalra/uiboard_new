import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';



export class MessageBody {
			title: string;
			message:string;
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

		loaded =false
		data = MessageResp;
		constructor(
				private http: HttpClient, 
				private ud: UserData) { 
		}

		postMessage(m MessageBody):observable<MessageResp> {
				this.http.post<MessageResp>("http://10.59.1.16:8080/api/post", m)
				.subscribe(data => this.data = data)
		}

		getMessages():Observable<MessageResp> {
				this.http.post<Message[]>("http://10.58.1.16:8080/api/read", this.ud)
				.subscribe(
						x => { this.data = x },
						err => { console.error('Observer got an error: ' + err)} ,
						() => {this.loaded = true;}
				)
		}

  ngOnInit() {
  }

}
