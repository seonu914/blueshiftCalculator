const c = 299792.458;

function calc_origin_freq(vel, obs_f) {

    vel = c * vel/100

    return obs_f/(Math.sqrt( (c+vel)/(c-vel) ))
}

function calc_speed(f, obs_f) {
    let K = Math.pow(obs_f/f, 2)
    console.log(K)
    return c*(K-1)/(K+1)
}


function calc_shifted_freq(f, v) {
    f *= 1e12
    v = c * v/100
    const result = Math.sqrt((c+v)/(c-v)) * f*1e-12
    console.log(result)
    return result
}