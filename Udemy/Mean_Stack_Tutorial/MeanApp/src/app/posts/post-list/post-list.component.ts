import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../posts.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postSub: Subscription;
  isLoading = false;

  constructor(public postService: PostsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener().subscribe(
      (post: Post[]) => {
        this.isLoading = false;
        this.posts = post;
      }
    );
  };

  onDelete(postId: string) {
    this.postService.deletePost(postId);
  };

  ngOnDestroy() {
    this.postSub.unsubscribe();
  };

}
