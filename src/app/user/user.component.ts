import { Component, EventEmitter, Input, Output } from '@angular/core';

// ______________________________________________________________________
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User {
  id: string;
  avatar: string;
  name: string;
}
// ______________________________________________________________________

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  // * INFO: For use with Signal
  // select = output<string>();

  // INFO: For use with Signal
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectedtUser() {
    this.select.emit(this.user.id);
  }
}
