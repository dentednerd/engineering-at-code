---
title: Trustpilot
description: A reference page about Trustpilot, the review platform.
---

[Trustpilot](https://www.trustpilot.com) is an open, independent online review platform. Consumers can freely read and write reviews of businesses, while businesses can claim their profile, respond to reviews, and use paid tools to collect more reviews and display them across their marketing. Founded in Copenhagen in 2007, it hosts hundreds of millions of reviews covering hundreds of thousands of businesses worldwide.

## What it does

- Hosts public, consumer-written reviews on the independent trustpilot.com domain — a "third-party" trust signal separate from reviews on a business's own site.
- Calculates a **TrustScore** for each business, shown on its public profile and usable in things like Google Seller Ratings and search star ratings.
- Runs automated fraud detection on submitted reviews before they go live, and distinguishes **verified** reviews (linked to a confirmed transaction) from unverified ones — both count toward the TrustScore.
- Lets businesses send **review invitations** to customers (e.g. via a BCC email address added to order confirmations, or integrations with ecommerce/CRM/email platforms) to prompt more reviews.
- Provides embeddable **widgets** to display reviews and TrustScore on a business's own website and in marketing campaigns.
- Offers **Review Insights**, AI-powered analysis of review content for sentiment and trend monitoring.
- Exposes a REST API (public and private endpoints) for retrieving business unit data, managing invitations, and integrating reviews into other tools.

## Getting started

1. Create a free business profile at [business.trustpilot.com](https://business.trustpilot.com).
2. Look up or note your **Business Unit ID**; most Trustpilot API calls require it.
3. Choose an authentication method: an API key alone for public endpoints, or OAuth 2.0 (access + refresh tokens) for private endpoints.
4. Use the API or an integration to send review invitations and pull review/profile data into your own systems.

## Key concepts

- **TrustScore**: a weighted, recency-aware score (not a flat average) calculated from a business's reviews, factoring in recency, volume, star distribution, and review frequency.
- **Business Unit**: Trustpilot's representation of a business (or a specific domain/brand under a company), identified by a unique Business Unit ID that most API calls require.
- **Verified vs. unverified reviews**: verified reviews are tied to a confirmed transaction (e.g. via an invitation); unverified reviews are submitted directly by a consumer without that link. Both count toward the TrustScore.
- **Review invitations**: requests sent to actual customers (by email or integration) asking them to leave a review, used to increase review volume and the share of verified reviews.
- **Public vs. private APIs**: public API endpoints require only an API key (Client ID); private API endpoints require full OAuth 2.0 authentication.
- **Widgets**: embeddable components businesses use to display live reviews, star ratings, or TrustScore badges on their own websites and in email marketing.

## Further reading

- [Developer documentation](https://developers.trustpilot.com)
