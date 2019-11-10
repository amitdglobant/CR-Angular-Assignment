import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatTooltipModule,
  MatToolbarModule,
  MatSliderModule,
  MatGridListModule,
  MatCardModule,
  MatDividerModule,
} from '@angular/material';

import { DragDropModule } from "@angular/cdk/drag-drop"

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatStepperModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    DragDropModule
  ],
  exports: [
   MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatStepperModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    DragDropModule
  ]
})
export class MaterialModule {}
