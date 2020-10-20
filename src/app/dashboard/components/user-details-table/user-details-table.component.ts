import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { UserDetailsService } from '../../user-details.service';
import { UserDetails } from '../../user-details.model';

@Component({
  selector: 'app-user-details-table',
  templateUrl: './user-details-table.component.html',
  styleUrls: ['./user-details-table.component.css'],
})
export class UserDetailsTableComponent implements OnInit {
  columns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber'];
  dataSource: UserDetails[] = [];

  constructor(private userDetailsService: UserDetailsService) {}

  ngOnInit(): void {
    this.updateList();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  updateList() {
    this.dataSource = this.userDetailsService.getList();
  }
}
