export const bubbleSortAlgo = (array) => {
    // let bubbleSortEventArray = []; 
    let length = array.length;
    for(let i = 0; i < length - 1; i++) {
        let swaped = false;
        for (let j = 0; j < length - i - 1;j++) {
                if (array[j] > array[j+1]) {
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                    
                    swaped = true;
                    // bubbleSortEventArray.push({ i: i, j:j, k: j+1, iVal: array[i], jVal: array[j], kVal: array[j+1] })
                }
        }            
        if (!swaped) {
            break 
        };
    }
    return array;
}