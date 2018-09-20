import until from 'async-until';

export default async function retry(fn, opts) {
  try {
    await until(() => {
      try {
        fn();
        return true;
      } catch (err) {
        return false;
      }
    }, opts);
  } catch (err) {
    // At this point we know the condition failed, but we want to let the
    // original exception bubble up
    fn();
  }
}
