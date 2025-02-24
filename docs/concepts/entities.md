# Entities

FediMod FIRES is designed to support the exchange of much more than just defederation from specific domains, and as such supports multiple different “entities”.

For the initial reference implementation of FIRES, we intend to support the following entity kinds:

- Domains
- Actors
- Email Domains

In the future we may also add support for other entity types including Hashtags, IP Address Ranges, Links, Images, and more.

The `entity_kind` property value is always the singular form of the name of the entity type in upper camel-case, so `Domains` becomes `Domain` and `Email Domains` becomes `EmailDomain`.
