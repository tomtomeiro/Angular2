import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Article } from './article.module';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: any=[];

  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadArticles();
    this.loadArticlesWP();
  }
  async loadArticlesWP(){
    try{
      this.articles= await this.restApi.getArticleP();
      console.log(this.articles)
    }catch(err){
      console.log(err.message)
    }
  }

  loadArticles(){
    this.restApi.getArticles().subscribe((data:{})=>{
      this.articles=data;
      console.log(data);
    })
  }
  
  
  


}
