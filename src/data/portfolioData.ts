import { SlideData } from '../types';

export const SLIDES: SlideData[] = [
  {
    id: 'cover',
    type: 'cover',
    title: 'Nima Behravan',
    categoryTag: '(Re)Designer',
    statement: 'Systems and organisations change, and their design has to change with them. I redesign from what they have become, grounded in thinking and making.',
  },
  {
    id: 'ai-works',
    type: 'content',
    categoryTag: 'AI Works',
    bullets: [
      {
        id: 'bia-system',
        text: 'Regulations change faster than teams can trace. Built BIA, an agentic AI system that maps impact on downstream services, with human in the loop before any alert.',
        formattedParts: [
          { text: 'Regulations change faster than teams can trace. Built ' },
          {
            text: 'BIA',
            isBold: true,
            link: {
              text: 'BIA',
              url: 'https://nimabeh.github.io/bia/',
              isExternal: true,
            },
          },
          { text: ', an agentic AI system that maps impact on downstream services, with human in the loop before any alert.' },
        ],
      },
      {
        id: 'power-plant-ai',
        text: "Researched and designed interaction of Power Plant, an early AI imagined as a talking plant, master's thesis at Parsons School of Design.",
        formattedParts: [
          { text: 'Researched and designed interaction of ' },
          {
            text: 'Power Plant',
            isBold: true,
            link: {
              text: 'Power Plant',
              url: 'http://mfadt.parsons.edu/2016/blog/2016/04/25/power-plant/',
              isExternal: true,
            },
          },
          { text: ", an early AI imagined as a talking plant, master's thesis at Parsons School of Design." },
        ],
      },
      {
        id: 'torus-time-helix',
        text: 'Reimagined Time as a single continuous helix on a torus, built with Google AI Studio. (code here)',
        formattedParts: [
          { text: 'Reimagined Time as a single continuous helix on a torus, built with Google AI Studio. (' },
          {
            text: 'code here',
            link: {
              text: 'code here',
              url: 'https://github.com/nimabeh/helical-time',
              isExternal: true,
            },
          },
          { text: ')' },
        ],
      },
    ],
  },
  {
    id: 'product-works',
    type: 'content',
    categoryTag: 'Product Works',
    bullets: [
      {
        id: 'aabsoo-farming',
        text: 'Founded AABSOO design and technology organization for farming, built a vertical farming automation machine along with products of plant-tech.',
        formattedParts: [
          { text: 'Founded ' },
          {
            text: 'AABSOO',
            isBold: true,
            link: {
              text: 'AABSOO',
              url: 'https://www.instagram.com/aabsoo.farm',
              isExternal: true,
            },
          },
          { text: ' design and technology organization for farming, built a vertical farming automation machine along with products of plant-tech.' },
        ],
      },
      {
        id: 'un-fao-framework',
        text: 'Built an innovation lab framework with 170+ participants worldwide at the UN Food and Agriculture Organization.',
        formattedParts: [
          { text: 'Built an innovation lab framework with 170+ participants worldwide at the UN Food and Agriculture Organization.' },
        ],
      },
      {
        id: 'oregon-foundation',
        text: 'Partnered with Oregon Foundation for Reproductive Health by Ms. Foundation Fellowship. (Documentation)',
        formattedParts: [
          { text: 'Partnered with Oregon Foundation for Reproductive Health by Ms. Foundation Fellowship. (' },
          {
            text: 'Documentation',
            link: {
              text: 'Documentation',
              url: 'https://onekeyquestion.wordpress.com/',
              isExternal: true,
            },
          },
          { text: ')' },
        ],
      },
    ],
  },
  {
    id: 'event-and-exhibition',
    type: 'content',
    categoryTag: 'Event and Exhibition',
    bullets: [
      {
        id: 'vertifarm-dortmund',
        text: 'Exhibited AABSOO in VertiFarm, first summit of vertical farming at Messe Dortmund.',
        formattedParts: [
          { text: 'Exhibited AABSOO in VertiFarm, first summit of vertical farming at Messe Dortmund.' },
        ],
      },
      {
        id: 'dmond-accelerator',
        text: 'Held 100+ events and meetings for startup sector toward partnerships as Business Developer at DMOND Accelerator.',
        formattedParts: [
          { text: 'Held 100+ events and meetings for startup sector toward partnerships as Business Developer at DMOND Accelerator.' },
        ],
      },
      {
        id: 'gallery-interactive-env',
        text: 'Designed and showed an interactive environment for an open call exhibition for 1 month in a gallery space. (Video)',
        formattedParts: [
          { text: 'Designed and showed an interactive environment for an open call exhibition for 1 month in a gallery space. (' },
          {
            text: 'Video',
            link: {
              text: 'Video',
              url: 'https://vimeo.com/312888235',
              isExternal: true,
            },
          },
          { text: ')' },
        ],
      },
    ],
  },
  {
    id: 'avocation-publication',
    type: 'content',
    categoryTag: 'Avocation: Publication',
    bullets: [
      {
        id: 'photobook-tehran',
        text: 'Directed PhotoBook Tehran at International Center of Photography Library.',
        formattedParts: [
          { text: 'Directed ' },
          {
            text: 'PhotoBook Tehran',
            isBold: true,
            link: {
              text: 'PhotoBook Tehran',
              url: 'https://www.icp.org/events/photobook-tehran-opening-reception-1at',
              isExternal: true,
            },
          },
          { text: ' at International Center of Photography Library.' },
        ],
      },
      {
        id: 'carbon-map',
        text: 'Translation of Carbon Map to Farsi made possible at Meidaan.',
        formattedParts: [
          { text: 'Translation of ' },
          {
            text: 'Carbon Map',
            isBold: true,
            link: {
              text: 'Carbon Map',
              url: 'https://www.carbonmap.org/',
              isExternal: true,
            },
          },
          { text: ' to Farsi made possible at Meidaan.' },
        ],
      },
      {
        id: 'scissors-pub',
        text: 'Designer by all means for Scissors Publication.',
        formattedParts: [
          { text: 'Designer by all means for ' },
          {
            text: 'Scissors Publication',
            isBold: true,
            link: {
              text: 'Scissors Publication',
              url: 'https://www.instagram.com/gheychinet',
              isExternal: true,
            },
          },
          { text: '.' },
        ],
      },
    ],
  },
  {
    id: 'contact',
    type: 'contact',
    closingNote: 'Feel free to get in touch',
    contactEmail: 'behravan.nima@gmail.com',
  },
];
