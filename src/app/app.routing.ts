/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthComponent } from './auth/auth.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'messages', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'settings', component: SettingsComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
