# Portfolio Project Overview

## Purpose

I created this project to flex my web development skills by coding a quick little portfolio website from scratch.

The design was inspired by the neubrutlism trend I've been seeing everywhere recently-- a style that is generally characterized by solid clashing colours, black strokes, drop shadows without blur and quirky animations. (It looks a lot better than it sounds, trust me!) A really great example of neubrutalism design done well is [Gumroad's website](https://gumroad.com).

> Read more about [Neubrutalism](https://uxdesign.cc/why-im-excited-about-the-neubrutalism-style-in-web-design-4ab800c2bb80) 

## Colours

These are the colours that I decided to go with:

<img src="https://user-images.githubusercontent.com/5445437/188759762-c0b00967-9304-4b51-8f68-627408b65a9d.png" height="200px"/>

Since the overall colour scheme was so bright, it was very obvious (almost blindingly-so) that I needed to add dark mode functionality as well. This was as simple as adding some JavaScript that toggles the class of the root element between light and dark, and using CSS variables for the colours. Since my logo text in the footer is an SVG I was able to dynamically change the colour of the fill as well.  

I outlined most sections of the page with black strokes, and used a solid drop-shadow for the navigation menu. 

## Animations
I incorporated animation into the design by adding CSS hover animations on the logo, navigation buttons, hero photo, and the marquee areas. 

I decided to deviate from the standard flat style typical of neubrutalist designs by adding an animated CSS background to the hero and footer areas. 

## Responsiveness

[More than half](https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-web-traffic-statistics/) of web traffic comes from mobile devices these days so the portfolio needed to be designed and coded with mobile-first design principles. I achieved this by laying out the projects section using CSS grid so that I could take advantage of repeat, minmax, and autofill. 

## Technologies

The whole site was written by hand in VSCode using only HTML, CSS & JavaScript.

## Challenges 

This project took about 4 hours to make, mostly because I spent a lot of tie playing with colours and fiddling with little deciding whether to use pixels or rems in certain places. 🤪

I thought that I had fully learned CSS grid prior to this, but when it came time to create a responsive grid layout for the projects section I struggled to make the layout cautomatically change the number of columns to fit the screen size. After some trial and error on my own I found this [article](https://ishadeed.com/article/css-grid-minmax/) by Ahmed, which did a great job explaining how to utilize minmax and auto-fill to achieve the result that I was looking for. I'm feeling a lot more comfortable using grid to create responsive layouts now.

This was also my first time implementing a theme switcher, which I found to be very simple. However, since I decided to implement this feature after I had coded most of the website, I had to go back and switch the hard-coded colour values to custom CSS variables, which was a pain. In the future, to make my designs more flexible I'm going to default to using variables for colours.
