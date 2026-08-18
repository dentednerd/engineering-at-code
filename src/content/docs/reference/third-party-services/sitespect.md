---
title: SiteSpect
description: A reference page about SiteSpect, the optimisation platform.
---

[SiteSpect](https://www.sitespect.com) is an A/B testing, personalization, and optimisation platform for websites, mobile experiences, and other digital properties. It uses a patented proxy-based transformation engine that sits in the flow of traffic between users and a business's web server, rather than relying on JavaScript tags, letting it test and personalize both the front-end look-and-feel and back-end/server-side functionality of a site.

> In 2025, SiteSpect was acquired by Monetate, combining the two companies' testing and personalization offerings.

## What it does

- **A/B and multivariate testing**: compares two or more versions of a page or experience to determine which changes improve conversion.
- **Personalization**: tailors experiences based on factors like past behavior, in-session activity, location, device, referral URL, or omnichannel/call-center data.
- **Client-side testing**: uses "Find and Replace" to transform HTML/content in the traffic stream instead of injecting JavaScript tags, avoiding flicker and added latency.
- **Server-side testing**: tests and personalizes back-end functionality via Origin Experiments, without requiring SDK/API integration in application code.
- **Single-Page Application (SPA) support**: framework-agnostic optimisation for React, Angular, Vue, and similar SPA frameworks, including full Visual Editor support.
- **Visual Editor**: a no-code interface that lets marketers set up and run tests and campaigns without developer involvement.
- **Analytics and Real User Monitoring**: reporting and alerts on campaign performance (winners, losers, poor-performing variations, traffic issues, conflicts).
- **Recommendations and rollouts**: additional capabilities for product recommendations and controlled feature/campaign rollouts.

## How it works

SiteSpect sits in the flow of traffic: when a user's browser requests a page, the request and response between the browser and the web server are routed through SiteSpect. Because it sees every request and response directly (rather than relying on a JavaScript tag firing in the browser), it can transform, replace, or inject HTML, JavaScript, or CSS server-side before content reaches the user. SiteSpect says this avoids flicker and isn't affected by browser tracking protections like Safari ITP or Firefox ETP, since it doesn't need to set cookies in the browser.

## Key concepts

- **Proxy / transformation engine architecture**: SiteSpect's core technical approach: sitting in the traffic path between user and server so it can modify requests/responses directly, instead of using client-side JavaScript tags.
- **Client-side testing**: changes made to what's delivered to the browser (look-and-feel, content) via Find and Replace, without JavaScript tags.
- **Server-side testing (Origin Experiments)**: changes made to back-end functionality/logic, targeted using signals like geolocation, device, or referring URL without requiring code changes in the application itself.
- **Campaign**: a defined test or personalization effort, with configurable variations, targeting rules, and roles (administrators, builders, read-only).
- **Visual Editor**: the no-code tool for building and managing campaigns.
- **Auto optimisation**: a feature that automatically analyzes running campaigns and promotes winning variations.
- **Omnichannel targeting**: personalization that accounts for a user's behavior and identity across channels (web, mobile, call center, etc.), not just a single session.

## Further reading

- [SiteSpect documentation](https://doc.sitespect.com/knowledge)
