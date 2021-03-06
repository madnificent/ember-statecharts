import useMachine from './usables/use-machine';
import { matchesState as xstateMatchesState } from 'xstate';

function matchesState(state, statechartPropertyName = 'statechart') {
  return function () {
    return {
      get() {
        return xstateMatchesState(state, this[statechartPropertyName].state.value);
      },
    };
  };
}

export { useMachine, matchesState };
