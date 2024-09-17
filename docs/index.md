---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "FediMod FIRES"
  text: "Fediverse Intelligence Replication Endpoint Server"
  tagline: A protocol and reference server implementation for storing and distributing moderation advisories and recommendations over time for the Fediverse.
  actions:
    - theme: brand
      text: Learn the Concepts
      link: /concepts/
    - theme: alt
      text: Getting Started
      link: /manuals/reference-server/

features:
  - title: Only provides advisories and recommendations
    details: |
      Rather than prescribing that a given action must be taken, FIRES publishers only suggest an action to take. Consumers of data should always provide control over what is applied to instances.
      <br/><br/>
      Moderators should always make the final decision that is right for their community.
  - title: Not designed for the creation of denylists
    details: |
      Whilst a server can publish just information about domain moderation, we shouldn't limited to just domains. Often there's more nuanced data that can be shared with moderation teams.
      <br/><br/>
      Domain moderation is a heavy hammer, when sometimes you need a chisel.
  - title: Embraces linked data and multiple data sources
    details: |
      Borrowing ideas from linked data concepts, moderation advisories and recommendations are well structured and contain enough information for Moderators to make an informed decision.
      <br/><br/>
      This also allows for extensibility to support new data types in the future.
  - title: Allows resumable retrieval of data
    details: |
      Instead of being push-based which requires requires the server to maintain a list of consumers interested in updates, or real-time requiring consumers to always be online.
      <br/><br/>
      FIRES is designed to allow consumers to periodically refresh their copy of the data using the last change ID known.
---
