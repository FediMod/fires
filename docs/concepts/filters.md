# Filters

When making a [recommendation](./changes/recommendations.md) or [advisory](./changes/advisories.md), besides just specifying “you can federate with this” or “you probably shouldn’t federate with this” it’s also important to be able to say “federate with this, but with these limitations”.

By decomposing actions into filters, we move away from the false binary choice between “block”, “limit” or “silence”, or doing nothing. Filters provide a much more flexible system for moderation rather than more coarse grained actions.

## Predefined Filters

> [!WARNING]
> This section of the documentation may change upon reference implementation.

Below is a table of predefined filters that FediMod FIRES will publish under the FediMod project, that aims to cover many existing filters for fediverse software today, but is not intended to be completely comprehensive.

The identifiers for these filters would eventually be part of the filter's URI, since in FediMod FIRES, filters are referenced by their URI, allowing different software to define different filters. These URIs do not have to be able to be dereferenced, however it can help for providing relationships between different vocabularies of filters in different software.

***Note:** The filters listed here may not have implementations in Fediverse software, some are listed here which may need future implementation in software, or may only be relevant to future features of software. A good example of this is how we don't have a "silence" filter, instead it's decomposed into discrete filters.*

| Identifier | Outcome |
| :---- | :---- |
| auto-unlisted | The identified entity should be suppressed from the public timelines.  Part of Mastodon’s “silence” severity, which does more such as prevent-trending and prevent-recommendations |
| auto-cw | Automatically mark content with a content-warning. If the software supports adding a reason as to why the content should carry a content-warning,  then the warning should be derived from the comment or labels for the entity. The language used should also explicitly indicate this content warning is a “may” and has been applied by the administrators or moderators. |
| auto-sensitive | Automatically mark media attachments as sensitive. If the software supports adding a reason as to why the media is sensitive, then the reason should be derived from the comment or labels for the entity. The language used should also explicitly indicate this content warning is a “may” and has been applied by the administrators or moderators. |
| age-restrict | Any content originating from the entity should be age-restricted, software may choose to implement this as a simple yes/no dialog, however, it may be necessary due to legal reasons in certain jurisdictions to require identity based age verification |
| auto-label | Like auto-cw, however, the Labels should be used to mark the content or accounts as being the specified labels. This is similar to Twitter’s former “community labels” feature. Use cases include applying this to  biassed state-sponsored media organisations, misinformation groups, etc. This is intended for being able to display the warning in a way that clearly differentiates it from a warning that a user may place themselves on content. |
| prevent-trending | Any content originating from this entity should be prevented from being surfaced in the Trending section of software, if implemented (for example, Mastodon’s “Explore” section) |
| prevent-recommendations | Any content originating from this entity should be prevented from being recommended to other users via algorithmic timelines, if supported in Fediverse Software. **Note:** this moderation filter could prove harmful to marginalised groups, so should be used with great care, especially if your fediverse software primarily doesn’t feature chronological feeds from people or groups you follow. |
| require-follow-requests | Any Follow activities should require manually approval, instead of automatic approval |
| reject-non-public | Any content who’s audience (to, cc, audience) that is not \`as:Public\` should be rejected, ideally sending a Reject activity back to the originating server. |
| ignore-non-public | Any content who’s audience (to, cc, audience) that is not \`as:Public\` should be ignored, not sending any activity back to the originating server. |
| reject-replies | Any content in reply to local content should be rejected, ideally sending a Reject activity back to the originating server. |
| ignore-replies | Any content in reply to local content should be ignored, not sending any activity back to the originating server. |
| reject-media | Any media originating from this entity should be rejected or removed from content. |
| reject-profile-avatars | Any avatars originating from this entity should be rejected, removed or blurred. |
| reject-profile-media | Any profile-specific media (avatars, headers, etc) originating from the entity should be rejected, removed or blurred  |
| reject-reports | Any moderation reports or Flag Activities originating from this entity should be rejected, ideally with a Reject activity being sent back to the originating server. |
| ignore-reports | Any moderation reports or Flag Activities originating from this entity should be ignored, without any activity being sent back to the originating server. |
| reject-moderation-notes | Any moderation notes that are federated originating from this entity should be rejected and ignored. |
| roadblock-disable-links | Any links originating from this entity should be removed. Software should potentially edit the content to display a “Link removed by moderators” message in the content. Or use a roadblock such that when the link is clicked the user is informed that the link has been disabled by moderators. |
| roadblock-warn-links | Any links originating from this entity should be intercepted and display a roadblock explaining that the link may contain harmful/undesired content and allow the user to decide if they wish to continue. |
| reject-signups | For handling blocking signups from IP Address and Email Domains or Addresses.

***Question:** Are there any additional “filters” that could be applied to a Domain or Actor?*

***Editor’s Note:** Bluesky  / ATProto has [these definitions for filters](https://github.com/bluesky-social/proposals/tree/main/0002-labeling-and-moderation-controls#the-possible-actions-on-a-label), some of which we may wish to borrow:*

**Editor’s Note:** There are some interesting thoughts in [https://infosec.town/notes/9pssii5retztg06m](https://infosec.town/notes/9pssii5retztg06m) by Blake Leonard.
