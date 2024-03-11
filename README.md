# bake-it-your-own server

The server receives the url from the client and connects to my mongoDB cluster. If the recipe has already been parsed before, we'll send that JSON to the client for easy retrival. 

If the recipe has not been parsed before, using CheerioJS, we'll scrape the required fields, save it to our MongoDB cluster, and share the JSON with the front-end. 

Next steps are adding user authentitcation for login/log out, and adding the ability to edit recipes, so you can save customer recipes to your own "virtual cookbook".

# Tech Stack
I used Express as the library, CheerioJS for scraping, and MongoDB for the database. The backend is being hosted via render.com
