# JavaScript Meta Programming Guide

## Table of Contents

- [Introduction](#introduction)
- [Proxies](#proxies)
  - [What are Proxies?](#what-are-proxies)
  - [Basic Example](#basic-example)
  - [Terminology](#terminology)
- [Handlers and Traps](#handlers-and-traps)
  - [Available Traps](#available-traps)
  - [Trap Examples](#trap-examples)
- [Revocable Proxy](#revocable-proxy)
- [Reflection](#reflection)
  - [What is Reflect?](#what-is-reflect)
  - [Reflect Methods](#reflect-methods)
  - [Benefits of Reflect](#benefits-of-reflect)
- [Practical Use Cases](#practical-use-cases)
  - [Validation](#validation)
  - [Default Values](#default-values)
  - [Logging and Debugging](#logging-and-debugging)
  - [Data Binding](#data-binding)
- [Best Practices](#best-practices)

---

## Introduction

The `Proxy` and `Reflect` objects allow you to intercept and define custom behavior for fundamental language operations (e.g., property lookup, assignment, enumeration, function invocation, etc.). With these two objects, you can program at the **meta level** of JavaScript.

**Meta programming** enables you to:
- Intercept and customize fundamental operations
- Create virtual properties
- Implement validation logic
- Add logging and debugging capabilities
- Build reactive data systems

---

## Proxies

### What are Proxies?

Proxy objects allow you to intercept certain operations and implement custom behaviors. A proxy wraps another object and intercepts operations like reading/writing properties, function calls, and more.

### Basic Example

Getting a property on an object:

```javascript
const handler = {
  get(target, name) {
    return name in target ? target[name] : 42;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

In this example:
- The Proxy object defines a **target** (an empty object) and a **handler** object
- The handler implements a `get` trap
- When accessing an undefined property, instead of returning `undefined`, it returns `42`

### Terminology

#### handler
A placeholder object which contains traps.

```javascript
const handler = {
  get(target, prop) { /* ... */ },
  set(target, prop, value) { /* ... */ }
};
```

#### traps
The methods that provide property access. This is analogous to the concept of traps in operating systems.

```javascript
// 'get' is a trap
get(target, property, receiver) {
  // Custom behavior
}
```

#### target
The object which the proxy virtualizes. It is often used as storage backend for the proxy.

```javascript
const target = { message: "Hello" };
const proxy = new Proxy(target, handler);
```

#### invariants
Semantics that remain unchanged when implementing custom operations. If you violate the invariants of a handler, a `TypeError` will be thrown.

Example invariant: A non-configurable property cannot be reported as non-existent by the `get` trap.

---

## Handlers and Traps

### Available Traps

The following table summarizes all available traps for Proxy objects:

| Handler / Trap | Interceptions |
|----------------|---------------|
| **handler.getPrototypeOf()** | `Object.getPrototypeOf()`<br/>`Reflect.getPrototypeOf()`<br/>`__proto__`<br/>`Object.prototype.isPrototypeOf()`<br/>`instanceof` |
| **handler.setPrototypeOf()** | `Object.setPrototypeOf()`<br/>`Reflect.setPrototypeOf()` |
| **handler.isExtensible()** | `Object.isExtensible()`<br/>`Reflect.isExtensible()` |
| **handler.preventExtensions()** | `Object.preventExtensions()`<br/>`Reflect.preventExtensions()` |
| **handler.getOwnPropertyDescriptor()** | `Object.getOwnPropertyDescriptor()`<br/>`Reflect.getOwnPropertyDescriptor()` |
| **handler.defineProperty()** | `Object.defineProperty()`<br/>`Reflect.defineProperty()` |
| **handler.has()** | Property query: `foo in proxy`<br/>Inherited property query: `foo in Object.create(proxy)`<br/>`Reflect.has()` |
| **handler.get()** | Property access: `proxy[foo]`, `proxy.bar`<br/>Inherited property access: `Object.create(proxy)[foo]`<br/>`Reflect.get()` |
| **handler.set()** | Property assignment: `proxy[foo] = bar`, `proxy.foo = bar`<br/>Inherited property assignment: `Object.create(proxy)[foo] = bar`<br/>`Reflect.set()` |
| **handler.deleteProperty()** | Property deletion: `delete proxy[foo]`, `delete proxy.foo`<br/>`Reflect.deleteProperty()` |
| **handler.ownKeys()** | `Object.getOwnPropertyNames()`<br/>`Object.getOwnPropertySymbols()`<br/>`Object.keys()`<br/>`Reflect.ownKeys()` |
| **handler.apply()** | `proxy(..args)`<br/>`Function.prototype.apply()`<br/>`Function.prototype.call()`<br/>`Reflect.apply()` |
| **handler.construct()** | `new proxy(...args)`<br/>`Reflect.construct()` |

### Trap Examples

#### get trap

```javascript
const handler = {
  get(target, prop, receiver) {
    console.log(`Property ${prop} was accessed`);
    return Reflect.get(target, prop, receiver);
  }
};

const proxy = new Proxy({ name: "John" }, handler);
console.log(proxy.name); // Logs: "Property name was accessed", then "John"
```

#### set trap

```javascript
const handler = {
  set(target, prop, value, receiver) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    }
    return Reflect.set(target, prop, value, receiver);
  }
};

const proxy = new Proxy({}, handler);
proxy.age = 25;     // Works
proxy.age = "25";   // Throws TypeError
```

#### has trap

```javascript
const handler = {
  has(target, prop) {
    if (prop.startsWith('_')) {
      return false; // Hide private properties
    }
    return Reflect.has(target, prop);
  }
};

const proxy = new Proxy({ _secret: 'hidden', public: 'visible' }, handler);
console.log('public' in proxy);  // true
console.log('_secret' in proxy); // false
```

#### deleteProperty trap

```javascript
const handler = {
  deleteProperty(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error('Cannot delete private properties');
    }
    return Reflect.deleteProperty(target, prop);
  }
};

const proxy = new Proxy({ _id: 1, name: 'John' }, handler);
delete proxy.name;  // Works
delete proxy._id;   // Throws Error
```

#### apply trap

```javascript
const handler = {
  apply(target, thisArg, argumentsList) {
    console.log(`Function called with args: ${argumentsList}`);
    return Reflect.apply(target, thisArg, argumentsList);
  }
};

const sum = (a, b) => a + b;
const proxy = new Proxy(sum, handler);
proxy(2, 3); // Logs: "Function called with args: 2,3", Returns: 5
```

#### construct trap

```javascript
const handler = {
  construct(target, args, newTarget) {
    console.log(`Constructor called with args: ${args}`);
    return Reflect.construct(target, args, newTarget);
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }
}

const ProxyPerson = new Proxy(Person, handler);
const john = new ProxyPerson('John'); // Logs: "Constructor called with args: John"
```

---

## Revocable Proxy

The `Proxy.revocable()` method creates a revocable Proxy object. This means the proxy can be revoked via the `revoke` function, which switches the proxy off.

After revocation, any operation on the proxy leads to a `TypeError`.

```javascript
const revocable = Proxy.revocable(
  {},
  {
    get(target, name) {
      return `[[${name}]]`;
    },
  },
);

const proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

// Revoke the proxy
revocable.revoke();

console.log(proxy.foo); // TypeError: Cannot perform 'get' on a proxy that has been revoked
proxy.foo = 1;          // TypeError: Cannot perform 'set' on a proxy that has been revoked
delete proxy.foo;       // TypeError: Cannot perform 'deleteProperty' on a proxy that has been revoked
console.log(typeof proxy); // "object" - typeof doesn't trigger any trap
```

**Use cases for revocable proxies:**
- Temporary access control
- Resource management
- Security boundaries
- Time-limited permissions

---

## Reflection

### What is Reflect?

`Reflect` is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of the proxy handler's traps.

Key characteristics:
- `Reflect` is **not a function object** (cannot be called or constructed)
- It's a plain object containing static methods
- Methods correspond one-to-one with proxy traps
- Helps with forwarding default operations from handler to target

### Reflect Methods

All Reflect methods correspond to proxy traps:

```javascript
Reflect.get(target, propertyKey[, receiver])
Reflect.set(target, propertyKey, value[, receiver])
Reflect.has(target, propertyKey)
Reflect.deleteProperty(target, propertyKey)
Reflect.getPrototypeOf(target)
Reflect.setPrototypeOf(target, prototype)
Reflect.isExtensible(target)
Reflect.preventExtensions(target)
Reflect.getOwnPropertyDescriptor(target, propertyKey)
Reflect.defineProperty(target, propertyKey, attributes)
Reflect.ownKeys(target)
Reflect.apply(target, thisArgument, argumentsList)
Reflect.construct(target, argumentsList[, newTarget])
```

### Benefits of Reflect

#### 1. Functional approach to operators

With `Reflect.has()`, you get the `in` operator as a function:

```javascript
Reflect.has(Object, "assign"); // true

// Instead of:
"assign" in Object; // true
```

#### 2. Better apply() function

**Before Reflect:**

```javascript
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

**With Reflect:**

```javascript
Reflect.apply(Math.floor, undefined, [1.75]); // 1

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

#### 3. Boolean return values instead of exceptions

**With Object.defineProperty():**

```javascript
try {
  Object.defineProperty(obj, 'prop', { value: 42 });
  // Success
} catch (e) {
  // Failed
}
```

**With Reflect.defineProperty():**

```javascript
if (Reflect.defineProperty(obj, 'prop', { value: 42 })) {
  // Success
} else {
  // Failed
}
```

#### 4. Proper this binding in proxy traps

```javascript
const handler = {
  get(target, prop, receiver) {
    // receiver ensures correct 'this' binding
    return Reflect.get(target, prop, receiver);
  }
};
```

---

## Practical Use Cases

### Validation

Validate object properties before setting them:

```javascript
const validator = {
  set(target, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('Age must be an integer');
      }
      if (value < 0 || value > 150) {
        throw new RangeError('Age must be between 0 and 150');
      }
    }
    return Reflect.set(target, prop, value);
  }
};

const person = new Proxy({}, validator);
person.age = 25;    // Works
person.age = -5;    // Throws RangeError
person.age = "25";  // Throws TypeError
```

### Default Values

Provide default values for missing properties:

```javascript
const withDefaults = (target, defaults) => {
  return new Proxy(target, {
    get(obj, prop) {
      return prop in obj ? obj[prop] : defaults[prop];
    }
  });
};

const settings = withDefaults(
  { theme: 'dark' },
  { theme: 'light', language: 'en', fontSize: 14 }
);

console.log(settings.theme);    // 'dark'
console.log(settings.language); // 'en'
console.log(settings.fontSize); // 14
```

### Logging and Debugging

Track property access and modifications:

```javascript
const createLogger = (target, name) => {
  return new Proxy(target, {
    get(obj, prop) {
      console.log(`[${name}] Getting property "${prop}"`);
      return Reflect.get(obj, prop);
    },
    set(obj, prop, value) {
      console.log(`[${name}] Setting property "${prop}" to "${value}"`);
      return Reflect.set(obj, prop, value);
    }
  });
};

const user = createLogger({ name: 'John' }, 'User');
user.name;        // Logs: [User] Getting property "name"
user.age = 30;    // Logs: [User] Setting property "age" to "30"
```

### Data Binding

Create reactive data with automatic updates:

```javascript
const createReactive = (target, onChange) => {
  return new Proxy(target, {
    set(obj, prop, value) {
      const oldValue = obj[prop];
      const result = Reflect.set(obj, prop, value);
      if (oldValue !== value) {
        onChange(prop, oldValue, value);
      }
      return result;
    }
  });
};

const state = createReactive(
  { count: 0 },
  (prop, oldVal, newVal) => {
    console.log(`${prop} changed from ${oldVal} to ${newVal}`);
  }
);

state.count = 1;  // Logs: "count changed from 0 to 1"
state.count = 2;  // Logs: "count changed from 1 to 2"
```

### Negative Array Indices

Access arrays with negative indices (like Python):

```javascript
const createNegativeArray = (arr) => {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (Number.isInteger(index) && index < 0) {
        return target[target.length + index];
      }
      return Reflect.get(target, prop);
    }
  });
};

const arr = createNegativeArray([1, 2, 3, 4, 5]);
console.log(arr[-1]); // 5
console.log(arr[-2]); // 4
```

### Private Properties

Hide properties that start with underscore:

```javascript
const hidePrivate = (target) => {
  return new Proxy(target, {
    has(obj, prop) {
      if (typeof prop === 'string' && prop.startsWith('_')) {
        return false;
      }
      return Reflect.has(obj, prop);
    },
    ownKeys(obj) {
      return Reflect.ownKeys(obj).filter(
        key => typeof key !== 'string' || !key.startsWith('_')
      );
    },
    get(obj, prop) {
      if (typeof prop === 'string' && prop.startsWith('_')) {
        throw new Error(`Cannot access private property: ${prop}`);
      }
      return Reflect.get(obj, prop);
    }
  });
};

const obj = hidePrivate({ _secret: 'hidden', public: 'visible' });
console.log('public' in obj);  // true
console.log('_secret' in obj); // false
console.log(Object.keys(obj)); // ['public']
```

---

## Best Practices

### 1. Always use Reflect in traps

Always use `Reflect` methods to perform the default operation:

```javascript
// Good
const handler = {
  get(target, prop, receiver) {
    // Custom logic here
    return Reflect.get(target, prop, receiver);
  }
};

// Bad - manual implementation is error-prone
const handler = {
  get(target, prop) {
    return target[prop]; // Doesn't handle receiver correctly
  }
};
```

### 2. Return appropriate values

Ensure traps return the expected types:

```javascript
// set trap must return boolean
set(target, prop, value) {
  // ... validation logic
  return Reflect.set(target, prop, value); // Returns boolean
}

// has trap must return boolean
has(target, prop) {
  return Reflect.has(target, prop); // Returns boolean
}
```

### 3. Respect invariants

Don't violate JavaScript's invariants or you'll get TypeErrors:

```javascript
// Bad - violates invariant
const handler = {
  getPrototypeOf(target) {
    return null; // If target is non-extensible, must return actual prototype
  }
};
```

### 4. Performance considerations

Proxies add overhead. Use them judiciously:

```javascript
// Don't wrap frequently accessed objects unnecessarily
// Only use proxies when you need interception

// Good - proxy for validation
const validatedUser = new Proxy(user, validator);

// Bad - unnecessary proxy
const simpleObject = new Proxy({}, {}); // Just use {}
```

### 5. Use revocable proxies for temporary access

```javascript
const { proxy, revoke } = Proxy.revocable(sensitiveData, handler);

// Give temporary access
temporaryFunction(proxy);

// Revoke access when done
revoke();
```

### 6. Document proxy behavior

Make it clear when objects are proxies:

```javascript
/**
 * Creates a validated user object
 * @returns {Proxy} A proxy that validates user properties
 */
function createUser(data) {
  return new Proxy(data, validationHandler);
}
```

---

## Additional Resources

- [MDN Web Docs - Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [MDN Web Docs - Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
- [ECMAScript Proxy Specification](https://tc39.es/ecma262/#sec-proxy-objects)

---
