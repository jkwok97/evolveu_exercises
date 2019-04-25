import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../posts.model';
import { PostsService } from '../post.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postSub: Subscription;
  isLoading = false;
  totalPosts = 0;
  postsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1,2,5,10];

  constructor(public postService: PostsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.postService.getPosts(this.postsPerPage, this.currentPage);
    this.postSub = this.postService.getPostUpdateListener().subscribe(
      (postData: {posts:Post[],postCount: number}) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
      }
    );
  };

  onDelete(postId: string) {
    this.isLoading = true;
    this.postService.deletePost(postId).subscribe(()=> {
      this.postService.getPosts(this.postsPerPage, this.currentPage);
    });
  };

  onChangePage(pageData: PageEvent) {
    console.log(pageData);
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.postService.getPosts(this.postsPerPage, this.currentPage);
    // this.isLoading = false;
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  };

}
