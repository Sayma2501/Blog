import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';

const routes: Routes = [
  {
    path: 'blogList',
    component: BlogListComponent
  },
  {
    path: 'createBlog',
    component: CreateBlogComponent
  },
  {
    path: 'updateBlog/:id',
    component: EditBlogComponent
  },
  {
    path: 'blogDetail/:id',
    component: BlogDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
