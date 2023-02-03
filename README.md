Next let's make sure the cancel register works, so let's add an output for it in register.component.ts:
@Output() cancelRegister = new EventEmitter<boolean>();
and also a cancel method:
cancel() {
    this.cancelRegister.emit(false);
}

Then add this functionality to the cancel button in register.component.html:
        <button (click)="cancel()" class="btn btn-default mr-2" type="button">
            Cancel
        </button>

And use this in the parent(home component), so in home.component.ts add a new event:
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}

And use the event in home.component.html:
<p><app-register [usersFromHomeComponent]="users" (cancelRegister)="cancelRegisterMode($event)"></app-register></p>