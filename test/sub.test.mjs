import assert from "node:assert/strict";
import test from "node:test";
import { sub } from "../src/sum.mjs";

test("resta", () => assert.equal(sub(5, 3), 2));
