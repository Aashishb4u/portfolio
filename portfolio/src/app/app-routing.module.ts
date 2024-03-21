import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { WorkComponent } from './pages/work/work.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import {SingleBlogComponent} from "./pages/single-blog/single-blog.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:  'home', component: HomeComponent},
  { path:  'about', component: AboutComponent},
  { path:  'services', component: ServicesComponent},
  { path:  'works', component: WorkComponent},
  { path:  'blogs', component: BlogsComponent},
  { path:  'blog/:id', component: SingleBlogComponent},
  { path:  'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
