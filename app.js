---
---
{% include lib/js/jquery-1.8.2.min.js %}
{% include lib/js/underscore-min.js %}
{% include lib/js/backbone-min.js %}

{% include init.js %}

{% include model/gist.js %}
{% include collection/gists.js %}

{% include view/app.js %}
{% include view/header.js %}
{% include view/footer.js %}
{% include view/collection.js %}
{% include view/model.js %}

{% include view/gists/gist.js %}
{% include view/gists/gists.js %}

{% include router.js %}

