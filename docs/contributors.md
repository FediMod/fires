---
outline: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/thisismissem.png',
    name: 'Emelia Smith',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/thisismissem' },
      { icon: 'mastodon', link: 'https://hachyderm.io/@thisismissem' },
      {
        link: 'https://support.thisismissem.social',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="sponsor-icon" fill="#e8eaed"><path d="M448.67-195.33h60v-51.34q57.33-7.66 92-38 34.66-30.33 34.66-84 0-48-27.33-81t-97.33-61Q452-533.33 427-551q-25-17.67-25-47.67Q402-628 423.17-645q21.16-17 58.83-17 30.67 0 51.33 14.5Q554-633 566.67-606.67l53.33-24q-15-35-43.5-57t-65.83-25.66V-764h-60v50.67Q400-705 371-673.67q-29 31.34-29 75 0 48.34 29.17 77.34 29.16 29 88.83 52.66 65.67 26.34 90.5 47.34 24.83 21 24.83 52.66 0 32.34-25.5 50.5Q524.33-300 486.67-300q-37 0-65.84-21.5Q392-343 380-382l-56 20q18.67 46.67 48.83 74.17 30.17 27.5 75.84 39.16v53.34ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z"/></svg>'
        },
      },
    ]
  }
]
</script>

# Contributors

<VPTeamMembers size="small" :members="members" />

## Project Funding

<a href="https://NLnet.nl" class="funder-logo" name="ack"><img src="/nlnet-logo.svg?url" alt="Logo NLnet: abstract logo of four people seen from above"></a>
<a href="https://NLnet.nl/NGI0" class="funder-logo"><img src="/NGI0Entrust_tag.svg?url" alt="Logo NGI Zero: letterlogo shaped like a tag"> </a>

This project was funded through the <a href="https://NLnet.nl/entrust">NGI0 Entrust</a> Fund, a fund established by <a href="https://nlnet.nl">NLnet</a> with financial support from the European Commission's <a href="https://ngi.eu">Next Generation Internet</a> programme, under the aegis of <a href="https://commission.europa.eu/about-european-commission/departments-and-executive-agencies/communications-networks-content-and-technology_en">DG Communications Networks, Content and Technology</a> under grant agreement N<sup>o</sup> 101069594.
<br><br><br>
<a href="https://nivenly.org" class="funder-logo"><img src="/nivenly-foundation-logo-with-text.png?url" alt="Logo: Nivenly Foundation"></a>

The writing of the proposal outlining FIRES was funded by <a href="https://nivenly.org">Nivenly Foundation</a>.