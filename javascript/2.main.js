/*

1. import in header

<html>
    <head>
        <script src="main.js"></script>
    </head>
    <body>
    </body>
</html>

parsing HTML  ->  blocked (fetching js, executing js)  ->  parsing Html (page ready)


 - disadvantage :  large file size main.js, too slow network makes late page ready

*/

/*

2. import in body at last

<html>
    <head></head>
    <body>
        <div>
            ......
        </div>
        <script src="main.js"></script>
    </body>
</html>

parsing HTML(page ready)  ->  fetching js  ->  executing js
                    

 - advatage : show page before import js
 - disadvatage : needs wait for dynamic contents (ajax, server data ...)

*/

/*

3. import in head with async

<html>
    <head>
        <script async src="main.js"></script>
        <script async src="main2.js"></script>
        <script async src="main3.js"></script>
    </head>
    <body>
        <div>
            ......
        </div>
    </body>
</html>

parsing HTML     ->       blocked        -> parsing Html (page ready)
    fetching js  ->       executing js   ->
                    

 - advatage : save time for download js
 - disadvatage : undefined query selector error when excute js before page ready
                 error with dependencies between js 

*/

/*

4. import in head with defer

<html>
    <head>
        <script defer src="main.js"></script>
        <script defer src="main2.js"></script>
        <script defer src="main3.js"></script>
    </head>
    <body>
        <div>
            ......
        </div>
    </body>
</html>

parsing HTML (page ready)  ->  executing main.js  ->  executing main2.js  ->  executing main3.js
    fetching main.js
    fetching main2.js
    fetching main3.js
                    

 - advatage : save time for download js
 - disadvatage : undefined query selector error when excute js before page ready

*/