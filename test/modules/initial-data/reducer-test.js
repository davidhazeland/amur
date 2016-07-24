import test from 'tape';
import freeze from 'deep-freeze';
import reducer, {actions} from 'modules/initial-data';

test('[InitialData module] reducer', assert => {
  const state = freeze({});
  reducer(state, {type: 'INVALID'});

  assert.pass('should not change passed state');
  assert.end();
});

test('[InitialData module] reducer', nest => {
  nest.test('...handle SET action', assert => {
    const action = actions.set({
      list: ['item']
    });
    const state = freeze({});
    const nextState = reducer(state, action);

    const actual = nextState;
    const expected = {
      list: ['item']
    };

    assert.deepEqual(actual, expected,
      'should assign initial data into state');
    assert.end();
  });
});
