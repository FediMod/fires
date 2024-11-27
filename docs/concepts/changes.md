# Managing Changes

Within FediMod FIRES, a core principle is that we only ever append changes to a dataset. We never modify existing data or delete data. This is inspired by the concepts of [Change Data Capture](https://en.wikipedia.org/wiki/Change_data_capture) and [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html), which are important for building distributed systems.

By only ever appending data, we simplify the replication of the dataset between the FIRES server and [consumers](./terms/data-consumer.md), by allowing the client to periodically ask the FIRES server what has changed since the last time it requested data. This enables either a FIRES server or the consuming application to be offline for a period of time and then gracefully recover to the current state of the dataset.

Every change record within a FIRES dataset has a `change_id` property which is its unique identifier and is used when performing synchronisation with the FIRES server. This property is a [UUID v7](https://uuid7.com/), which can be stored in a standard PostgreSQL `uuid` column type, and is both time-sortable and globally unique, allowing efficient database indexing and querying, without conflicts when inserting records in quick succession.

There are four types of change records that a FIRES dataset can contain, these are:
- [Advisory](./changes/advisories.md)
- [Recommendation](./changes/recommendations.md)
- [Retraction](./changes/retractions.md)
- [Tombstone](./changes/tombstones.md)
