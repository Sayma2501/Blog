import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blogObj } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blogObj: blogObj;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.blogObj = new blogObj();
    this.route.params.subscribe((data) => {
      this.blogObj.blogId = data['id'];
    })
  }

  ngOnInit(): void {
    debugger
    const oldRecords = localStorage.getItem('blogList');
    if (oldRecords !== null) {
      const blogList = JSON.parse(oldRecords);
      const currentBlog = blogList.find((m: any) => m.blogId == this.blogObj.blogId);
      if (currentBlog !== undefined) {
        this.blogObj.blogTitle = currentBlog.blogTitle;
        this.blogObj.blogDescription = currentBlog.blogDescription;
        this.blogObj.blogCategory = currentBlog.blogCategory;
      }
    }
  }

}
