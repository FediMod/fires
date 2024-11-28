# Managing Changes

Moderation decisions change over time, they are not a static set of values. Currently moderation decisions in the Fediverse are shared through static snapshots as CSV files. This means that in order to know what changed you have to be able to calculate the difference between the CSV file at time A and time B to know what was changed.

With FediMod FIRES, one of the core principles is that a dataset is append-only. We never modify or delete existing data, we simply append a change record to the dataset. This is inspired by [Change Data Capture](https://en.wikipedia.org/wiki/Change_data_capture) and how databases perform replication of data between servers.

Whenever a moderation decision changes, we append a new change record to the database, with each change record having a `change_id` property which is time-sortable unique identifier.

By only ever appending data, when [consumers](./terms/data-consumer.md) want to synchronise their local state with the current state of the dataset on the FIRES server, the consumer sends a request for change records where the `change_id` is greater than the last known `change_id` that the consumer has. This allows for really simple replication of data between the FIRES server hosting the dataset and the consumer.

The `change_id` is a [UUID v7](https://uuid7.com/) identifier, which can be stored in a standard PostgreSQL `uuid` column. They can be efficiently indexed and queried within a database, without the chance of conflicts when inserting new records in quick succession.

## Change Records

FediMod FIRES is designed to go beyond just blocking domains, and is designed to support sharing moderation decisions about many kinds of entities within the Fediverse.

Every change record has a specific `type`, and refers to a specific entity through the `entity_key` and `entity_kind` properties. For instance, for a `domain` entity, the `entity_key` would be the domain name, and the `entity_kind` would be `domain`.

The moderation decisions that can be shared through a FIRES dataset are one of four different types of change records:

- [Advisory](./changes/advisories.md) — early warnings about an entity, pending further investigation.
- [Recommendation](./changes/recommendations.md) – moderation recommendations about an entity.
- [Retraction](./changes/retractions.md) — reverses a previous moderation recommendation or advisory.
- [Tombstone](./changes/tombstones.md) — signals the permanent removal an entity from the dataset.

For the initial reference implementation of FIRES, we intend to support the following entity kinds:
- Domains
- Actors
- Hashtags

In the future we may also add support for other entity types including Email Domains, IP Address Ranges, Links, Images, and more.
