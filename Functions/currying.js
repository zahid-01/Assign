const curry = () => {
  return function fun1(num) {
    return function fun2(num2) {
      return num + num2;
    };
  };
};

const f1 = curry();
const f2 = f1(2);
console.log(f2(3));
