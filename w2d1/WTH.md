# Tricky concepts & syntax

- Closures (End of lecture)
- Targeting objects keys
- [] vs .
- `throw new Error("I AM ERROR")`

```js

```

# How to approach a problem

Return "Hello" if the given value is a multiple 5, if not return "wazza"

INPUT: an integer
OUTPUT: string (hello or wazza)

FCT NAME: returnGreetingOnNumber

TRICKY : number % 5 => remainder of the entire division, 0-1-2-3-4

number % 5 === 0
!(number % 5)


```js
  const returnGreetingOnNumber = number => {
    if(number % 5 === 0){
      return "Hello"
    }
    return "wazza"
  }

  returnGreetingOnNumber(5)
  returnGreetingOnNumber(5.5)
  returnGreetingOnNumber(0)
  returnGreetingOnNumber("bob")
  returnGreetingOnNumber(true)
```

- First things:
  - Declare the function
  - Input value
  - Make a condition
  - Plan how the function will work with pseudocode



- Brute force ? No :(