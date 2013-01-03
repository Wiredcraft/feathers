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
{% include model/userGist.js %}
{% include collection/userGists.js %}

{% include view/app.js %}
{% include view/header.js %}
{% include view/footer.js %}
{% include view/collection.js %}
{% include view/model.js %}

{% include view/gists/gistView.js %}
{% include view/gists/gistlistView.js %}
{% include view/publicgists/publicView.js %}
{% include view/publicgists/publiclistView.js %}
{% include view/usergists/userView.js %}
{% include view/usergists/userlistView.js %}

{% include router.js %}

