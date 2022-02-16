// ex - 1 , event listners

// ex - 2,

const strLength = (name, x) =>
  `my name is ${name} and it has ${x(name)} characters.`;
const len = (name) => name.length;
console.log(strLength("anurag", len));

// // ex-3

const willThanosKillMe = (name, f1, f2) => (name.length % 2 == 0 ? f1() : f2());
const sucess = () => "success";
const loss = () => "lost";
console.log(willThanosKillMe("anurag", sucess, loss));

// ex - 4

const timedMessage = (msg) => setTimeout(() => console.log("msg"), 2000);
timedMessage("hello anurag");

// ex-6.1

const repeatMsg = (msg, time) => setInterval(() => console.log(msg), time);

repeatMsg("fuck you", 1000);

// ex 6.2

const countdown = (num) => {
  let x = num;
  let interval = setInterval(() => {
    bang(x, interval);
    --x;
  }, 1000);
};

const bang = (n, interval) => {
  if (n == 0) {
    console.log("bang bang");
    clearInterval(interval);
  } else {
    console.log(n);
  }
};
countdown(5);

// ex 7.1 React

{
  <button onClick={(e) => console.log(e.target.innerHTML)}>Hello</button>;
}

// ex 7.2

{
  <ol>
    {arrayList.map((item) => (
      <li onClick={(e) => console.log(item)}>{item.name}</li>
    ))}
  </ol>;
}

// promises

const fakeFetch = (msg, shoulReject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shoulReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 1000);
  });
};

// ex 11

fakeFetch("hello").then((data) => console.log(data));

// // ex 12

fakeFetch("hello", true).catch((error) => console.error(error));

// // ex13

const getServerResponseLength = (msg) =>
  fakeFetch(msg).then((data) => data.length);
getServerResponseLength("hello Anurag").then((data) => console.log(data));

// ex14

const syncCallToServer = (msg1, msg2) =>
  fakeFetch(msg1)
    .then((data) => console.log(data))
    .then(() => fakeFetch(msg2))
    .then((data) => console.log(data));
syncCallToServer("hello", "anurag");

// ex15

const demoAsync = async () => {
  const data = await fakeFetch("anurag");
  console.log(data);
};
demoAsync();

// ex16

const asyncWaterfall = async (msg1, msg2) => {
  const dataOne = await fakeFetch(msg1);
  console.log(dataOne);
  const dataTwo = await fakeFetch(msg2);
  console.log(dataTwo);
};
asyncWaterfall("hello", "vello");
