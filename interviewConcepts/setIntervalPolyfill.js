const { setIntervalPolyfill, clearIntervalPolyfill } = createIntervalPolyfill();
function createIntervalPolyfill() {
  function setIntervalPolyfill(cb, timeout) {}

  return {
    setIntervalPolyfill,
    clearIntervalPolyfill,
  };
}
