import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from './posts.model';

@Injectable({providedIn: 'root'})
export class PostService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    constructor(private http: HttpClient){}

    getPosts() {
        this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
            .subscribe((postData) => {
                this.posts = postData.posts;
                this.postsUpdated.next([...this.posts]);
            });
        // return [...this.posts];
    }

    getPostUpdatedListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(post: Post) {
        this.http.post<{message: string}>('http://localhost:3000/api/posts', post)
            .subscribe((responseData) => {
                console.log(responseData);
                this.posts.push(post);
                this.postsUpdated.next([...this.posts]);
            });
    }
}