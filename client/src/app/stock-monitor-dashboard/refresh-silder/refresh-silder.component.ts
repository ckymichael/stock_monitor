import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-refresh-silder',
  templateUrl: './refresh-silder.component.html',
  styleUrls: ['./refresh-silder.component.scss']
})
export class RefreshSilderComponent {
  value = 5;
}
