
function log(stack, level, pkg, message) {
    console.log(`[${stack}] [${level}] [${pkg}] ${message}`);
}
module.exports = log;
