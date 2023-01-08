import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blogObj } from 'src/app/interfaces/blog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  blogObj: blogObj;
  createBlogForm: FormGroup;
  blogCategoryList: string[] = ['Food', 'Travel', 'Health and fitness', 'Lifestyle', 'Fashion', 'Photography'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.blogObj = new blogObj();
    this.createBlogForm = this.fb.group({
      blogTitle: ['', Validators.required],
      blogDescription: ['', Validators.required],
      blogCategory: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getNewBlogId() {
    const oldRecords = localStorage.getItem('blogList');
    if (oldRecords !== null) {
      const blogList = JSON.parse(oldRecords);
      return blogList.length + 1;
    } else {
      return 1;
    }
  }

  createBlog(form: FormGroup) {
    if (form.valid) {
      const latestId = this.getNewBlogId();
      this.blogObj.blogId = latestId;
      const oldRecords = localStorage.getItem('blogList');
      if (oldRecords !== null) {
        const blogList = JSON.parse(oldRecords);
        blogList.push(this.blogObj);
        localStorage.setItem('blogList', JSON.stringify(blogList));
      } else {
        const blogArr = [];
        blogArr.push(this.blogObj);
        localStorage.setItem('blogList', JSON.stringify(blogArr));
      }
      this.router.navigateByUrl('/blogList');
    } else {

    }

  }
}
