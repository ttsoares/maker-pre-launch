# Frontend Mentor - Maker pre-launch landing page solution

This is a solution to the [Maker pre-launch landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/maker-prelaunch-landing-page-WVZIJtKLd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! That doesn’t look like an email address"

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/ttsoares/maker-pre-launch)
- Live Site URL: [Add live site URL here](https://maker-pre-launch.expo.app)

## My process

### Built with

- React Native and Expo Go
- Styles with Nativewind
- Desktop-first workflow
- [React Native](https://reactnative.dev/) - JS framework.
- [Nativewind](https://www.nativewind.dev) - TailwindCSS for React Native.
- [Expo Go](https://expo.dev/) - Universal native apps with React that run on Android, iOS, and the web.

### What I learned

The context of React Native with Expo Go has some issues to deal with SVG files. There are packages to mitigate
the difficulties but, in general, those are not compatible with Expo Go.
In this case the soluutoin was to transform the SVG files to true React compoents to be handled by the package
react-native-svg.

```jsx
import type { SVGProps as ReactSVGProps } from "react";
import React from "react";
interface IconCheckProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
  fill?: string;
}
const IconCheck = ({ fill = "#093F68", ...props }: IconCheckProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={9} {...props}>
    <path
      fill={fill} // Use the fill prop here
      d="m10.319.768 1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
    />
  </svg>
);
export default IconCheck;
```

### Continued development

The use of converted SVG files to React components poses challenges if the images must be used as background.
The normal procedure is to use the <ImageBackground> tag of React Native. But this demands deep customizations of
enviroment if used with SVG files.
That will be addressed in future projects.

### Useful resources

- [Expo Go](https://www.youtube.com/watch?v=XgWENEf3oFw&list=PLC3y8-rFHvwgVmqbtQkPDxkvDf6w5_eGA) - Frontend Made Easy.
- [Nativewind](https://www.nativewind.dev/getting-started/installation) - Documentation.

## Author

- Website - [Thomas TS](https://buildesign.vercel.app/)
- Frontend Mentor - [@ttsoares](https://www.frontendmentor.io/profile/ttsoares)
- Linkedin - [thomas-soares-6791781b/](https://www.linkedin.com/in/thomas-soares-6791781b/)

## Acknowledgments

Countless hours learning from several on Youtube and StackOverflow, specially Wishwas from @Codevolution.
The AI in my IDE: Windsurf.
