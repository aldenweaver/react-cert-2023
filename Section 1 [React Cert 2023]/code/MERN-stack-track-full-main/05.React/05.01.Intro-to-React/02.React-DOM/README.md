# ReactDOM

ReactJS is a library to build active User Interfaces thus rendering is one of the integral parts of ReactJS. React provides the developers with a package react-dom to access and modify the DOM. Let’s see in brief what is the need of having the package.

## What is the DOM and React's Use of a Virtual DOM?

DOM, abbreviated as Document Object Model, is a World Wide Web Consortium standard logical representation of any webpage. In easier words, DOM is a tree-like structure that contains all the elements and it’s properties of a website as its nodes. DOM provides a language-neutral interface that allows accessing and updating of the content of any element of a webpage.

Before React, Developers directly manipulated the DOM elements which resulted in frequent DOM manipulation, and each time an update was made the browser had to recalculate and repaint the whole view according to the particular CSS of the page, which made the total process to consume a lot of time. As a betterment, React brought into the scene the virtual DOM. The Virtual DOM can be referred to as a copy of the actual DOM representation that is used to hold the updates made by the user and finally reflect it over to the original Browser DOM at once consuming much lesser time. React has great performance because instead of reloading the entire DOM tree it can make a comparison between the real DOM and the virtual one and only update what has changed leaving the unchanged parts alone.

## Including ReactDOM

In our script, after importing React we must also import the ReactDOM package.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
```

## Render JSX using ReactDOM

The ReactDOM object comes with render method that accepts two arguments. the first is the JSX object you wish to render, and the second argument is to select the DOM element in the HTML page you want to render the JSX inside of, let's pretend in our html page we have a div with the id of 'root'

```html
<div id="root"></div>
```

Then in our react script we can call the ReactDOM render method and pass in our JSX element to be rendered into our div with id of 'root'.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

let name = "Frank";
const message = <p>Hello {name}</p>;

ReactDOM.render(message, document.getElementsById('root'));
```

When the react script is executed by the browser it would display the updated DOM as 

```html
<div id="root">
  <p>Hello Frank</p>
</div>
```

## Always provide ReactDOM a single element!

If we try to pass REACTDOM multiple JSX elements then it will throw an error. For example the following code will not work!

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const poem = <p>Fuzzy Wuzzy was a bear.</p>
             <p>Fuzzy Wuzzy had no hair.</p>
             <p>Fuzzy Wuzzy wasn't very fuzzy was he?</p>;

ReactDOM.render(poem, document.getElementsById('root'));
```

This throws a Syntax Error when compiling.. To fix this we need to wrap our paragraphs inside a single parent element.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const poem = <div>
               <p>Fuzzy Wuzzy was a bear.</p>
               <p>Fuzzy Wuzzy had no hair.</p>
               <p>Fuzzy Wuzzy wasn't very fuzzy was he?</p>
             </div>;

ReactDOM.render(poem, document.getElementsById('root'));
```
Now our content is displaying correctly with no error.

Although here we are using ReactDOM to render JSX objects directly, in practice we mostly use it to call an instance of a React component which will return the JSX object to display.