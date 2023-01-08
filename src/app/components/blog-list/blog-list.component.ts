import { Component, OnInit } from '@angular/core';
import { blogObj } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogList: blogObj[];
  searchText: any;

  constructor() {
    this.blogList = [];
  }

  ngOnInit(): void {
    const records = localStorage.getItem('blogList');
    console.log(records);

    if (records != null) {
      this.blogList = JSON.parse(records);
    }
  }

  openBlogDetailPage(id: any) {
  }

  deleteBlog(id: any) {
    const oldRecords = localStorage.getItem('blogList');
    if (oldRecords !== null) {
      const blogList = JSON.parse(oldRecords);
      blogList.splice(blogList.findIndex((m: any) => m.blogId == id), 1)
      // userList.push(this.userObj);
      localStorage.setItem('blogList', JSON.stringify(blogList));
    }
    const records = localStorage.getItem('blogList');
    if (records != null) {
      this.blogList = JSON.parse(records);
    }
  }
}
