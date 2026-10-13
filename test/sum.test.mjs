import assert from "node:assert/strict";
import test from "node:test";
import { sum } from "../src/sum.mjs";

test("suma", () => assert.equal(sum(2, 3), 5));
