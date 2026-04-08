import { assertEquals } from '@std/assert';

import Target from './main.ts';

const instance = new Target();

Deno.test(function add() {
  const a = 2;
  const b = 3;

  const result = instance.add(a, b);

  assertEquals(result, 5);
  assertEquals(typeof result, 'number');
});

Deno.test(function subtract() {
  const a = 2;
  const b = 3;

  const result = instance.subtract(a, b);

  assertEquals(result, -1);
  assertEquals(typeof result, 'number');
});

Deno.test(async function awaited() {
  const startTime = Date.now();
  const result = await instance.awaited();
  const endTime = Date.now();

  const executionTimeMs = endTime - startTime;

  assertEquals(executionTimeMs >= 200, true);
  assertEquals(executionTimeMs <= 300, true);
  assertEquals(result, 'awaited');
});

Deno.test(function loadHelloHtml() {
  const result = instance.loadHelloHtml();

  assertEquals(result.includes('<html>'), true);
  assertEquals(result.includes('<head>'), true);
});

Deno.test(function getCurrentEnv() {
  const result = instance.getCurrentEnv();

  assertEquals(result, 'test');
});
