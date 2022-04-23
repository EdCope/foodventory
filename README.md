# PantryPal 🌶 🥕 🥦 🍅 🧅

Ever wondered, what should I eat for dinner tonight?

PantryPal takes the pain out of meal planning by allowing you to add the contents of your kitchen and generate recipes based on the ingredients that you have. It introduces you to new recipes & reduces food waste by using up what you already have. With PantryPal you can add ingredients, select the ones you'd like to use to create your meal and see a list of recipes available for you to make. Recipes can be filtered for dietary requirements such as vegetarian, gluten-free and nut-free. You can also filter recipes based on simplicity and receive a range of recipes that use no more that 6 ingredients. Watch the team present the app here:


[![Watch our presentation here](http://img.youtube.com/vi/ZpxTEQP0Goo/0.jpg)](http://www.youtube.com/watch?v=ZpxTEQP0Goo)

## Contributors
:hamburger: [Ed Cope](https://github.com/EdCope) 

:fries: [Camilla Greene](https://github.com/cdoesprogramming) 

🌭 [Jack Winterschladen](https://github.com/winters145) 

:pizza: [Trushna Rabadia](https://github.com/trushnarabadia)

🌮 [Tim Ogilvie-Harris](https://github.com/breadmaking) 

## How to use PantryPal

The PantryPal team created this app with the goal of solving the daily dilemma: what should I eat for dinner tonight?

- Click on this [link to our app](https://pantrypal2022.herokuapp.com/) and create an account through the Sign-Up page.
- Once signed up and logged in you will see your pantry.
- Here, you can add the ingredients you currently have in your kitchen into your pantry and keep track of what you have.
- When you have finished adding your ingredients, click on those that you would like to make a meal with.
- Next, click on the 'Search for recipes' button and PantryPal will generate 20 recipes available for you to make.
- Toggle the switches above the recipes to filter for dietary requirements and simplicity.
- Find a recipe that you like? Click on the heart button to add it to your favourites.
- Now, you're ready to begin making your fresh and delicious meal.
<img width="1440" alt="Screenshot 2022-04-14 at 09 55 47" src="https://user-images.githubusercontent.com/79770615/163350706-4a1f6df5-20fb-4eed-b3b5-bc304cf9b98f.png">

## Planning and Ideation
We began by mind-mapping multiple ideas and potential features, narrowing down our Minimum Viable Product which was adding and listing the contents of your pantry.

![Wire-frame of app](https://user-images.githubusercontent.com/79770615/163233716-c1c5f6e6-27c9-4d94-a119-748dcc77f555.png)

![Mindmapping features to implement](https://user-images.githubusercontent.com/79770615/163235024-c52dcf75-8726-464d-8010-ebd4e45c9e5b.png)
![Retro](https://user-images.githubusercontent.com/79770615/163233503-537bfd62-895e-468b-ac11-dca76ed3f6f6.png)

## MVP

For our MVP, we would like our app to acheive the following user stories:

```
As a user,
So I can visit the site, 
It should have a home page.  
```

```
As a user,
So I can add the contents of my fridge,
It should be able to add ingredients.
```

```
As a user,
So I can see the contents of my fridge,
It should be able to list all ingredients.
```

```
As a user,
So that I know what I have used,
I would like to be able to delete an ingredient.
```

```
As a user,
So that I can have an accurate description of what's in my pantry,
I would to avoid duplications.
```

```
As a user,
So that I can access my account,
I would like to be able to sign in.
```

```
As a user,
So that my account stays secure,
I'd like to be able to log out when I'm done.
```

## Tech Stack

For this project we are using:

- [MongoDB](https://www.mongodb.com/) for the database.
- [Express](https://expressjs.com/) web framework for Node.js.
- [React](https://reactjs.org/) for the frontend.
- [Node](https://nodejs.org/en/) for the back-end.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [Jest](https://jestjs.io/) for testing.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Prettier](https://prettier.io/) for formatting.
- [Bcrypt](https://www.npmjs.com/package/bcrypt) for password encyption 
- Using npm install supertest --save-dev for testing route/controller
