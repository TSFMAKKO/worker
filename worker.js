function fibonacci(n) {
  // () ? yes:no
  // 遞迴調用  函數調用自己
  return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

// var onmessage = function(event) {
//   //
//   let number = event.data;
//   console.log("接收到主線發送的數據: "+number);

//   // 計算
//   let result = fibonacci(number);
//   // 傳回去
//   postMessage(result);
//   console.log("將數據返回主線呈: "+result);
// };

self.addEventListener(
  "message",
  function(event) {
    let number = event.data;
    console.log("接收到主線發送的數據: " + number);

    // 計算
    let result = fibonacci(number);
    console.log(result);

    // 傳回去
    self.postMessage(result);
    console.log("將數據返回主線呈: " + result);
  },
  false
);
