function createInc() {
  let count = 0;
  function inc() {
    count++;
  }
  let message = ` babbbb ${count}`;
  function log() {
    console.log(message);
  }
  return [log, inc];
}

const [log, inc] = createInc();
inc();
inc();
inc();
inc();
log();
