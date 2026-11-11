import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
test('viewer identifies build',()=>assert.match(html,/id="build-id"/));
test('fixed orthographic camera',()=>assert.match(html,/new THREE.OrthographicCamera/));
test('orbit controls absent',()=>assert.doesNotMatch(html,/new\s+OrbitControls\s*\(/));
test('horizontal rotation only',()=>assert.match(html,/pivot.rotation.y\+=dx/));
test('customization controls',()=>{for(const id of ['color','trim-color','mask-color','emblem-text'])assert.ok(html.includes('id="'+id+'"'))});
test('pose selection available',()=>assert.match(html,/data-pose="up"/));
test('build version preview',()=>assert.match(html,/v0.2.1-preview/));

test('GLB poses are loaded independently',()=>{assert.match(html,/rodado_referencia_bracos_baixo\.glb/);assert.match(html,/rodado_referencia_bracos_alto\.glb/)});
test('GLB rotation pivot remains fixed',()=>{assert.match(html,/modelSlot=new THREE.Group\(\);pivot.add\(modelSlot\)/);assert.match(html,/model.position.sub\(center\)/)});
