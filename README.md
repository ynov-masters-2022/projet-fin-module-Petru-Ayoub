# React Demo Project
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running The Application

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### This application is using the [Marvel Api](https://developer.marvel.com/)
The public and private API keys are to be stored in an .env file situated at the root of the project folowing the template:
`REACT_APP_BASE_URL=https://gateway.marvel.com:443/v1/public`
`REACT_APP_PRIVATE_KEY=Your_Private_Key`
`REACT_APP_PUBLIC_KEY=Your_Public_Key`
> **Data provided by Marvel. © 2014 [Marvel](http://marvel.com)** 


#

## Concepts
This is an introduction to a basic React App, featuring some basic React concepts.
### Project Structure
The project contains 3 main sections:

 - Views
 - Components
 - Services

The views are the pages displayed in the browser, the components are reusable HTML 'templates' that can be called in any page and the services, in this case, are the API calls which return data.

![img](https://i.imgur.com/aKHiVGw.png)

## Routing
Routing is managed by the react-router-dom lib.
The the routes are defined in app.js

![enter image description here](https://i.imgur.com/cT7jagz.png) 

Here, we have 3 main routes: the homepage (default route), heroes and comics which display a view showcasing a list of heroes and comics respectively.
We can also find routes params, notably hero/:id and comics/:id, where :id is a variable  containing the unique ID of an hero or comic. This routes return a details page for any given hero / comic. 
The ID is specified via a the `<Link>` tag. ![](https://imgur.com/GGkAVDa.png)
This ID is then retrived from the details view using the `useParams()` hook
![enter image description here](https://imgur.com/tiKhANV.png)
we can then fetch the details using this ID.

The search feature redirects the user to the heroes list and returns all the heroes that match thier search term. 
In this case, we are using another routing hook: useSearchParams which corresponds to the native URLSearchParams. 
When the user initiates a search, a redirection takes place to the `/heroes` path and a URL parameter corresponding to the search term is set. 

![enter image description here](https://imgur.com/clTMHdy.png)
![enter image description here](https://imgur.com/yz81o0Z.png)

The createSearchParams function creates an URLSearchParams object, and 'st' corresponds to the input value.

![enter image description here](https://imgur.com/NlhBvSa.png)
![enter image description here](https://imgur.com/SuVGMfM.png)

After the redirection, we can  get the url parameters using the `.get()` method on the `useSeaarchParams` function

![enter image description here](https://imgur.com/dpBEypo.png)
 
The wildcard (*) route returns a "Not found" page if the specified route is not one of the availble routes.

## useEffect & useState hooks - CSR

The first iteration of this application is implementing the Client Side Rendering, meaning that the browser is fetching all the data and JS from the server, and the rendering is handled by the client.	

Using the useEffect hook, we can asynchronously fetch data form the Marvel API on the initial page load.

![enter image description here](https://imgur.com/UPgPtAr.png)
We can also fetch data for rearched heroes by calling the API inside the useEffect and setting the search term as the dependency. Every time the search term (and in term the list of fetched heroes) changes, the hero list component is re-rendered.
