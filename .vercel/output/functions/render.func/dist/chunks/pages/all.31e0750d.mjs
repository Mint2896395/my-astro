import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.1350ac81.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                            */
const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/Users/macbook/astro-site/src/layouts/Layout.astro");

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="link-card astro-DOHJNAO5">
	<a${addAttribute(href, "href")} class="astro-DOHJNAO5">
		<h2 class="astro-DOHJNAO5">
			${title}
			<span class="astro-DOHJNAO5">&rarr;</span>
		</h2>
		<p class="astro-DOHJNAO5">
			${body}
		</p>
	</a>
</li>`;
}, "/Users/macbook/astro-site/src/components/Card.astro");

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
		<h1 class="astro-J7PV25F6">Welcome to <span class="text-gradient astro-J7PV25F6">My New Site</span></h1>
		<p class="instructions astro-J7PV25F6">
			To get started, open the directory <code class="astro-J7PV25F6">src/pages</code> in your project.<br class="astro-J7PV25F6">
			<strong class="astro-J7PV25F6">Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
		</p>
		<ul role="list" class="link-card-grid astro-J7PV25F6">
			${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "class": "astro-J7PV25F6" })}
		</ul>
		<a href="/signin" class="astro-J7PV25F6">Sign in</a>
	</main>` })}`;
}, "/Users/macbook/astro-site/src/pages/index.astro");

const $$file$1 = "/Users/macbook/astro-site/src/pages/index.astro";
const $$url$1 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  return renderTemplate`${maybeRenderHead($$result)}<body class="" data-controller="test-readiness" data-stimulus-ready="true" data-javascript-files-loaded="true">
    <span class="u-for-screen-reader" aria-live="assertive">Sign in to HEY</span>

      <nav class="navbar">
        <div class="navbar__content">
          <div class="navbar__logo navbar__logo--plain u-show@medium">HEY</div>
        </div>
      </nav>

    <div id="flash"></div>
    <div id="flash_message_for_screen_reader"></div>

    <main id="main-content" class="page page--center page--medium@medium" tabindex="-1" data-controller="bridge--offline bridge--page bridge--page-zoom bridge--cable page ">
      <div class="page__content">
        
        <div class="align--center">
            <header class="align--center push_double--bottom">
                <h1 class="hdg hdg--xx-large flush--top push--bottom">
                Welcome back.<br>
                Let's sign in.
                </h1>
            </header>

            <form id="session_form" data-controller="form" data-action="turbo:submit-start->form#submitStart" action="/sign_in" accept-charset="UTF-8" data-remote="true" method="post">
                <label class="u-display-b">
                <h2 class="hdg hdg--large u-display-b flush--top push_quarter--bottom txt--normal">
                    Enter your email address
                </h2>

                <input class="input input--full-width input--underlined align--center txt--x-large txt--bold" required="required" autocomplete="email" autofocus="autofocus" autocorrect="off" autocapitalize="off" size="30" type="email" name="email_address" id="email_address">
                </label>

                <label class="u-display-b">
                <h2 class="hdg hdg--large u-display-b push_double--top push_quarter--bottom txt--normal">
                    And your password
                </h2>

                <input class="input input--full-width input--underlined align--center txt--x-large txt--bold" required="required" autocomplete="current-password" autocorrect="off" autocapitalize="off" size="30" type="password" name="password" id="password">
                </label>

                <div class="u-relative push--top">
                    <input type="submit" name="commit" value="Sign in" class="btn btn--focusable btn--tertiary align--center txt--large btn-with-spinner" data-form-target="submit" data-disable-with="Sign in">
                    <div class="spinner">
                        <div class="spinner__dot spinner__dot--1"></div>
                        <div class="spinner__dot spinner__dot--2"></div>
                        <div class="spinner__dot spinner__dot--3"></div>
                    </div>
                </div>
            </form>

            <p class="txt--normal txt--subtle">
                <strong><a class="decorated" href="/identity/password_reset/new">Forgot your password?</a></strong><br>
                We'll help you reset it so you can get back in.
            </p>
        </div>

      </div>
    </main>
</body>`;
}, "/Users/macbook/astro-site/src/pages/signin.astro");

const $$file = "/Users/macbook/astro-site/src/pages/signin.astro";
const $$url = "/signin";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Signin,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
