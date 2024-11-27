# Labels

In order to better support interoperability between different FediMod FIRES servers, running as [Data Providers](./terms/data-provider.md), and [Data Consumers](./terms/data-consumer.md), we have introduced the concept of “Labels”.

Labels in FediMod FIRES are URIs that can be both:
- followed by a human to view a human readable page explaining the Label
- dereferenced by software to discover machine readable information about the Label

Data Providers can reuse Labels from different [Label Providers](./terms/label-provider.md) as well as being a Label Provider themselves if they need additional labels which haven't been yet defined, or whose definition they need to change. Label Providers can extend other Label Providers by annotating their labels as being the "same as" or "similar to" another Label.

As a Data Provider annotating the recommendations and advisories with Labels enables both machines and humans to better understand the information being presented. For instance, a Data Consumer may choose to automatically apply recommendations with one label, but require human review for another label.

> [!WARNING]
> The remainder of this page is subject to change based on reference implementation.

## Work In Progress - What does a Label look like?

Initially we expected the JSON representation of Labels to be something like the following:

```json
{
  "provider": "Example Label Provider",
  "labels": [
  	{
  	  "id": "https://labels.provider.example/#csam",
      "title": "CSAM",
      "description": "Depictions or descriptions of Child Sexual Abuse Material"
    },
	  // ...
  ]
}
```

However, this format has some limitations and is fairly unique to the project. We are currently considering something more inline with the ActivityStreams 2 Vocabulary, creating a new Object Type of `Label`. This would still allow dereferencing, but also allow better integration with ActivityPub in the future, where the Label provider is an Actor that issues `Update(Label)` activities and `Add/Remove` operations on the Collection of labels.

In both designs, servers need not request the entire set of labels or even expose them all in a single request, and URIs can be both for a single Label and for a collection of Labels where a single label is identified by a hash fragment identifier on the Collection URI, as is below.

```json
{
  "@context": [
    "https://www.w3.org/ns/activitystreams",
    {
      // extends as:Object, URI subject to change / definition being managed via a FEP defining a Label.
      "Label": "https://fires.fedimod.org/ns#Label"
    }
  ],
  "summary": "Example Labels",
  "type": "OrderedCollection",
  "id": "https://labels.example.org/",
  "totalItems": 2,
  "orderedItems": [
    {
      "id": "https://labels.example.org/#violent-threat",
      "type": "Label",
      "name": "Violent Threat",
      "content": "description for a violent threat"
      // ...
    },
    // ...
  ]
}
```
