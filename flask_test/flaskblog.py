
from flask import Flask, render_template, url_for
app = Flask(__name__)


posts = [
	{
		'author':'Jeff Kwok',
		'title': 'Blog Post 1',
		'content': 'First post content',
		'date_posted': 'September 30, 2018'
	},
	{
		'author':'Landi Kwok',
		'title': 'Blog Post 2',
		'content': 'Second post content',
		'date_posted': 'October 1, 2018'
	},
]


@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', posts=posts)

@app.route("/about")
def about():
    return render_template('about.html', title='About')

if __name__ == '__main__':
	app.run(debug = True)