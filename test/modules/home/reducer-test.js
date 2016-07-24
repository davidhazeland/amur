import test from 'tape';
import freeze from 'deep-freeze';
import reducer, {actions} from 'modules/home';

test('[Home module] reducer', assert => {
  const state = freeze({});
  reducer(state, {type: 'INVALID'});

  assert.pass('should not change passed state');
  assert.end();
});
