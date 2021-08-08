import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Comment } from './comment.module';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments:any=[];

  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadComments();
  }
  loadComments(){
    this.restApi.getComments().subscribe((data: {})=>{
     this.comments =data;
      console.log(data);
    })
  }

}
