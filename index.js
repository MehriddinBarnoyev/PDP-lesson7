let welcomeStarted;
let ism = prompt("Ismingizni kiriting");

const welcome = () => {
  welcomeFunction = setTimeout(alert(`Xush kelibsan ${ism}`), 3000);
};

const stop = () => {
  clearTimeout(welcome);
};
