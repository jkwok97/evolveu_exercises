import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Post } from '../posts.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredDescription = '';
  enteredContent = '';
  private mode = 'create';
  private postId: string;
  post: Post;
  isLoading = false;

  constructor(
    public postService: PostService,
    public route: ActivatedRoute,
    public router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postService.getPost(this.postId).subscribe((postData) => {
          console.log(postData);
          this.post = {
            id: postData._id,
            title: postData.title,
            description: postData.description,
            content: postData.content
          }
        });
        this.isLoading = false;
      } else {
        this.mode = 'create';
        this.postId = '';
      }
    });
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      const post: Post = {
        id: '',
        title: form.value.title,
        description: form.value.description,
        content: form.value.content
      }
      this.postService.addPost(post);
    } else {
        console.log(this.postId)
        const post: Post = {
          id: this.postId,
          title: form.value.title,
          description: form.value.description,
          content: form.value.content
        }
        this.postService.updatePost(this.postId, post);
    }
    form.resetForm();
    this.router.navigate(['/']);
  }

}
