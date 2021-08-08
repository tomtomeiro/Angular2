import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticleComponent } from './article/article.component';
import { CommentComponent } from './comment/comment.component';




const routes:Routes=[
  {path:'', component:WelcomeComponent},
  {path: 'users', component:UsersComponent },
  {path: 'expenses',component:ExpensesComponent },
  {path: 'articles',component: ArticleComponent},
  {path: 'comments',component: CommentComponent}
 
]
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],exports:[RouterModule]
})

export class AppRoutingModule { }
