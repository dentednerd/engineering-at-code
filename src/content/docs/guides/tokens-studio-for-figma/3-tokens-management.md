---
title: Tokens management
description: Our approach to organising design tokens at Code.
---

This guide explains tokens management. It is intended for **designers**.

## Global tokens

- Unique per brand; a brand's palette.
- Folder structure must be consistent.

## Alias tokens

- For general use throughout a project.
- Must refer to global tokens.
- Must match and be active across all themes.
- Folder structure must be consistent.
- Create manually in Tokens Studio across all themes.

## Component tokens

- For use by a single component or context _only_.
- Must refer to alias tokens.
- Must match and be active across all themes - **even if a brand doesn't use a particular component, it must still be able to refer to that component's tokens**.
- Folder structure must be consistent.
- Create manually in Tokens Studio across all themes.
