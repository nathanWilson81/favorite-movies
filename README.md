# My Favorite Movies

## Features
* Add / Edit / Remove movies
* All edits persist to localStorage automatically
* Modal for adding additional information about a movie
* Sort by genre 

## Added Depenedencies
* Matrial Icons React - Added support for the icons
* Styled Components - Style components in JS 
* Lodash - Additional utility functions
* UUID - Generate an id for our movies 
* Prettier - Standard style for JS code
* React Test Renderer - Generate snapshots for components

## Running the app
#### App was built with node v8.11.4. A .nvmrc is included for convenience 
#### Dev server
```npm start```
#### Tests
```npm t``` - All components have snapshot tests 

## Caveats 
* Performance starts to suffer when there are a lot of movies in the unfiltered state (Should move to a virtualized list)
