# FIRES

[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0) 

**FediMod FIRES** is a protocol and reference server implementation for storing and distributing moderation data over time for the Fediverse. It is intended to be used by teams to provide moderation recommendations and advisories, based on their research, to moderators and administrators of Fediverse servers.

**FIRES** stands for **F**ediverse **I**ntelligence **R**eplication **E**ndpoint **S**erver.

**FediMod** is project to provide a home for various Fediverse moderation tools and projects.


## Features

- **Only provides moderation advisories and recommendations**, rather than prescribing that a given action must be taken.
- **Not designed for the creation of denylists**, moderators should always make the final decision that is right for their community.
- **Embraces linked data and multiple data sources**, we borrow ideas from linked data, to ensure that all moderation advisories and recommendations are well structured and contain enough information for Moderators to make an informed decision.
- **Allows resumable retrieval of data**, instead of being push-based which requires maintaining a network connection to the FIRES server, FIRES is designed to allow clients to periodically refresh their copy of the data.


## Documentation

The documentation to FIRES is split into a few sections:

- [Overview & Background](#)
- [API Specification](#)
- [Reference Server](#)

## Acknowledgements

[NLNet placeholder]

[Nivenly website]
