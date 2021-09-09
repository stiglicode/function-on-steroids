# **Extended JS Functions** - _JavaScript on steroids_

_Code name: JSoS or XJSF_

## **About** JSoS

_These functions seems like as their native siblings but they've got additional super powers_

- **Main power:** These functions can handle more inputs instead of only one input like native ones

## **Installation**

**Using npm:**

```shell
$ npm i js-on-steroids@latest
```

**Using browser:** GitHub repo: [stiglicode/js-on-steroids](https://github.com/stiglicode/js-on-steroids/archive/refs/heads/master.zip)

**Importing all functions to project:**

```js
// Using ES modules
import "js-on-steroids";
//
// -----------------------------------------------------------------------------
//
// Using CommonJS modules
require("js-on-steroids");
//
// -----------------------------------------------------------------------------
//
// Using browser ( local )
<script
	src="./js-on-steroids-master/dist/steroid-js.min.js"
	type="text/javascript"
	charset="UTF-8"
	defer
></script>;
// [--!!-- Option to use CDN is not supported, yet. --!!--]
```

---

## **Options** _( Helpers )_

These "Helpers" functions are optional so you do not have necessary used them. They have make simplier the usage of Function results. **Both helpers function can be used only on Array.**

| Helper             | Argument                          | Parent              | Result   | Description                |
| ------------------ | --------------------------------- | ------------------- | -------- | -------------------------- |
| .asArray()         | **null**                          | _typeof_ **String** | `array`  | Return going to be array   |
| .asString( _arg_ ) | **bolean(** true _or_ false **)** | _typeof_ **String** | `string` | Return going to be string. |

> **NOTE #1**: If you pass string as argument **_exampleString.steroid_split(".")_** | function behavior will the be same as the native **_String.prototype.split()_** function.

> **NOTE #2**: If you use only the function, without helpers, function will return an array.

> **NOTE #3**: If in asString helper has been passed true as argument, return going to be a string without white spaces. But it if has been argument as false,null or nothing, return goint to be a string with removed separators

---

## **List of all functions**

| Function name              | Arguments                                 | Helpers | Status           |
| -------------------------- | ----------------------------------------- | ------- | ---------------- |
| .steroid*split( \_arg* )   | _typeof_ **String** or _typeof_ **Array** | `True`  | **Useable**      |
| .steroid*replace( \_arg* ) |                                           |         | **In dev stage** |

---

## **ESF** - _Extended Split Function_

Basic usage:

```js
// Load the function from node_modules.
import "js-on-steroids";

// Start using

let exampleString =
	"Hi, I am an example string. And I have an example sentence";

exampleString.steroid_split([",", "."]);

// Return ["H","i", "I", "am", "an", "example", "string", "And", "I", "have", "an", "example"]
```

Return as array:

```js
import "js-on-steroids";

// Start using

let exampleString =
	"Hi, I am an example string. And I have an example sentence";
exampleString.steroid_split([",", "."]).asArray();

// Return ["H","i", "I", "am", "an", "example", "string", "And", "I", "have", "an", "example"]
```

Return as string:

```js
import "js-on-steroids";

// Start using

// Argument = null
let exampleString =
	"Hi, I am an example string. And I have an example sentence";
exampleString.steroid_split([",", "."]).asString();
//
// Return "H i I am an example string And I have an example"

// Argument = false
let exampleString =
	"Hi, I am an example string. And I have an example sentence";
exampleString.steroid_split([",", "."]).asString(false);
//
// Return "H i I am an example string And I have an example"

// Argument = true
let exampleString =
	"Hi, I am an example string. And I have an example sentence";
exampleString.steroid_split([",", "."]).asString(true);
//
// Return "HiIamanexamplestringAndIhaveanexample"
```

## **Help with development**

If you find any problems please let me know about them at GitHub Issue. Or you have better way how to make better architecture of library, please let me know. I am an young developer who is still learing. I don`t know everything. But I know that knowing everything is impossible, that makes me to make turn to you. If you will be that nice and know how to make library better, please let me know

**Thank you**

---

## **License**

Extended Split Functions are [MIT licensed](./LICENSE).
