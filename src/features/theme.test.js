import * as themeActions from './theme';
import themeReducer from './theme';

describe('Theme actions', () => {
  it('should create a toggle action object', () => {
    expect(themeActions.toggle()).toEqual({
      type: 'theme/toggle',
    });
  });
  it('should create a set action objet', () => {
    expect(themeActions.set('light')).toEqual({
      type: 'theme/set',
      payload: 'light',
    });
    expect(themeActions.set('dark')).toEqual({
      type: 'theme/set',
      payload: 'dark',
    });
  });
});

describe('Theme Reducer', () => {
  it('should return the initial state', () => {
    expect(themeReducer(undefined, { type: '@INIT' })).toEqual('light');
  });
  it('should handle theme/toggle', () => {
    expect(themeReducer('light', themeActions.toggle())).toEqual('dark');
    expect(themeReducer('dark', themeActions.toggle())).toEqual('light');
  });
  it('should handle theme/set', () => {
    expect(themeReducer('light', themeActions.set('dark'))).toEqual('dark');
    expect(themeReducer('dark', themeActions.set('light'))).toEqual('light');
  });
  it('should return state on invalid action', () => {
    expect(themeReducer('light', { type: 'invalid' })).toEqual('light');
  });
});
