# Components Exercise

![Exercise Preview](./goldfish-final.png)

## Exercise overview

We are going to make an goldfish forum website page by combining different components each making up a different part of the page content.

## Setup a new Create-React-App project

1. Open VS code and then open your terminal from the menus at the top of the screen under `View > Terminal` or use the shortcut key **Ctrl+`**. 

2. In Terminal type `npx create-react-app goldfish-site`. Here we are naming our project goldfish-site. Wait while a new project is setup... It will display "Happy hacking!" when it's done.

3. Then in Terminal type `cd goldfish-site` to enter the project folder.

## Install Bootstrap

4. Next let's import Bootstrap a front-end framework that provides CSS code to make our project beautiful. In terminal type `npm i bootstrap@4.1.1`. This will install the package into our project.

## Start Node Test Server

5. In terminal type `npm start` to start a node test server this should open a new tab in your browser to **localhost:3000**.

## Import Bootstrap

6. Then in VS Code, open the **/src/index.js** file and import the bootstrap css like by typing the following line  `import 'bootstrap/dist/css/bootstrap.css';` placing it just after the import for ReactDOM and just before our import for **Index.css**. This way we can override the bootstrap styles with our own inside Index.css if we wish to.

## Exercise Assets

7. Move the image files from the */assets** folder outside the create-react-app project folder into the create-react-app folder */public/** this way the images will be accessible to your application.

## Install Simple React Snippets Extension

8. Next we will install the **Simple React Snippets** extension for VS Code. This will allow us to type short commands to generate blocks of common React code. Start by clicking the <img src="../../z-images/vscode-extensions-icon.png" width="22" height="22"> **Extensions** icon from the panel on the left side of the screen.

9. In the search box at the top type `simple react snippets` and then click on the result labeled **Simple React Snippets** and then click **Install**.

## Creating the App Component

10. Open **/src/App.js**. This file is an example component that create-react-app starts with. You can delete everything in this file. Then at the top of the file you can import react by typing the shortcut `imrc` and press the **Tab** key. This will create the import code `import React, { Component } from 'react';`

11. Next type the command `cc` and press **Tab** to create the boiler plate code for a class component. When the code appears start typing the class name `App`. It should fill in the for both the class name as well as in the default export command.

12. Write `<div>Hello World</div>` inside the `<div>` that is being rendered inside the App component.

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() { 
    return <div>Hello World</div>;
  }
}
 
export default App;
```

13. Let's visit the **/src/index.js** file and look at how we are passing our component to ReactDOM to be rendered.

```jsx
import App from './App';
```

The line at the top of the file is importing the code from App.js so index.js has access to the App class.

```jsx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

The render method of ReactDOM is being passed our `<App />` component. The `<React.StrictMode>` gives us better error reporting by activating additional checks and warnings.

14. Save your files and visit the browser. You should see "Hello World" displayed.

15. In VS Code, go back to the file **/src/App.js**. 

## Applying CSS Classes

16. Erase the text "Hello World" from inside the render method. Add the attribute `className=""` inside the `<div>` and give it the Bootstrap class name of `container-fluid`.

```jsx
class App extends Component {
  render() { 
    return (
      <div className="container-fluid">
        
      </div>
    );
  }
}
```

_Note: In the code above you can see I wrapped my JSX element inside `()` parenthesis. This acts as a grouping operator and simply allows us to not have to type a JSX tag on the same line as the `return` keyword. Instead we start our JSX on the next line. Some people prefer to write it this way so it looks cleaner, but it is not essential._

17. Inside the `<div>` lets create another two `<div>` and give them the Bootstrap class name of `row`. This will create our vertical separation between our header and the rest of the page.

I will also add some comments inside each div to make a note of what will eventually go there.

```jsx
class App extends Component {
  render() { 
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Header will go here... */}
        </div>
        <div className="row">
          {/* Sidebar will go here... */}
          {/* Main content will go here... */}
        </div>
      </div>
    );
  }
}
```

## Create Child Components

Let's create components for the Header, Sidebar, and Main content areas.

18. From the File Explorer in the left panel, **right-click** on the **/src/** folder inside your create-react-app-project. Select **New File** and name the file `Header.js`.

19. Create another file in the same location and name it `Sidebar.js`.

20. Create another file in the same location and name it `Main.js`.

## Working on the Header

21. Inside the **/src/Header.js** file, start by using the shortcut `imrc` and press **Tab** to create the React import code.

22. Below that, use the shortcut `cc` to create a class component. Type the name the component `Header`.

```jsx
import React, { Component } from 'react';

class Header extends Component {
  render() { 
    return <div></div>;
  }
}
 
export default Header;
```

23. Change the `<div>` to the HTML5 Semantic element `<header>` instead. Then add the Bootstrap class name `col-12` to `<header>`.

```jsx
<header className="col-12"></header>
```

24. Inside the `<header>` add an `<img />` element and give it the class name of `logo`. Set a src pointing to the url `src="/goldfish-logo.svg"`. Set the alt attribute `alt="GoldFish Logo"`.

```jsx
<header className="col-12">
  <img className="logo" src="/goldfish-logo.svg" alt="GoldFish Logo" />
</header>
```

25. Below the logo image create a heading `<h1>GoldFish Forum</h1>`

```jsx
import React, { Component } from 'react';

class Header extends Component {
  render() { 
    return (
      <header className="col-12">
        <img className="logo" src="/goldfish-logo.svg" alt="GoldFish Logo" />
        <h1>GoldFish Forum</h1>
      </header>
    );
  }
}
 
export default Header;
```

## Working on the Sidebar

26. Inside the **/src/Sidebar.js** file, start by using the shortcut `imrc` and press **Tab** to create the React import code.

27. Below that, use the shortcut `cc` to create a class component. Type the name the component `Sidebar`.

```jsx
import React, { Component } from 'react';

class Sidebar extends Component {
  render() { 
    return <div></div>;
  }
}
 
export default Sidebar;
```

28. Change the `<div>` to the HTML5 Semantic element `<aside>` instead. Then add the Bootstrap class name `col-md-2` to `<aside>`.

```jsx
class Sidebar extends Component {
  render() { 
    return (
      <aside className="col-md-2">

      </aside>
    );
  }
}
```

29. Inside the `<aside>` create a `<ul>` unordered list. Fill it with the following list items:

```html
<ul>
  <li>Home</li>
  <li>About</li>
  <li>Forum</li>
  <li>Contact</li>
</ul>
```

Normally we would link these to the other views of our app but we will come back to **React Links** at another time. For now just leave them as just a list. Here is the finished Sidebar code.

```jsx
import React, { Component } from 'react';

class Sidebar extends Component {
  render() { 
    return (
      <aside className="col-md-2">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Forum</li>
          <li>Contact</li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
```

## Working on the Main Content

30. Inside the **/src/Main.js** file, start by using the shortcut `imrc` and press **Tab** to create the React import code.

31. Below that, use the shortcut `cc` to create a class component. Type the name the component `Main`.

```jsx
import React, { Component } from 'react';

class Main extends Component {
  render() { 
    return <div></div>;
  }
}
 
export default Main;
```

32. Change the `<div>` to the HTML5 Semantic element `<main>` instead. Then add the Bootstrap class name `col-md-10` to `<main>`.

```jsx
class Main extends Component {
  render() { 
    return (
      <main className="col-md-10">

      </main>
    );
  }
}
```

33. Inside the `<main>` element add a `<div>` with an `<img />` inside of it. Below the `<div>` add a `<p>` paragraph.

```jsx
<main className="col-md-10">
  <div>
    <img />
  </div>
  <p></p>
</main>
```

34. Set the `<div>` the class name of `frame`

35. Set the `<img />`, `src=""` attribute to `/oranda.png` and the `alt=""` attribute set to `Oranda`.

36. Copy and Paste the following text into the `<p>`:

```txt
Fancy goldfish are interesting, fun additions to many tanks or ponds. However, they all have their own special needs and they can’t be kept with just any tank mates. It’s important to ensure you carefully choose tank mates for your fancies so avoid injury and stress. Some of them are weak swimmers or have poor vision, meaning they can easily be out competed for food and may not be able to escape bullying by other fish. Many fancies are becoming more popular in the aquatics trade, while others are rare enough that you may never see them in person. Each breed of fancy goldfish has its own charm and unique qualities, making them beautiful centerpieces for your tank.
```

Here is the updated code for Main:

```jsx
class Main extends Component {
  render() { 
    return (
      <main className="col-md-10">
        <div className="frame">
          <img src="/oranda.png" alt="Oranda" />
        </div>
        <p>Fancy goldfish are interesting, fun additions to many tanks or ponds. However, they all have their own special needs and they can’t be kept with just any tank mates. It’s important to ensure you carefully choose tank mates for your fancies so avoid injury and stress. Some of them are weak swimmers or have poor vision, meaning they can easily be out competed for food and may not be able to escape bullying by other fish. Many fancies are becoming more popular in the aquatics trade, while others are rare enough that you may never see them in person. Each breed of fancy goldfish has its own charm and unique qualities, making them beautiful centerpieces for your tank.</p>
      </main>
    );
  }
}
```

## Adding Inline CSS Style

As an alternative to using class names and an external stylesheet sometimes you may want to use inline style in order to make the style dynamic.

37. Inside the Main class before the render function we will add the following object with CSS styles:

```javascript
frameStyle = {
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,49,121,1) 4%, rgba(0,255,239,1) 100%)'
  };
```

_Note: This CSS background gradient code was created using the free online tool [CSSGradient.io](https://cssgradient.io/)._

38. Then inside the `<div className="frame">` we will add the `style=""` attribute and pass in the `frameStyle` object.

```jsx
 <div className="frame" style={frameStyle}>
```

## Including Child Components In A Parent Component

We are ready to compose of all children components into out main parent component.

39. Open the file **/src/App.js** and at the top of the file after the React import, add the following import code for our component files:

```javascript
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
```

40. Replace the comment `{/* Header will go here... */}` with a reference to our `<Header />` component. As you can see by making our class names Uppercase it makes it easier to tell the difference between the component `<Header />` vs the html element `<header>`.

41. Replace the comment`{/* Sidebar will go here... */}` with a reference to our `<Sidebar />` component.

42. Replace the comment `{/* Main content will go here... */}` with a reference to our `<Main />` component.

## CSS To Make Pretty

43. Inside **/src/App.js** at the top of the file below the other imports add the following line to import your `App.css` file

```javascript
import './App.css';
```

44. Open **/src/App.css** file. Delete all of the CSS in this file because we will be adding our own code.

45. Paste the following code into the CSS file:

```css
body {
  margin: 40px;
}

header {
  margin-bottom: 20px;
}

header, aside {
  text-align: center;
}

header img, header h1 {
  display: inline-block;
  vertical-align: top;
}

header h1 {
  margin-top: 20px;
}

.logo {
  width: 100px;
}

aside ul {
  list-style: none;
  padding-left: 20px;
}

aside li {
  padding: 7px 0;
}

main p {
  margin: 30px 0;
  column-count: auto;
  column-gap: 2em;
}

.frame {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (min-width: 753px) {
  header, aside {
    text-align: left;
  }
}

@media only screen and (min-width: 960px) {
  main p {
    column-count: 2;
  }
}

@media only screen and (min-width: 1172px) {
  main p {
    column-count: 3;
  }
}
```

46. Save all files and head to the browser to view your masterpiece.