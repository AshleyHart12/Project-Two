# Project-Two

Project ideas
 Quiz for coffee, and tells you what kind of coffe you are. Take a quiz when you first create an account and use friend finder logic to show other users near by that have the same scores as you! Laura got a latte and so did Ashley these are the near by coffee shops for you to meet! 
        Google MAPS api
        GET and POST
            Database- need to use CRUD concept
                Create
                Read
                Update-- Take the quiz again to see if your flavor has changed
                Delete -- If user wants to delete account 
        Send an email from page with user responses and similar friends. 

        Steps needed for hard deadlines (go/ no go)--
        1. When loading page- need to prompt to create account - Name, Email, City and create a login password.
        2. Quiz questions (all load on one page) - Start with 5 and if possible go to 10. Questions with fun discripters. 
            A. Results box-
                User name
                Coffee type - Black Coffee, Vanialla Latte, Espresso, Chai Tea, Caramel Machaitto, Mocha, Americano, Affogato, Frapachino.
                    Thanks for taking the quiz! YOU ARE : <coffee type> <Coffee image> <fun coffee disc.>
            B. Load the full page of users who have taken the quiz
                User name
                Test results
                Coffee type - Black Coffee, Vanialla Latte, Espresso, Chai Tea, Caramel Machaitto, Mocha, Americano, Affogato, Frapachino.
                Coffee image
                *Thumbnail with coffee shops nearby* with Google API * 
                *Other usres with similar results* add a div for each coffe type and put the users within the div. Coffee image will be used here. 
        3. Allowing a button to retake the quiz - Update the current user columns in the mysql table.
        4. Button for user can delete account.




        

How it is done
Node, express, polished UI, folder structure, Heroku deployment

Needed
API call, MySQL, GET and POST routes, nodemailer