# Waapi easing

Waapi bezier-functions as css string and js function

## Example

### Common functions

```ts
import { Easing } from "waapi-easing"

let ease = new Easing("ease")

ease.string     // "ease"
ease.function   // (n: progress) => progress
```

> Note: `progress` is a number between 0 and 1.

These are all available common function: 

 * linear
 * **ease**
 * easeIn
 * easeOut
 * **easeInOut**

### Custom functions

```ts
let custom = new Easing(.48, .165, .325, .97)

custom.string   // "cubic-bezier(.48, .165, .325, .97)"
custom.function // (n: progress) => progress
```


## Conribute

All feedback is appreciated. Create a pull request or write an issue.
