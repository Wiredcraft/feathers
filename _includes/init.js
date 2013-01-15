window.app = {
    collections: {},
    models: {},
    views: {},
    routers: {},
    states: {}
};

/* special for cross domain*/ 
$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    options.xhrFields = {
      withCredentials: true
    };
});