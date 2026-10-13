import assert from "node:assert/strict";
import test from "node:test";
import { sum } from "../src/sum.mjs";

test("b", () => assert.ok(typeof sum === "function"));
