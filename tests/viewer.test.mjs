import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
test('viewer identifies its build',()=>assert.match(html,/id="build-id"/));
test('camera is orthographic and fixed',()=>assert.match(html,/new THREE.OrthographicCamera/));
test('no OrbitControls',()=>assert.doesNotMatch(html,/new\s+OrbitControls\s*\(/));
test('rotation is only around Y axis',()=>assert.match(html,/pivot.rotation.y\+=dx/));
test('mobile viewport is supported',()=>assert.match(html,/name="viewport"/));
