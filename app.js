

$(document).ready(function()
{
    url_base = 'http://localhost:8888/library/public/index.php';

    $("#register").click(function()
    {
        register();
    });

    $("#login").click(function()
    {
        login();
    });

    $("#create").click(function()
    {
        create_book();
    });

    $("#lend").click(function()
    {
        lend_books();
    });

    $("#show_books").click(function()
    {
        show_books()
    });
});


function get_user()
{
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();
  

    var data = 
    {
        "name": name,
        "email": email,
        "password": password
    }
    return data;
}

function get_login()
{
    var email = $('#email_login').val();
    var password = $('#pass_login').val();

    var login = {
        "email": email,
        "password": password
    }

    return login;
}

function get_book()
{
    var title = $('#title').val();
    var description = $('#description').val();

    var book = {
        "title": title,
        "description": description
    }

    return book;
}

function get_book_lend()
{
    var title = $('#user').val();
    

    var book_lend = {
        "title": title,
        
    }

    return book_lend;
}

  


function register()
{   

    var data = get_user();

     $.ajax({
         type:"POST",
         url: url_base + "/api/users",
         data: data,
         dataType:'json',
         success:function(response)
         {
             console.log(response);
             sessionStorage.setItem('token',response.token);
         },

         error:function()
         {
             console.log("error")
         }
     });
}


function login()
{
    var login = get_login();

    $.ajax({
        type:"POST",
        url: url_base + "/api/login",
        data: login,
        dataType:'json',
        
        success:function(response)
        {
            sessionStorage.setItem('token',response.token);
            console.log(response.token);
        },

        error:function()
        {
            console.log("error")
        }
    });
}

function create_book()
{
    var book = get_book();

    $.ajax({
        type: "POST",
        url: url_base + "/api/books",
        data: book,
        dataType:'json',
        headers:
         {
            'Authorization': sessionStorage.getItem('token')
         },
        
        success:function(response)
        {
            console.log(response.token);
        },

        error:function()
        {
            console.log("error")
        }
    });
}

function lend_book()
{
    var book_lend = get_book_lend()

    $.ajax({
        type: "POST",
        url: url_base + "/api/lend",
        data: book_lend,
        dataType:'json',
        headers:
         {
            'Authorization': sessionStorage.getItem('token')
         },
        
        success:function(response)
        {
            console.log(response.token);
        },

        error:function()
        {
            console.log("error")
        }
    });
}

function show_books()
{
    $.ajax({
       
        type:"GET",
        url: url + "/api/book",
        dataType: 'json',
        headers:
        {
            'Authorization': sessionStorage.getItem('token')
        },
        
        success:function(response)
        {
            
            console.log(response);
        
        },
        
        error:function()
        {
            console.log("error")
        }
    });
}



