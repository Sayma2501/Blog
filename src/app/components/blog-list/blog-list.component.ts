import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { blogObj } from 'src/app/interfaces/blog';
import { DeleteBlogComponent } from '../delete-blog/delete-blog.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogList: blogObj[];
  searchText: any;

  constructor(private dialog: MatDialog) {
    this.blogList = [];
  }

  ngOnInit(): void {
    const records = localStorage.getItem('blogList');
    console.log(records);

    if (records != null) {
      this.blogList = JSON.parse(records);
    }
  }

  deleteBlog(id: any) {
    const oldRecords = localStorage.getItem('blogList');
    if (oldRecords !== null) {
      const blogList = JSON.parse(oldRecords);
      blogList.splice(blogList.findIndex((m: any) => m.blogId == id), 1)
      localStorage.setItem('blogList', JSON.stringify(blogList));
    }
    const records = localStorage.getItem('blogList');
    if (records != null) {
      this.blogList = JSON.parse(records);
    }
  }

  openDeleteConfirmationBox(blog: any) {
    const dialogRef = this.dialog.open(DeleteBlogComponent, {
      data: {
        message: 'Are you sure you want to delete this blog?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        const oldRecords = localStorage.getItem('blogList');
        if (oldRecords !== null) {
          const blogList = JSON.parse(oldRecords);
          blogList.splice(blogList.findIndex((m: any) => m.blogId == blog.blogId), 1)
          localStorage.setItem('blogList', JSON.stringify(blogList));
        }
        const records = localStorage.getItem('blogList');
        if (records != null) {
          this.blogList = JSON.parse(records);
        }
      }
    });
  }
}
