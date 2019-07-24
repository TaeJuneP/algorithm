function solution(bridge_length, weight, truck_weights) {
  var time = 0;
  let onBridge = [];
  while (truck_weights.length > 0 || onBridge.length > 0) {
    var sumOnBridge = 0;
    for (let i in onBridge) {
      onBridge[i].remainTime--;
    }

    if (onBridge.length > 0 && onBridge[0].remainTime == 0) {
      onBridge.shift();
    }
    for (let i in onBridge) {
      sumOnBridge += onBridge[i].weight;
    }

    if (sumOnBridge + truck_weights[0] <= weight) {
      onBridge.push({
        weight: truck_weights.shift(),
        remainTime: bridge_length
      });
    }
    time++;
  }
  return time;
}
