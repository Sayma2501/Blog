import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blogObj } from 'src/app/interfaces/blog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  blogObj: blogObj;
  editBlogForm: FormGroup;
  blogCategoryList: string[] = ['Food', 'Travel', 'Health and fitness', 'Lifestyle', 'Fashion', 'Photography'];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.blogObj = new blogObj();
    this.route.params.subscribe((data) => {
      this.blogObj.blogId = data['id'];
    })
    this.editBlogForm = this.fb.group({
      blogTitle: ['', Validators.required],
      blogDescription: ['', Validators.required],
      blogCategory: ['', Validators.required]
    });
  }

  ngOnInit(): void {
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

  editBlog(form: FormGroup) {
    if (form.valid) {
      const oldRecords = localStorage.getItem('blogList');
      if (oldRecords !== null) {
        const blogList = JSON.parse(oldRecords);
        blogList.splice(blogList.findIndex((m: any) => m.blogId == this.blogObj.blogId), 1)
        blogList.push(this.blogObj);
        localStorage.setItem('blogList', JSON.stringify(blogList));
      }
      this.router.navigateByUrl('/blogList');
    }
  }
}
