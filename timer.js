const args = process.argv.slice(2);
const timers = args.filter(arg => !isNaN(Number(arg)));

console.log(`Setting ${timers.length} timer(s)...`);

for (const timer of timers) {
  if (timer > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`${timer} second timer is complete.)`);
    }, timer * 1000);
    console.log(`Timer is set for ${timer} seconds...`);
  }
};
