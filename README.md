# async-retry

[![Build Status](https://travis-ci.org/skidding/async-retry.svg?branch=master)](https://travis-ci.org/skidding/async-retry)

Wait until cb doesn't throw or time out.

### Why not [zeit/async-retry](https://github.com/zeit/async-retry)?

I use this package for testing async behavior where running times are sensitive. What's different here?

- No exponential backoff strategy
- Callback is ran immediately
- Default loop interval is minimal
- Default timeout is less than a usual test timeout

These settings minimize the time spent waiting and don't require custom options in most cases. They work for tests because assertion execution is usually cheap (I think ¯\\\_(ツ)\_/¯).

## Usage

```js
retry(callback: Function, options: Object): Promise
```

See [async-until](https://github.com/skidding/async-until) for available options.

```js
await retry(() => {
  expect(onChange).toHaveBeenCalledWith({ count: 3 });
});
```
