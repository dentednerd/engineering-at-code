---
title: Turnstile
description: A reference page about Turnstile, the verification service.
---

[Turnstile](https://www.cloudflare.com/products/turnstile/) is Cloudflare's CAPTCHA-alternative for verifying that website visitors are human. It can be embedded as a widget on any website without needing to route traffic through Cloudflare's network, and in most cases verifies visitors without ever showing them a puzzle or challenge.

## What it does

- Runs small, non-interactive JavaScript checks in the visitor's browser — proof-of-work, proof-of-space, web API probing, and other browser/behavior signals — to distinguish humans from bots.
- Adapts the challenge to each visitor: most people pass silently, while riskier traffic may be shown an interactive checkbox.
- Runs client-side embedded on the page itself, rather than pausing the request the way a full Cloudflare Challenge page does — the visitor is already on the destination page when they encounter it.
- Processes only the data strictly necessary to run the security check; it does not access, store, or transmit form entries or other page content the visitor enters.
- Does not harvest visitor data for ad retargeting.
- Is WCAG 2.2 AA compliant for accessibility.
- Can be used without being a Cloudflare customer or routing traffic through Cloudflare's CDN.

## Getting started

1. Create a Cloudflare account and open the Turnstile section of the dashboard.
2. Add a site: give it a name, enter the domain(s) it will run on, and choose a widget type.
3. Embed the Turnstile widget on your page using the provided site key and script snippet.
4. On your backend, verify each submission's Turnstile token against Cloudflare's siteverify endpoint using your secret key before trusting the form/request.

## Key concepts

- **Widget**: the embeddable Turnstile component placed on a page (e.g. a login or contact form) that runs the challenge.
- **Widget types**: **Managed** (Cloudflare decides whether to show an interactive checkbox based on risk), **Non-interactive** (visitors never need to interact, but see a loading indicator), and **Invisible** (the widget is fully hidden).
- **Site key / secret key**: the public key embedded in the widget on the frontend, and the private key used server-side to verify a visitor's challenge response.
- **Challenge Platform**: the underlying Cloudflare technology that also powers Turnstile, issuing and evaluating the various client-side challenges.
- **Siteverify**: the server-side API endpoint used to validate a Turnstile response token before accepting a form submission or request as legitimate.
- **Pre-clearance**: a mechanism allowing Turnstile to issue a clearance cookie so single-page applications (SPAs) can integrate Cloudflare challenges without re-challenging on every request.
- **Turnstile Analytics**: dashboard metrics on challenges issued and challenge solve rate, for monitoring how Turnstile is performing on a site.

## How we use Turnstile

TODO

## Further reading

- [Cloudflare Turnstile Documentation](https://developers.cloudflare.com/turnstile/)
