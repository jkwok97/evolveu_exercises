import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './posts.model';

@Injectable({providedIn: 'root'})
export class PostService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    constructor(private http: HttpClient){}

    getPosts() {
        this.http.get<{message: string, posts: any}>('http://localhost:3000/api/posts')
            .pipe(map((postData) => {
                return postData.posts.map(post => {
                    return {
                        id: post._id,
                        title: post.title,
                        description: post.description,
                        content: post.content
                    }
                });
            }))
            .subscribe((modifiedPosts) => {
                this.posts = modifiedPosts;
                this.postsUpdated.next([...this.posts]);
            });
        // return [...this.posts];
    };

    getPostUpdatedListener() {
        return this.postsUpdated.asObservable();
    };

    addPost(post: Post) {
        this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts', post)
            .subscribe((responseData) => {
                console.log(responseData);
                const id = responseData.postId;
                post.id = id;
                this.posts.push(post);
                this.postsUpdated.next([...this.posts]);
            });
    };

    deletePost(postId: string) {
        this.http.delete(`http://localhost:3000/api/posts/` + postId)
            .subscribe(() => {
                console.log('Post deleted');
                const updatedPosts = this.posts.filter(post => post.id !== postId);
                this.posts = updatedPosts;
                this.postsUpdated.next([...this.posts]);
            });
    };
}