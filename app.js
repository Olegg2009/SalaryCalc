function salary() {
    let SPH = document.getElementById('SPH').value;
    let HPD = document.getElementById('HPD').value;
    let DPW = document.getElementById('DPW').value;
    if(HPD > 24){
        document.getElementById('HPD').value = 24;
        HPD = 24
    }
    else if(HPD < 1){
        document.getElementById('HPD').value = 1;
        HPD = 1;
    }
    if(DPW > 7){
        document.getElementById('DPW').value = 7;
        DPW = 7;
    }
    else if(DPW < 1){
        document.getElementById('DPW').value = 1;
        DPW = 1;
    }
    document.getElementById('zp').innerText = SPH * DPW * HPD * 4;
}
    