## Table of Contents

1. [Introduction](#introduction)
2. [State](#state)

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
