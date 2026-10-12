In React, useRef is a Hook that lets you store a value between renders or access a DOM element directly without causing a re-render when the ref changes.

In your Nova Timer App, you're already using useRef to focus the input and Start button and to store the timer interval.

1. Syntax of useRef
tsx
const ref = useRef(initialValue);
useRef() creates a ref object.

ref.current stores the value.

Changing ref.current does not trigger a re-render.
2. Three common uses of useRef
A. Access a DOM element
B. Store a value without triggering a re-render
C. Store a timer ID
This is how useRef helps in your timer application.
3. useRef vs useState
Feature

useRef

useState

Stores values between renders

Yes

Yes

Changing the value triggers a re-render

No

Yes

Access DOM elements

Yes

No, not directly

Store timer IDs

Yes

Possible, but usually unnecessary

Update visible UI

Not by itself

Yes
