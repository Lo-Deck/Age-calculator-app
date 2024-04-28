# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted



### Screenshot

![screenshot desktop](https://github.com/Lo-Deck/Age-calculator-app/blob/main/screenshot/Age%20calculator%20app-desktop.png).
![screenshot mobile](https://github.com/Lo-Deck/Age-calculator-app/blob/main/screenshot/Age%20calculator%20app-mobile.png).

![screenshot desktop-NoValidate](https://github.com/Lo-Deck/Age-calculator-app/blob/main/screenshot/Age%20calculator%20app-desktop-NoValidate.png).
![screenshot mobile-NoValidate](https://github.com/Lo-Deck/Age-calculator-app/blob/main/screenshot/Age%20calculator%20app-mobile-NoValidate.png).

![screenshot desktop-success](https://github.com/Lo-Deck/Age-calculator-app/blob/main/screenshot/Age%20calculator%20app-desktop-success.png).
![screenshot mobile-success](https://github.com/Lo-Deck/Age-calculator-app/blob/main/screenshot/Age%20calculator%20app-mobile-success.png).



### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Age-calculator-app).
- Live Site URL: [Website](https://lo-deck.github.io/Age-calculator-app/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned

I learned how to submit a form with API validity and exclude some input with HTML and JS.

```js
<input class="input-text" type="tel" id="day" name="day" placeholder="DD" minlength="1" maxlength="2" pattern="[1-9]{1}|[0-2]{1}[0-9]{1}|[3]{1}[0-1]{1}" required>

if( ((inputMonth <= 7 && inputMonth % 2 === 0) && (inputDay > 30)) || ((inputMonth >= 8 && inputMonth % 2 === 1) && (inputDay > 30)) )
```

and animate using `resultDay.classList.toggle('anim')` to make an animation.



### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.