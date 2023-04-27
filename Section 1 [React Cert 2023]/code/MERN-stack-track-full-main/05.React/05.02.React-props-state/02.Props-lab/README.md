# Props Exercise

![Exercise Preview](../../z-images/props-exercise-preview.png)

## Exercise overview

We are going to make an archive page for a blog site that displays a list of recent articles.

## Setup a new Create-React-App project

1. Open VS code and then open your terminal from the menus at the top of the screen under `View > Terminal` or use the shortcut key **Ctrl+`**. 

2. In Terminal type `npx create-react-app travel-blog`. Here we are naming our project travel-blog. Wait while a new project is setup... It will display "Happy hacking!" when it's done.

3. Then in Terminal type `cd travel-blog` to enter the project folder.

## Install Bootstrap

4. Next let's import Bootstrap a front-end framework that provides CSS code to make our project beautiful. In terminal type `npm i bootstrap@5.2.3`. This will install the package into our project.

## Start Node Test Server

5. In terminal type `npm start` to start a node test server this should open a new tab in your browser to **localhost:3000**.

## Import Bootstrap

6. Then in VS Code, open the **/src/index.js** file and import the bootstrap css like by typing the following line  `import 'bootstrap/dist/css/bootstrap.css';` placing it just after the import for ReactDOM and just before our import for **Index.css**. This way we can override the bootstrap styles with our own inside Index.css if we wish to.

## Exercise Assets

7. Move the image files from the */assets** folder outside the create-react-app project folder into the create-react-app folder */public/** this way the images will be accessible to your application.

## Creating the App Component

8. Open **/src/App.js**. This file is an example component that create-react-app starts with. You can delete everything in this file. Then at the top of the file you can import react by typing the shortcut `imrc` and press the **Tab** key. This will create the import code `import React, { Component } from 'react';`

9. Next type the command `cc` and press **Tab** to create the boiler plate code for a class component. When the code appears start typing the class name `App`. It should fill in the for both the class name as well as in the default export command.

10. Add `className="App container-fluid"` into the `<div>` element. This will apply some CSS styles to it.

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() { 
    return <div className="App container-fluid"></div>;
  }
}
 
export default App;
```

11. Then inside the `<div>` create a heading `<h1>My Travel Blog</h1>`.

```jsx
class App extends Component {
  render() { 
    return (
      <div className="App container-fluid">
        <h1>My Travel Blog</h1>
      </div>
    );
  }
}
```

12. Save the file and visit the browser to make sure our heading is appearing.

13. Back inside **/src/App.js** below our heading place `<div className="row"></div>`.

```jsx
class App extends Component {
  render() { 
    return (
      <div className="App container-fluid">
        <h1>My Travel Blog</h1>
        <div className="row"></div>
      </div>
    );
  }
}
```

## Creating the Article Component

14. In VS Code in the File Explorer to the left right click on the **/src/** folder and select **New File**. Name the file `Article.js`.

15. Open **/src/Article.js** and use the shortcut command `imrc` and press **Tab**.

16. Then below, use the shortcut command `cc` and press **Tab** to create a new class component and name it `Article`.

17. Inside the render method, and inside the `<div>` add the class `className="article col-4"`.

18. Inside the div let's write some place filler text `Hello I'm An Article!`.

```jsx
import React, { Component } from 'react';

class Article extends Component {
  render () {
    return (
      <div className="article col-4">
        Hello I'm An Article!
      </div>
    );
  }
}

export default Article;
```

19. Let's try to import this Article into our App component. Open **/src/App.js** again and after we import React create a new line to import our Article `import Article from './Article';`. Also import the App.css with `import './App.css';`

20. Then inside of the `<div className="row">` refer to your Article component as `<Article />`.

```jsx
import React, { Component } from 'react';
import Article from './Article';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <h1>My Travel Blog</h1>
        <div className="row">
          <Article />
        </div>
      </div>
    );
  }
}

export default App;
```

21. Save and check the browser and you should see the text "Hello I'm An Article!".

## Adding Prop Data

22. Now that we know our App component can see our Article component. Let's add some made up dummy data. This data often comes from a database, but for now we are just going to add it as a property of our class to make things simple. Inside your class before the render method paste in the following code:

```javascript
articles = [
    {id: 1, title: "Taiwan's Hidden Treasures", body: "You could spend months exploring Taiwan's Buddhist temples, villages, cities, and mountains and still barely scratch the surface of all the island has to offer.", img: "/taiwan.jpg"},
    {id: 2, title: "High Culture In Sao Paulo", body: "The largest city in South America, Sao Paulo's cuisine and art is as multinational as its diverse population of ten million people.", img: "/sao-paulo.jpg"},
    {id: 3, title: "Bonaire Is Scuba Heaven", body: "Bonaire is one of the top diving destinations in the world. Known as the shore dive capital of the world, it has great accessibility to its reefs.", img: "/bonaire.jpg"}
  ];
```

This is what it looks like inside your class:

```jsx
class App extends Component {

  articles = [
    {id: 1, title: "Taiwan's Hidden Treasures", body: "You could spend months exploring Taiwan's Buddhist temples, villages, cities, and mountains and still barely scratch the surface of all the island has to offer.", img: "/taiwan.jpg"},
    {id: 2, title: "High Culture In Sao Paulo", body: "The largest city in South America, Sao Paulo's cuisine and art is as multinational as its diverse population of ten million people.", img: "/sao-paulo.jpg"},
    {id: 3, title: "Bonaire Is Scuba Heaven", body: "Bonaire is one of the top diving destinations in the world. Known as the shore dive capital of the world, it has great accessibility to its reefs.", img: "/bonaire.jpg"}
  ];

  render() {
    return (
      <div className="App container-fluid">
        <h1>My Travel Blog</h1>
        <div className="row">
          <Article />
        </div>
      </div>
    );
  }
}
```

Notice that our data is named `articles` and contains an array with three objects inside that hold the content for each article.

## Using Map To Create Many Articles From An Array Of Data

23. Instead of loading just one `<Article />` component, we would like to loop over the articles array and create an article for each item in the array. the `map` function makes this easy to write

```jsx
class App extends Component {

  articles = [ ]; // content within the array has been hidden to conserve space.

  render() {
    return (
      <div className="App container-fluid">
        <h1>My Travel Blog</h1>
        <div className="row">
          { this.articles.map(()=> <Article />) }
        </div>
      </div>
    );
  }
}
```

24. Save and check the browser. You should see the text "Hello I'm An Article!" appearing 3 times.

## Passing Data As Props

25. Let's use props to pass the articles data from our App component down into our Article component. The map function receives a call back function which we have written as an arrow function. The argument we pass in is the name we want to call each element that is returned from the articles array. I chose to call it `data` as it is article data. Then inside the `<Article />` component we add the attribute for `key=""` (a unique identifier that React uses) and a prop we are creating called `content=""` to pass the article content into.

```jsx
class App extends Component {

  articles = [ ]; // content within the array has been hidden to conserve space.

  render() {
    return (
      <div className="App container-fluid">
        <h1>My Travel Blog</h1>
        <div className="row">
          { this.articles.map((data)=> <Article key={data.id} content={data} />) }
        </div>
      </div>
    );
  }
}

```

We must pass the `key=""` attribute a unique label, we decided to use the id property that is found inside each element of the articles array.

26. Head back to **/src/Article.js**. Let's remove the text that says "Hello I'm An Article!" and replace it with 3 elements an `<img>` image, `<h2>` a heading, and a `<p>` paragraph.

```jsx
import React, { Component } from 'react';

class Article extends Component {
  render () {
    return (
      <div className="article col-4">
        <img />
        <h2></h2>
        <p></p>
      </div>
    );
  }
}

export default Article;
```

27. give the image element a class style, a src attribute, and also an alt attribute like so `<img className="img-fluid" src={} alt="featured" />`. In order to display the correct img source url we will refer to the props object that has a property we passed in called `contents`.

```jsx
<img className="img-fluid" src={ this.props.content.img } alt="featured" />
```

If you are not sure what to type to get to a particular property you can always look over the articles array again that is inside **/src/App.js**

28. For the heading we will reference the `title` property.

```jsx
<h2>{ this.props.content.title }</h2>
```

29. For the paragraph we want to insert the text that's stored inside the props `body` property.

```jsx
<p>{ this.props.content.body }</p>
```

Here is the completed code for Article.js

```jsx
import React, { Component } from 'react';

class Article extends Component {
  render () {
    return (
      <div className="article col-4">
        <img className="img-fluid" src={ this.props.content.img } alt="featured" />
        <h2>{ this.props.content.title }</h2>
        <p>{ this.props.content.body }</p>
      </div>
    );
  }
}

export default Article;
```

Here is the finished code for App.js

```jsx
import React, { Component } from 'react';
import Article from './Article';
import './App.css';

class App extends Component {

  articles = [
    {id: 1, title: "Taiwan's Hidden Treasures", body: "You could spend months exploring Taiwan's Buddhist temples, villages, cities, and mountains and still barely scratch the surface of all the island has to offer.", img: "/taiwan.jpg"},
    {id: 2, title: "High Culture In Sao Paulo", body: "The largest city in South America, Sao Paulo's cuisine and art is as multinational as its diverse population of ten million people.", img: "/sao-paulo.jpg"},
    {id: 3, title: "Bonaire Is Scuba Heaven", body: "Bonaire is one of the top diving destinations in the world. Known as the shore dive capital of the world, it has great accessibility to its reefs.", img: "/bonaire.jpg"}
  ];

  render() {
    return (
      <div className="App container-fluid">
        <h1>My Travel Blog</h1>
        <div className="row">
          { this.articles.map((data)=> <Article key={data.id} content={data} />) }
        </div>
      </div>
    );
  }
}

export default App;
```

30. Save all your files and check in the browser. You should A travel blog site page that has a heading and three columns one for each article. 

## Adding Style

31. Let's add some padding to our article. Since we added the class name `article` to the `<div>` in our component. We can simply add some CSS code inside of **/src/App.css**:

```css
.article {
  padding: 30px;
}
```

32. Save the file and check the browser again. You should see more spacing around the articles.