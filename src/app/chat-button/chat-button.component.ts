import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatModalComponent } from 'app/chat-modal/chat-modal.component';

@Component({
    selector: 'app-chat-button',
    templateUrl: './chat-button.component.html',
    styleUrls: ['./chat-button.component.scss']
})
export class ChatButtonComponent implements OnInit {
    constructor(private modalService: NgbModal) {}

    ngOnInit(): void {}

    openFormModal() {
        const modalRef = this.modalService.open(ChatModalComponent);

        modalRef.result
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
