## Idea
We like to have a good cocktail but we often don't know what to order.  This app will as a series of questions and then make drink recommendations.
## Initial Work Distribution
- JS / HTML / CSS / Authentication - Salvador
- JS / Routes - Liam
- JS / Databases / Seeds - Jim
## Features/User Acceptance Criteria
- when the user logs in they are asked a series of menu driven questions that will narrow their selections to choose a drink
- after logging in the user will get a dashboard of drinks they have favorited in the past and they will have a option to start a new search. 
- Each question's answer is stored and used to query the database to get the appropriate drink.
- The drinks that fit the requirements will be displayed as cards with:
    - name of the drink
    - picture
    - list of ingredients
- User can save preferences
## Database Diagram
Mongo DB
Drink database
    Stores drink recipes
user database
    User login info
    drink selections
    Drink favorites