// Initialize
// ----------
window.app = {
    models: _(models).reduce(function (memo, fn, name){ 
        if (name.match('s')) {
            memo[name] = new fn();
        } else {
            //Ending by plural,need special handle
            memo[name] = function (arguments) {
                return new fn(arguments);
            };
        }
        return memo;
    }, {}),
    views: {},
    routers: {},
    templates: _($('script[name]')).reduce(function(memo, el) {
        memo[el.getAttribute('name')] = _(el.innerHTML).template();
        return memo;
    }, {}),
    state: {}
};
window.args = _(window.app).toArray();
