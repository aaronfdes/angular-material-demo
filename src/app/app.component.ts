import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  animal: string;
  name: string;
  albums = [];

  constructor(public dialog: MatDialog,private _lightbox: Lightbox) {}

  ngOnInit(){
    for (let i = 1; i <= 4; i++) {
      const src = 'http://www.w3schools.com/w3css/img_fjords.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'http://www.w3schools.com/w3css/img_fjords.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this.albums.push(album);
    }
  }

  open(index: number): void {
      this._lightbox.open(this.albums, index);
    }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
