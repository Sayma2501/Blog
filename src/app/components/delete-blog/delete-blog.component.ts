import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.scss']
})
export class DeleteBlogComponent implements OnInit {

  // message: string;

  constructor(public dialogRef: MatDialogRef<DeleteBlogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onDismiss() {
    this.dialogRef.close(true);
  }

  onConfirm() {
    this.dialogRef.close(false);
  }
}
