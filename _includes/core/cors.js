/* special for cross domain*/ 
$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    options.xhrFields = {
      withCredentials: true
    };
});