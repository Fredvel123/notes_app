# Notes App Server

I designed the database on: https://dbdiagram.io/home

<img src='./notes_db_design.png'>

you can see in the db design pdf

# End Points REST Api


## Get All Users

METHOD: GET
~~~
https://www.example.com/api/users/all 
~~~

``` js
const getAllUsers = async () => {
    const url = 'https://www.example.com/api/users/all';
    const request = await fetch(url);
    const response = await request.json();
    return response;
}     
```

## Create New User (Sign Up)

METHOD: POST
~~~
https://www.example.com/api/auth/signup 
~~~

``` js
const createNewUser = async () => {
    const url = 'https://www.example.com/api/auth/signup';
    const request = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username: "username", // greater than 5 and less than 30 characters
            email: "email@example.com", // no empty email
            password: "yourpassword" // greater than 5 and less than 25 characters
        })
    });
    const response = await request.json();
    return response;
}     
```
