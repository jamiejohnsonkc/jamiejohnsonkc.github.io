//! THEME BASE STYLES

// TODO explore adobe xd extension

import wp2016 from 'typography-theme-wordpress-2016'
import merge from 'lodash.merge'
import { toTheme } from '../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/typographyjsEdits/my-to-theme'
import { options } from './typography'
import forms from '../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/forms'
import colors from './colors'
import layout from './layout'
import cards from '../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/cards'
import links from '../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/links'
import buttons from '../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/buttons'
import palette from '../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/palette'
import nav from '../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/nav'

// import animation from './ex-theme-ui/animation'
import gradients from '../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/ex-theme-ui/gradients'

const typography = toTheme(merge(wp2016, options), {})

export default merge(typography, {
    layout,
    nav,
    cards,
    palette,
    colors,
    links,
    buttons,
    forms,
    gradients,
    // breakpoints: ['40em', '51em', '58em', '80em', '100em'], // px-  0, 640, 816, 928, 1280, 1600
    // breakpoints: ['400px', '816px', '850px', '1024px', '1280px', '1600px'],
    breakpoints: ['400px', '640px', '800px', '928px', '1280px', '1600px', '2500px'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 640, 768],

    //TODO change "container' to 'widths'
    sizes: {
        container: {
            0: '23.6%',
            1: '38.2%',
            2: '50%',
            3: '61.8%',
            4: '83.82%',
            5: '96.18%',
            6: '100%',
        },
    },

    letterSpacings: {
        spread: '0.25em',
        loose: '0.1em',
        lazy: '.025em',
        normal: 'null',
        pinch: '-0.005em',
        snug: '-0.025em',
        tight: '-0.05em',
    },
    fontWeights: {
        thin: 200,
        light: 300,
        normal: 400, // default normal
        semibold: 600, // default bold
        bold: 700, // default bold
        heavy: 900,
    },

    // Typography variants:
    caps: {
        textTransform: 'uppercase',
        letterSpacing: 'loose',
    },
    capsBold: {
        textTransform: 'uppercase',
        letterSpacing: 'loose',
        fontWeight: 'bold',
    },

    // busker: {
    //     fontFamily: 'heading',
    //     fontWeight: 'heavy',
    //     color: 'pink',
    // },
headline: {
    // mb: 2,
    fontWeight: 'heavy',
},

    subline: {
        fontFamily: 'heading',
         fontWeight: 'normal',
        letterSpacing: 'loose',
        textTransform: 'uppercase',
        lineHeight: 1.4,
    },
    subhead: {
        fontFamily: 'heading',
        fontWeight: 'semibold',
        letterSpacing: 'snug',
        mb: 4,
        color: 'text',
        lineHeight: 1.2,
    },

    display: {
        fontFamily: 'heading',
        fontWeight: 'normal',
        lineHeight: 1.4,
        letterSpacing: 'normal',
    },
    busker:{
        // fontFamily: 'heading',
        lineHeight: 1.2,
        letterSpacing: 'tight',
        // fontSize: 11,
    },

    paragraph: {
        // fontFamily: 'body',
        lineHeight: 2,
        mb: [4,4,null, null, null,null,null,null],

    },

    body: {
        // fontFamily: 'body',
        lineHeight: 1.8,
    },

    legal: {
        // fontFamily: 'body',
        fontWeight: 'normal',
        fontSize: '10px',
        lineHeight: 1.2,
    },
    caption: {
        // fontFamily: 'heading',
        mt: 2,
        mb: 4,
        fontWeight: 'normal',
        letterSpacing: 'lazy',
        fontSize: 0,
        lineHeight: 1.2,
    },
    utility: {
        fontFamily: 'Source Code Pro',
    },

    text: {
        default: {
            color: 'text',
            fontSize: 4,
        },
        heading: {
            letterSpacing: 'tight',
            lineHeight: 1.2,
        },





        p1: {
            // color: 'text',
            // fontFamily: 'body',
            // lineHeight: 2,
            // fontSize: 3,
            // marginBottom: 4,
            maxWidth: '42em',
        },
        p2: {
            // color: 'text',
            // fontFamily: 'body',
            // lineHeight: 2,
            // fontSize: 2,
            // marginBottom: 4,
            maxWidth: '41em',
        },
        p3: {
            // color: 'text',
//             fontFamily: 'body',
            // lineHeight: 2,
            // marginBottom: 4,
            // fontSize: 1,
            maxWidth: '41em',
        },
        // b1: {
        //     variant: 'text.copy',
        //     lineHeight: 2,
        //     fontSize: [2, 5, 6, null, 2, null],
        //     maxWidth: '41em',
        //     mb: 4,
        // },
        // b2: {
        //     variant: 'text.copy',
        //     lineHeight: 2,
        //     fontSize: [1, 4, 5, null, 2, null],
        //     maxWidth: '41em',
        // },
        // b3: {
        //     variant: 'text.copy',
        //     lineHeight: 2,
        //     fontSize: 0,
        //     maxWidth: '41em',
        // },
        utility_lg: {
            lineHeight: 2,
            fontSize: 2,
        },
        utility_md: {
            lineHeight: 2,
            fontSize: 1,
        },
        utility_sm: {
            lineHeight: 2,
            fontSize: 0,
        },
    },

    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
             fontWeight: 'normal',
        },

        // hxxxl: {
        //     lineHeight: 1.2,
        //     mb: 4,
        //     letterSpacing: 'tight',
        //     fontSize: 12,
        // },
        // hxxl: {
        //     fontFamily: 'heading',
        //     fontWeight: 'heavy',
        //     lineHeight: 1.2,
        //     mb: 2,
        //     letterSpacing: 'tight',
        //     fontSize: 11,
        // },
        // hxl: {
        //     fontFamily: 'heading',
        //     fontWeight: 'heavy',
        //     lineHeight: 1.2,
        //     letterSpacing: 'tight',
        //     fontSize: 10,
        // },

        // bu1: {
        // fontSize: 2,
        // },
        // h1: {
        //     fontSize: 9,
        // },
        // h2: {
        //     fontSize: 8,
        // },
        // h3: {
        //     fontSize: 7,
        // },
        // h4: {
        //     fontSize: 6,
        // },
        // h5: {
        //     fontSize: 5,
        // },
        // h6: {
        //     fontSize: 4,
        // },
        // d1: {
        //     fontSize: 7,
        // },
        // d2: {
        //     fontSize: 6,
        // },
        // d3: {
        //     fontSize: 5,
        // },
        // d4: {
        //     fontSize: 4,
        // },
        // b1: {
        //     fontsize: 5,
        // },
        // b2: {
        //     fontsize: 4,
        // },
        // b3: {
        //     fontsize: 3,
        // },
        // p1: {
        //     fontsize: 3,
        // },
        // p2: {
        //     fontsize: 2,
        // },
        // p3: {
        //     fontsize: 1,
        // },

        // sl1: {
        //     fontSize: 6,
        // },
        // sl2: {
        //     fontSize: 5,
        // },
        // sl3: {
        //     fontSize: 4,
        // },
        // sl4: {
        //     fontSize: 3,
        // },
        // sl5: {
        //     fontSize: 2,
        // },
        // sl6: {
        //     fontSize: 1,
        // },

        a: {
            color: 'primary',
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit',
            },
        },

        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        img: {
            maxWidth: '100%',
        },
        olPlain: {
            listStyle: 'none',
            paddingLeft: 0,
            bg: 'primary',
        },

        ulPlain: {
            listStyle: 'none',
            paddingLeft: 0,
            bg: 'secondary',
        },

        liPlain: {
            color: '#444',
            textTransform: 'uppercase',
        },
    },

    shadows: {
        //* nuetrals
        subtleSoftFull: '0 0 4px 3px rgba(0, 0, 0, .05)',
        subtleFirmLR: '2px 2px 6px 0px rgba(0, 0, 0, .075)',
        present: `0 2px 40px rgba(14,30,37,.16)`,
        test5: `-10px 10px 80px rgba(0,0,0,.1)`,
        depth: `0 5px 20px -10px #000`,
        callOut: `0 0 4.236em rgba(14,30,37,.09)`,
        uiDivide: `0 2px 20px rgba(14,30,37,.5)`,

        //* themed
        primary: `0 0 4px 3px ${colors.primary}`,
        primaryFaint: '0 0 4px 3px rgba(1.2%, 66.3%, 95.7%, .25)',
        primarySubtleFirmLR: '2px 2px 6px 0px rgba(1.2%, 66.3%, 95.7%, .25)',
    },

    flair: {
        revHilightHoverText: {
            backfaceVisibility: 'hidden',
            background: 'none',
            border: '0px',
            color: 'text',
            cursor: 'pointer',
            display: 'inline-flex',
            margin: '0px',
            outlineColor: 'primary',
            overflow: 'hidden',
            position: 'relative',
            padding: '0px 4px',
            textDecoration: 'none',
            transition:
                'color 200ms ease-in-out 100ms, transform 100ms ease-out 0s',
            willChange: 'color, transform',
            zIndex: '1',

            '&::before, &::after': {
                content: '""',
                display: 'block',
                height: '100%',
                left: '0px',
                position: 'absolute',
                top: '0px',
                transform: 'translateX(-110%)',
                transformOrigin: 'left center',
                transition: 'transform 100ms ease-in 0s',
                width: '100%',
                willChange: 'transform',
                zIndex: '-1',
            },
            '&::before': {
                backgroundColor: 'white',
                mixBlendMode: 'difference',
                pointerEvents: 'none',
                zIndex: '1',
            },
            '&::after': {
                backgroundColor: 'rgb(218,49,46)',
            },
            '&:hover::before, &:hover::after': {
                transform: 'translateX(0px)',
                transition: 'transform 200ms ease-in-out 100ms',
            },
            '&:hover>span': {
                transform: 'scaleX(0) translateY(-1px)',
            },
        },
        underlineSpan: {
            height: '2px',
            backgroundColor: 'primary',
            bottom: '0px',
            display: 'block',
            left: '0px',
            position: 'absolute',
            transformOrigin: 'left center',
            transition: 'transform 200ms ease-out 0s',
            width: '100%',
            willChange: 'transform',
            zIndex: '1',
        },
    },
    flex: {
        columnRow: {
            flexDirection: ['column', 'column', 'column', 'row', 'row', 'row'],
        },
        rowColumn: {
            flexDirection: ['row', 'row', 'row', 'column', 'column', 'column'],
        },
        row: {
            flexDirection: 'row',
        },
        column: {
            flexDirection: 'column',
        },

        rowWrap: {
            flexWrap: 'wrap',
            flexDirection: 'row',
        },
        rowNoWrap: {
            flexWrap: 'noWrap',
            flexDirection: 'row',
        },
    },
    radii: {
        rounded: '6px',
        pill: '3em',
        circle: '9999px',
        square: '2px',
    },
})
