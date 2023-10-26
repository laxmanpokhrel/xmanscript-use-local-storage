# @xmanscript/uselocalstorage

## Introduction

`@xmanscript/uselocalstorage` is a React custom hook that simplifies local storage management in your React applications. It provides a convenient way to read and write data to the browser's local storage and handle changes to local storage values. This hook is designed to be versatile and easy to use.

## Table of Contents

1. [Installation](#installation)
2. [Basic Usage](#basic-usage)
3. [API](#api)
4. [Examples](#examples)

## Installation

You can install `@xmanscript/uselocalstorage` using npm or yarn:

```bash
npm install @xmanscript/uselocalstorage
# or
yarn add @xmanscript/uselocalstorage
```
## Basic Usage
To use the useLocalStorage hook, import it in your React component and call it with a key that corresponds to your local storage item. Optionally, you can provide a callback function to handle changes to the local storage value.

Here's a simple example:
```tsx
import React from 'react';
import useLocalStorage from '@xmanscript/uselocalstorage';

function MyComponent() {
  const { getItem, setItem, removeItem } = useLocalStorage('myKey', () => {
    // This callback will be triggered when 'myKey' changes in other tabs or windows.
    // You can update your component's state or take other actions here.
  });

  // Use the functions to interact with local storage
  const storedValue = getItem(); // Retrieve the value
  setItem('newData'); // Set a new value
  removeItem(); // Remove the item from local storage
}
```

## API
### useLocalStorage(key: string, onStorageChange?: () => any)

* `key` (string, required): The key used to identify the local storage item.
* `onStorageChange` (function, optional): A callback function that is triggered when the local storage item with the specified key changes in other tabs or windows.

Returns an object with the following methods:

* `getItem(): string | null`: Retrieves the value stored in local storage.
* `setItem(value: string)`: void: Sets a new value in local storage and triggers the onStorageChange callback (if provided).
* `removeItem(): void`: Removes the item from local storage and triggers the onStorageChange callback (if provided).


## Examples
### Creating an Authentication Hook
Here's an example of creating an authentication hook using useLocalStorage:
```tsx
import { useState } from 'react';
import useLocalStorage from '@xmanscript/uselocalstorage';

export default function useAuth() {
  // Create a React state variable to keep track of the authentication status.
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  // Use the useLocalStorage hook to manage the 'token' key in local storage.
  const { setItem, removeItem } = useLocalStorage('token', () => {
    // This callback is triggered when the 'token' value in local storage changes.
    // It allows you to update the component's state based on changes to the 'token'.
    const newToken = localStorage.getItem('token');
    setIsAuthenticated(!!newToken);
  });

  // The logIn function is used to set the 'token' in local storage.
  function logIn(authToken: string) {
    setItem(authToken); // Set the 'token' to the provided value.
  }

  // The logOut function is used to remove the 'token' from local storage.
  function logOut() {
    removeItem(); // Remove the 'token' from local storage.
  }

  // Return an object with authentication status and functions to log in and out.
  return { isAuthenticated, logIn, logOut };
}
```
Explanation:

1. The `useAuth` hook is designed to manage authentication in your application. It keeps track of the user's authentication status using a 'token' stored in local storage.

2. The `useState` hook is used to create a state variable called isAuthenticated. It's initialized based on the presence of a 'token' in local storage. If a 'token' exists, isAuthenticated is set to true; otherwise, it's false.

3. The `useLocalStorage` hook is used to manage the 'token' key in local storage. It takes a callback function as an argument, which is executed whenever the 'token' value in local storage changes. In this example, the callback function updates the isAuthenticated state variable based on the presence of the 'token.'

4. The `logIn` function allows users to log in by setting the 'token' in local storage. It takes an authToken parameter, which is the token returned after a successful login. The setItem function from useLocalStorage is used to set this value in local storage.

5. The `logOut` function is used to log the user out. It removes the 'token' from local storage using the removeItem function from useLocalStorage.

Finally, the useAuth hook returns an object with the current authentication status (`isAuthenticated`) and functions to log in (`logIn`) and log out (`logOut`).



## Conclusion

The `@xmanscript/uselocalstorage` custom hook simplifies local storage management and provides a flexible way to handle changes in local storage values. It offers a convenient API to interact with local storage, making it easy to create applications that require client-side data persistence.

Key benefits of using `@xmanscript/uselocalstorage`:

- Effortless local storage management: Store and retrieve data in local storage with ease.
- Real-time updates: The hook triggers callbacks when local storage values change in other tabs or windows.
- Versatility: Use it for various use cases, from authentication tokens to user preferences.
- Improved user experience: Keep your application's state in sync with local storage changes.

We encourage you to explore the capabilities of `@xmanscript/uselocalstorage` and consider how it can enhance your React applications. Whether you're building a user authentication system, saving user preferences, or managing application state, this hook is a valuable addition to your toolkit.

Feel free to reach out to us for support or to report any issues on [GitHub](https://github.com/laxmanpokhrel/xmanscript-use-local-storage/issues). We look forward to seeing how you use `@xmanscript/uselocalstorage` to streamline your development process and improve the user experience of your applications.
