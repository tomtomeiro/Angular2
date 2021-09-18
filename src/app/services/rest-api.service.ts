import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../article/article.module';
import { Comment } from '../comment/comment.module';
import { Observable, throwError } from 'rxjs';
import {retry, catchError } from 'rxjs/Operators';





@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  base_url = "https://jsonplaceholder.typicode.com";
  httpOptions= new HttpHeaders({
    'Content-Type':'application/json'
  })
  constructor(private http: HttpClient) { }
  getArticles(): Observable<Article>{
    return this.http.get<Article>(this.base_url+'/posts')
    .pipe(retry(1))
  }
  getComments(): Observable<Comment>{
    return this.http.get<Comment>(this.base_url+'/comments')
    .pipe(retry(1))
  }
  getArticleP(){
    return new Promise((resolve, reject)=>{
      this.http.get(this.base_url+'/posts').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err)
        reject(err)
        
      })
    })
  }
}
