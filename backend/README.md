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
