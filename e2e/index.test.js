import { Selector } from "testcafe";

const TEST_URL = 'http://127.0.0.1';
fixture("/").page(`${TEST_URL}/`);
test(`users should be able to view the '/' page`, async t => {
  await t
    .navigateTo(TEST_URL)
    .expect(Selector("H1").withText("All Users").exists)
    .ok();
});
