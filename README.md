Next let's fix the dropdown issue, so let's add BsDropdownModule to app.module.ts imports:
BsDropdownModule.forRoot()

Then go to nav.component.html and change the dropdown div:
            <div class="dropdown" *ngIf="loggedIn" dropdown>
                <a class="text-light dropdown-toggle" dropdownToggle>Welcome user</a>
                <div class="dropdown-menu mt-3" *dropdownMenu>
                  <a class="dropdown-item">Edit Profile</a>
                  <li class="dropdown-divider"></li>
                  <a class="dropdown-item" (click)="logout()">Logout</a>
                </div>
            </div>




