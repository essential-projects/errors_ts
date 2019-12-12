# errors_ts

A technical error provider.

The errors are based on HTTP, but can be used anywhere else as well.
This is also the set of errors that the ProcessEngine uses internally.

## Usage

Installation:

```sh
npm install --save @essential-projects/errors_ts
```

Usage in NodeJS:

```js
const ERRORNAME = require('@essential-projects/errors_ts').ERRORNAME;
// or
const {ERRORNAME1, ERRORNAME2, ERRORNAME3} = require('@essential-projects/errors_ts');

const error = new ERRORNAME('fancy error message');
```

Usage in TypeScript:

```ts
import * as Errors from '@essential-projects/errors_ts';
// or
import {ERRORNAME1, ERRORNAME2, ERRORNAME3} from '@essential-projects/errors_ts';

const error = new Errors.ERRORNAME('fancy error message');
const anotherError = new ERRORNAME1('fancy error message');
```

Where `ERRORNAME` is the error you want to import.

All errors from this package have the `isEssentialProjectsError`-property, so that they can be easily recognized as such.

## Serialization and Deserialization

There are two ways to serialize/deserialize the errors:

### Direct serialization

**Serialization:**

Each error has a `serialize` function which creates a string representation of the error object.

For example:

```ts
import {InternalServerError} from '@essential-projects/errors_ts';

const error = new InternalServerError('error!');
const serializedError = error.serialize();
```

**Deserialization:**

The `BaseError` class provides a static `deserialize` function, which accepts a string argument.
It tries to parse the string into a corresponding `EssentialProjects` error and returns the result.

For example:

```ts
import {BaseError} from '@essential-projects/errors_ts';

const serializedError = '{"errorClassName":"InternalServerError","code":500,"message":"Process was terminated!","callStack":"InternalServerError: Process was terminated!\n    at <InsertStackHere>"}';
const error = BaseError.deserialize();
```

**Note:**
The function will throw an error, if the given string does not properly represent an EssentialProjects error!

### Serializer functions

We also provide a global `serialize` and `deserialize` function, which work independently from any internal errors.

Unlike the serializer functions attached to `BaseError`, these functions are also able to handle base `Error` objects and even plain JSONs.

Example:

```ts
import {deserializeError, InternalServerError, serializeError} from '@essential-projects/errors_ts';

const internalServerError = new InternalServerError('error!');
const basicError = new Error('error!');
const untypedError = {message: 'Oh no, where did my type info go!?', code: 666};

// Serializing errors
const serializedInternalServerError = serializeError(internalServerError);
const serializedBasicError = serializeError(basicError);
const serializedUntypedError = serializeError(untypedError);

// Deserializing errors
// The results should match the errors declared above
const deserializedInternalServerError = deserializeError(serializedInternalServerError);
const deserializedBasicError = deserializeError(serializedBasicError);
const deserializedUntypedError = deserializeError(serializedUntypedError);
```

Use these, if you cannot be entirely certain that an error will be from `@essential-projects/errors_ts`.

## Test

You can run the tests by simply calling:

```bash
npm test
```

## Error Codes

The Errors are mostly based on [HTTP status codes](https://de.wikipedia.org/wiki/HTTP-Statuscode).
Every Error, except for the `BaseError` extends `BaseError`, which in turn extends `Error`.

| Name                               | Code    |
| ---                                | ---     |
| BaseError                          |         |
|                                    |         |
| **Information Errors**             | **1xx** |
| ContinueError                      | 100     |
| SwitchingProtocolsError            | 101     |
| ProcessingError                    | 102     |
|                                    |         |
| **Redirect Errors**                | **3xx** |
| MultipleChoicesError               | 300     |
| MovedError                         | 301     |
| FoundError                         | 302     |
| SeeOtherError                      | 303     |
| NotModifiedError                   | 304     |
| UseProxyError                      | 305     |
| TemporaryRedirectError             | 307     |
| PermanentRedirectError             | 308     |
|                                    |         |
| **Client Errors**                  | **4xx** |
| BadRequestError                    | 400     |
| UnauthorizedError                  | 401     |
| PaymentRequiredError               | 402     |
| ForbiddenError                     | 403     |
| NotFoundError                      | 404     |
| MethodNotAllowedError              | 405     |
| NotAcceptableError                 | 406     |
| ProxyAuthenticationRequiredError   | 407     |
| RequestTimeoutError                | 408     |
| ConflictError                      | 409     |
| GoneError                          | 410     |
| LengthRequiredError                | 411     |
| PreconditionFailedError            | 412     |
| RequestTooLargeError               | 413     |
| URLTooLongError                    | 414     |
| UnsupportedMediaTypeError          | 415     |
| RequestedRangeNotSatisfiableError  | 416     |
| ExpectationFailedError             | 417     |
| ImATeapotError                     | 418     |
| PolicyNotFulfilledError            | 420     |
| MisdirectredRequestError           | 421     |
| UnprocessableEntityError           | 422     |
| LockedError                        | 423     |
| FailedDependencyError              | 424     |
| UpgradeRequiredError               | 426     |
| PreconditionRequiredError          | 428     |
| TooManyRequestsError               | 429     |
| RequestHeaderTooLargeError         | 431     |
| UnavaliableForLegalReasonsError    | 451     |
|                                    |         |
| **Server Errors**                  | **5xx** |
| InternalServerError                | 500     |
| NotImplementedError                | 501     |
| BadGatewayError                    | 502     |
| ServiceUnavaliableError            | 503     |
| GatewayTimeoutError                | 504     |
| VersionNotSupportedError           | 505     |
| InsufficientStorageError           | 507     |
| LoopDetectedError                  | 508     |
| BandwithLimitExceededError         | 509     |
| NetworkAuthenticationRequiredError | 511     |
