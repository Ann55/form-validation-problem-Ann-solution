## Running the app

`npm run dev`

# [Form validation problem](https://github.com/Inquisitive-Learners/form-validation-problem)

We've created this problem to evaluate how developers tackle a real-world problem. If you've been assigned this problem you should spend around **2 hours** working on it. The last thing we want you to do is toil away for days on end!

If you've stumbled across this and want to work at [Inquisitive](https://www.inquisitive.com/) feel free to submit it too. We're always on the lookout for skilled developers.

## Problem definition

Included in this repository is an [index.html](index.html) file that contains a form. Your task is to convert this form into a React application. You must ensure all of the following rules are met before the form is posted to the (in this case imaginary) server:

- `Email` must be a valid email address.
- `Password` must be longer than 8 characters.
- `Colour` must be selected.
- At least two `Animals` must be chosen.
- If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.

## Other requirements

If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.

```html
<p class="error">
  <label for="field"></label>
  <input id="field" type="text" value="foo" />
</p>
```

## The cherry on the cake

Beyond the problem statement, show us the consideration you have given to some or all of the following:

- Accessibility
- UX / usability
- Browser support / compatibility
- Testing

## Submission

Please fork our repository, build your solution and email a link to `rose.pollock@inquisitive.com`.
