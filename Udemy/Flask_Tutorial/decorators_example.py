def hello(name='Jeff'):
    print('the hello() func has been run')

    def greet():
        return '    This is inside the greet()'

    def welcome():
        return '    This is inside welcome()'
    print(welcome())
    print(greet())

    if name=='Jeff':
        return greet
    else:
        return welcome

x = hello()
print(x())

def hi():
    return "Hi Jeff"

def other(func):
    print("some other code")
    print(func())

other(hi)

def new_decorator(func):

    def wrap_func():
        print("some code before exec func")

        func()

        print("code here, after exec func")

    return wrap_func

@new_decorator
def func_needs_decorator():
    print ("please decorate me")

# func_needs_decorator = new_decorator(func_needs_decorator)
func_needs_decorator()