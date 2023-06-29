let startTime = 0;

function start() {
  startTime = Date.now();
}

function stop() {
  return parseFloat((Date.now() - startTime) / 1000, 10);
}

export { start, stop };
