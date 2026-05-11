const c = 299792.458;

function calc_origin_freq(vel, obs_f) {

    if (vel > 100 || vel < -100) {
        alert("속도는 -100 보다 크고 100 보다 작아야 합니다.")
        return NaN
    }

    vel = c * vel/100

    return obs_f/(Math.sqrt( (c+vel)/(c-vel) ))
}

function calc_speed(f, obs_f) {

    let K = Math.pow(obs_f / f, 2);
    return ((K - 1) / (K + 1)) * -100;

}

function calc_shifted_freq(f, vel) {

    if (vel > 100 || vel < -100) {
        alert("속도는 -100 보다 크고 100 보다 작아야 합니다.")
        return NaN
    }

    vel = c * vel/100

    return Math.sqrt((c + vel) / (c - vel)) * f

}

function calc_z(f, obs_f) {
    return (f-obs_f)/obs_f
}