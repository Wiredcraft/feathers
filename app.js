---
---
{% include lib/js/jquery-1.8.2.min.js %}
{% include lib/js/underscore-min.js %}
{% include lib/js/backbone-min.js %}

{% include init.js %}

{% include model/gist.js %}
{% include collection/gists.js %}
{% include model/publicGist.js %}
{% include collection/publicGists.js %}

{% include view/app.js %}
{% include view/header.js %}
{% include view/footer.js %}
{% include view/collection.js %}
{% include view/model.js %}

{% include view/gistView.js %}
{% include view/gistlistView.js %}
{% include view/publicView.js %}
{% include view/publiclistView.js %}

{% include router.js %}

