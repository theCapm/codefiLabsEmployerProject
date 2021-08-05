import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-chat-modal',
    templateUrl: './chat-modal.component.html',
    styleUrls: ['./chat-modal.component.scss']
})
export class ChatModalComponent implements OnInit {
    chatForm: FormGroup;
    constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
        this.createForm();
    }

    ngOnInit(): void {}

    private createForm() {
        this.chatForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required]]
        });
    }

    submitForm() {
        console.log(this.chatForm.value);
        if (!this.chatForm.valid) {
            return;
        }

        this.chatForm.reset();
    }

    closeModal() {
      this.activeModal.close();
    }
}
