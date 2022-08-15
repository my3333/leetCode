/**
 * 739
 */


// 时间复杂度为 O（n^2）
 function dailyTemperatures(temperatures){
    // 原地修改
    for (let i = 0; i < temperatures.length; i++) {
        // 最后一个一定为0
        if (i === temperatures.length - 1) {
            temperatures[i] = 0;
            break;
        }
        const temp = temperatures[i];
        let step = 1;
        while(i+step <= temperatures.length) {
            if (temperatures[i+step] <= temp) {
                if (i+step === temperatures.length - 1) {
                    temperatures[i] = 0;
                    break;
                }
                step++;
            } else {
                temperatures[i] = step;
                break;
            }
        }
    }
    return temperatures;
};


const temperatures = [73,74,75,71,69,72,76,73];
let res = dailyTemperatures(temperatures);
console.log(res);