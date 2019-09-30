# Project-2-React-frontend-App ![alt text](https://miro.medium.com/fit/c/50/50/1*HDIDs6Iq0bW-2qeYXqjp9w.png "GA logo")
React Hackathon - 24 hours


## Project 2 General Assembly - React frontend 'Reacathon'

We created a frontend webapp which consumes the rest api of a podcast search service called Listen notes - https://www.listennotes.com/api/

It has a search, get random podcast and a list of popular podcasts which the user can listen to online directly from within our app.

![alt text](https://i.imgur.com/fkRsDbO.png "Project screenshot")

## Brief

*Build a React application* that consumes a *public API*.

Your app must:

* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components** - At least one classical and one functional.
* **The app should include a router** - with several "pages".
* **Include wireframes** - that you designed before building the app.
* Have **semantically clean HTML** - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
* **Be deployed online** and accessible to the public.


## Technologies Used

* React

* NPM

* HTML5

* Insomnia

* SASS/CSS3

* JavaScript (ES6)

* Git/GitHub

* Google Fonts

## Approach

Our first step was to choose the public api we wanted to consume. This proved to be one of the most time-consuming, challenging tasks. We initially looked at music, movies and even stock/finance apis. None of these met our criteria of being; easy to user/understand, easy/fast access without waiting for a response from the internal dev teams, and the right endpoints being available with interesting services. 

After more research, we found the Listen Notes API for Podcasts - We got a token quickly and the api was simple enough to understand and test within the docs. It also has interesting endpoints which offered search functionality, random podcasts, and a curated, most popular list of podcasts. 

We tested the apis first to make sure we could receive the right data back and then we proceeded to build out the Home page, which would also be where the search input form would be and the search results would appear. Then we added a show page so the user could go into a specific search result and be able to listen to the audio directly on this show page. 


![alt text](https://i.imgur.com/c68efeZ.png?1 "Project screenshot")

Afterwards we created the random podcast page and its subsequent show page, and then the popular list of podcasts. This popular list was a bit more complicated to access as the actual episodes with audio was nested within each 'parent' podcast wo we needed to map through the array of popular podcasts and grab the data we needed. 

![alt text](https://i.imgur.com/fs4OOeX.png "Project screenshot")

We then styled and added a navbar routing. 

## How to install project 

* Fork project and download into local folder
* Run 'npm i' to install dependencies

## Major hurdles

Biggest hurdle at the start was choosing the right project direction and API - We looked at many different apis; Spotify, Deezer, Last FM, MovieDB, Etoro, Yahoo finance...We spent a lot of time researching and choosing the right API but in the end we settled on Listen Notes API. 

It was also a challenge working for the first time in a pair for the project. Communication was crucial and allowed us to be able to build something within such a short timeframe. 

## Key learnings

React became much clearer for me during this project - From the initial project setup to building classical/functional components. It really made me realise how powerful of a library as you can get up and running very quickly and the reuseable components just makes things more efficient. 

The idea of using external APIs was also something I really enjoyed - the whole process from requesting an API token to reading the docs and researching the right endpoints. 


## Future version 

* Splitting the home page and search results to two different views/components
* Adding more functionality for filtered and sorted searches. 


