import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';
import { ChatModalComponent } from 'app/chat-modal/chat-modal.component';
import { ChatButtonComponent } from 'app/chat-button/chat-button.component';

@NgModule({
  declarations: [LandingPageComponent, ChatModalComponent, ChatButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class LandingPageModule { }
