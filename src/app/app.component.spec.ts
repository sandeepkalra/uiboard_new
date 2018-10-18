/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SettingsComponent } from "./settings/settings.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthComponent } from "./auth/auth.component";
import { ClarityModule } from "@clr/angular";
import { ROUTING } from "./app.routing";
import { APP_BASE_HREF } from "@angular/common";

describe('AppComponent', () => {

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                SettingsComponent,
				AuthComponent,
                MessagesComponent
            ],
            imports: [
                ClarityModule.forRoot(),
                ROUTING
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        });

        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;


    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create the app', async(() => {
        expect(compiled).toBeTruthy();
    }));


});
