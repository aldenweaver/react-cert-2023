# JSX

React uses a syntax extension of JavaScript called JSX (which stands for JavaScript Extensible Markup Language) that allows us to write HTML content directly into our JavaScript code. This may seem strange at first but, it is great because it makes it easy to blend JavaScript logic with HTML; something that we do a lot in React. As you will see, JSX looks very similar to the HTML, but there are a few key differences that we will look at.

## Creating a simple JSX element

In this example we are storing JSX element directly inside an JavaScript constant.

```jsx
const heading = <h1>Bob's Used Cars</h1>;
```

_Note: You can store JSX in `var` or `let` variables as well, but in React often we use constants for performance reasons as they often do not change their value._

We can also add JavaScript inside of JSX elements by including the JavaScript inside of `{` `}` curly braces.

## JavaScript code inside JSX elements

```jsx
let name = "Bob";
const heading = <h1>{name}'s Used Cars</h1>;
```

This heading would show up in the browser as "Bob's Used Cars". 

## Comments inside JSX elements

Comments can also be added inside JSX elements.

```jsx
const heading = <h1>
                  Bob's Used Cars
                  { /* This is a multi line JavaScript comment */ }
                </h1>;
```

## Self closing elements

JSX allows us to use self closing HTML elements such as `<img>`, `<br>`, `<hr>` to name a few. However when using these elements in JSX we must remember to always add a closing `/` slash in order to avoid syntax errors. So these would need to written as `<img />`, `<br />`, `<hr />` in JSX.

```jsx
const logo = <img src="..." alt="..." />;
```

## Nesting JSX elements

We can nest elements inside of others the same as you do in HTML.

```jsx
const header = <header>
                <h1>Bob's Used Cars</h1>
                <p>Nobody beats our prices!</p>
              </header>;
```

Furthermore we can nest other existing JSX elements by referring to them by name wrapped in `{` `}` curly braces.

```jsx
const heading    = <h1>Bob's Used Cars</h1>;

const subheading = <p>Nobody beats our prices!</p>;

const header = <header>
                  {heading}
                  {subheading}
               </header>;
```

## Applying CSS class styles to JSX elements

In JavaScript the `class` keyword is reserved by the language so if you want to refer to a CSS class within a JSX element, then you must use the attribute `className` instead.

```jsx
const intro = <p className="introduction"> 
                Bob's used cars will provide you with the best price for the newest models guaranteed.
              </p>;
```

## Applying CSS inline styles to JSX elements

The `style` attribute allows us to add CSS inline styles directly to our JSX elements.

```jsx
const intro = <p style={ {fontSize: '2em', color: 'red'} }> 
                Bob's used cars will provide you with the best price for the newest models guaranteed.
              </p>;
```

The `style` attribute accepts an object. the object is filled with key value pairs where the key is a CSS property name and the value is the value to set for that CSS property. Css properties with `-` hyphens in their name such as `font-size` are converted to camel case `fontSize`. number values can be provided as numbers but units that must include suffixes such as `px` or `em` must be written as strings `'fontSize: 1em'` as an example.

We can also pass the style an object stored in another variable or constant.

```jsx
const introStyle = {
        fontSize: '2em',
        color: 'red'
      };

const intro = <p style={ introStyle }> 
                Bob's used cars will provide you with the best price for the newest models guaranteed.
              </p>;
```