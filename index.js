


const htag = document.getElementById("htag")
const c = 299792.458;

function calc_origin_freq() {
    const v = parseFloat(document.getElementById('velocity').value);
    const f_obs = parseFloat(document.getElementById('obs_frequency').value);

    if (v >= c) return alert("속도는 광속보다 작아야 합니다.");

    const f_s = f_obs / Math.sqrt((c + v) / (c - v));

    console.log("Original Frequency:", f_s.toFixed(6), "THz");
    htag.innerHTML = f_s.toFixed(6) + "THz"
    return f_s;
}

function calc_speed() {
    const f_s = parseFloat(document.getElementById('s_frequency').value);
    const f_obs = parseFloat(document.getElementById('obs_frequency1').value);

    const fs2 = Math.pow(f_s, 2);
    const fobs2 = Math.pow(f_obs, 2);

    const v = c * (fobs2 - fs2) / (fobs2 + fs2);

    console.log("Velocity:", v, "km/s");
    htag.innerHTML = v.toFixed(6) + "km/s"

    return v;
}


function rel_dopp_blue(f, v) {
    const fs = Number(f);
    const vel = Number(v);
    htag.innerHTML = fs * Math.sqrt((c + vel) / (c - vel)).toFixed(6) + "THz"
    return fs * Math.sqrt((c + vel) / (c - vel));
}