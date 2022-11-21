## Table of Contents

1. [Introduction](#introduction)
2. [State](#state)
3. [Event Handling](#event-handling)
4. [Directives](#directives)
5. [Component](#component)
6. [Pipes](#pipes)

### Introduction

To install Angular CLI:

```
npm install -g @angular/cli
```

Angular CLI allows us to have an access to `ng` and it is going to be used all the time when we create angular app.\
To run/start an app, use:

```
npm run start
/OR
ng serve
```

**Styles**\
There are 2 styles in the generated angular project: `app.component.css` and `styles.css`. The difference between the two is that styles inside the `app.component.css` file are scoped to `app.component.html` file, while `styles.css` file styles are applicable globally.\
To apply styles from `sematic-ui-css`, use inside the `styles.css` file:

```
@import "semantic-ui-css/semantic.css";
```

### State

The state of our app is going t be stored in the `app.component.ts` file.

### Event Handling

Event Binding Syntax System

```
<button (click) ="addMember())">Add</button>
```

Angular is going to interpret "addMember()" as a JS method, not a string. All the methods are stored in the `app.component.ts` file. So, this file the state of our app and any methods that are going to manipulate our state.\
For Angular any input event is gonna be called an input event and it is going to listen any changes on a specific input.

### Directives

There are two types of directives:

- Structural Directives are going to change HTML file structurally by adding, removing or updating elements.
- Attribute Directives are going to change dynamically the attributes of html elements. And to make it work we need to add square brackets around the attribute `[value] = "newMemberName"` and make it equal to specific variable inside the `app.component.ts` file.

In order to get any piece of state inside of the html element, we have to wrap it inside the two curly braces `{{}}`

### Component

To create a new component. run:

```
ng g component Team
```

It is going to add a `team` dir inside of the `app` dir.
To refer to the `team` component inside of the `app.component.html` component, we need to go to the
`team.component.ts` file, and copy `selector` value from there.

### Pipes

Pipes are ways that we can transform a data. For example, if we want to transform user entered input values into upper case started letters, then we use `{{name | titlecase}}`
