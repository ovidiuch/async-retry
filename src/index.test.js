/* eslint-env jest */

import retry from './';

it('fails if callback always crashes', async () => {
  const err = new Error('Boom');
  await expect(
    retry(() => {
      throw err;
    })
  ).rejects.toThrow(err);
});

it('succeeds if callback runs peacefully', async () => {
  await retry(() => {});
});

it('succeeds if callback (eventually) runs peacefully', async () => {
  const err = new Error('Boom');
  let i = 0;

  await retry(() => {
    if (i++ < 5) {
      throw err;
    }
  });
});
