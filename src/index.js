import until from 'async-until';

export default async function retry(fn, opts = {}) {
  const { timeout = 1000 } = opts;
  const untilOpts = { ...opts, timeout };

  try {
    await until(() => {
      try {
        fn();
        return true;
      } catch (err) {
        return false;
      }
    }, untilOpts);
  } catch (err) {
    // At this point we know the condition failed, but we want to let the
    // original exception bubble up
    fn();
  }
}
