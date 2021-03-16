# rate-dogs

This is an example project to illustrate the usage of Gatsby

## What is Gatsby?

Gatsby is a framework built upon React which is designed to allow you to quickly and
efficiently prototype and create fast and very efficient _websites_*. It does a lot of
the heavy lifting for you when it comes to composing the site structure and offers a wide
variety of features that can further be extended via an active plugin community.

Gatsby's primary feature is pre-generation of static content which it compiles during its
build process through your templates and by querying the relevant static content from
your datasource(s). Client code is then able to manipulate the DOM to inject this content
as needed while the user navigates the site. This both makes it incredibly fast as well as
efficient, because it also identifies which HTML and CSS is absolutely necessary to
render and bundle at one time.

\* Note that Gatsby is designed primarily for presenting *websites* and not *webapps*. Most of
its advantages are primarily for the presentation of content, not user interactions.
However, you can use full React functionality within Gatsby sites through re-hydration.

> This means that the browser can “pick up” where the server left off with the contents
> created by Gatsby in the /public folder and render the site in the browser like any
> other React app would. Since the data and structure of the pages is already written out,
> it’s not necessary for Gatsby to go to another server asking for HTML or other data.
