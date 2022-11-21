import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

  onInput(member: string) {
    this.newMemberName = member;
    // console.log(this.newMemberName);
  }

  onNumOfTeamsInput(value: string) {
    this.numberOfTeams = +value;
    console.log(value);
  }

  addMember() {
    if (!this.newMemberName.length) {
      this.errorMessage = "Name can't be empty!";
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    // console.log(this.members);
  }

  generateTeams() {
    this.teams = [];
    const allMembers = [...this.members];

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }

    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Invalid number of teams!';
      return;
    }
    this.errorMessage = '';

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        // console.log(randomIndex);
        const member = allMembers.splice(randomIndex, 1)[0];
        // console.log(member);
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }

    this.members = [];
    this.numberOfTeams = '';
  }
}
