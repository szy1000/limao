export default {
  namespace: 'global',
  state: {
    counter: 100,
    list: [],
  },

  effects: {
    // getData: function* ({payload}, {call, put}) {
    //   const data = yield call(SomeService.getEndpointData, payload, 'maybeSomeOtherParams');
    //   yield put({ type: 'getData_success', payload: data });
    // },
  },
  reducers: {},
}
