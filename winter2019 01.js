const test = () => {
    let W = 8;
    let H = 12;
    let count2 = 0;
    let count3 = 0;
    let check1 = false;
    let check2 = false;
    let resultW;
    let resultH;
    let w = W;
    let h = H;
    while (true) {
        let k = w / 2;
        let o = h / 2;
        if (Number.isInteger(k) && Number.isInteger(o)) {
            w = k;
            h = o
            count2++;
        } else {
            check1 = true
        }
        k = w / 3;
        o = h / 3;
        if (Number.isInteger(k) && Number.isInteger(o)) {
            w = k;
            h = o
            count3++;
        }
        else {
            check2 = true
        }
        if (check1 === true && check2 == true) {
            console.log(w, h)
            return true;
        }
    }
}
test()