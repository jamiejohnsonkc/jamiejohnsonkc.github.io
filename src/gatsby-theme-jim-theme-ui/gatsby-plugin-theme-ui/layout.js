
//! organize by style type, not by the object so changing the same elements is quicker (or find ways to control more components by less objects)

//* shared properties/values
const serviceSliderCard = {
    height: [
        '400px',
        '460px',
        '600px',
        '460px',
        '480px',
        '540px',
        '540px',
        '868px',
    ],
}

export default {
    //* Global
    // main: {
    //     height: ['100%', '100%', '100%', '100%', '100%', '100%'],
    //     zIndex: 1,

    // },

    section: {
        minHeight: ['454px', null, '100vh', null, null, null, null, null],
        zIndex: 1,
        '@media(min-height:639px)': {
            minHeight: '100vh',
            scrollSnapType: 'y mandatory',
            scrollSnapAlign: 'start',
        },
    },
    article: {
        // flex: '0 0 auto',
        // minWidth: '0',
        // px: [0, 2, 0, 4, 5, 7],
        px: [2, 4, 0, 'none', 'none', 'none', 'none'],
        flex: '0 0 auto',
        // minHeight: '100%',
    },
    articleGrid: {
        px: [2, 4, 0, 'none', 'none', 'none', 'none', 'none'],
        // minHeight: '100%',
    },

    // articleCenterCenter:{

    // },

    container: {
        maxWidth: [
            'container.5',
            null,
            'container.4',
            'container.4',
            'container.4',
            'container.4',
            'container.4',
            'container.4',
        ],
        minHeight: '100%',
        position: 'relative',
    },

    workSampleFlexContainer: {
        maxWidth: [
            'container.6',
            null,
            'container.4',
            'container.4',
            null,
            'container.4',
            'container.4',
            'container.4',
        ],
        minHeight: '100%',
        position: 'relative',
        flexDirection: [
            'column',
            'column',
            'column',
            'column',
            'row',
            'row',
            'row',
            'row',
        ],
        py: [6, 6, 6, 6, 6, 6, 6, 6],
        // bg: ['blue', 'green', 'yellow', 'red', 'orange', 'purple' ],
    },
    // summaryContainer: {
    //     maxWidth: [
    //         'container.6',
    //         null,
    //         'container.4',
    //         'container.4',
    //         'container.3',
    //         'container.3',

    //     ],
    //     height: '100%',
    //     position: 'relative',
    // },

    containerFlexDirectionColRow: {
        flexDirection: [
            'column',
            'column',
            'column',
            'column',
            'row',
            'row',
            'row',
            'row',
        ],
    },

    //* ValueSection Styles
    sectionValue: {
        minHeight: [
            null,
            null,
            '120vh',
            'unset',
            'unset',
            '200vh',
            'null',
            'null',
        ],
        // minHeight: ['800px', '2000px', '906px', '1075px', '1536px', '1536px'],
        px: [null, 1, 1, 4, 2, null, null, null],
        py: [6, 7, 6, 6, 6, 4, 2, 2 ],
        scrollSnapType: 'y mandatory',
        scrollSnapAlign: [null, 'start', null, null, null, null, null, null],
        zIndex: 1,
    },
    containerValue: {
        maxWidth: [
            'container.6',
            null,
            'container.4',
            'container.6',
            'container.5',
            'container.4',
            null,
            null,
        ],
        // minHeight: '100%',
        position: 'relative',
    },
    articleValue: {
        px: [0, 2, 0, 2, 4, 4, 4, 4],
    },

    //* HistorySection Styles
    sectionHistory: {
        py: 2,
        width: '100%',
        display: 'block',
        scrollSnapAlign: [
            null,
            'start',
            'start',
            'start',
            'center',
            'center',
            'center',
            'center',
        ],
        zIndex: 1,
    },

    //* ProjectsSection Styles
    workSampleArticle: {
        alignItems: 'normal',
        alignSelf: 'center',
        display: 'flex',
        flex: [1, 1, 1, '1 1 0%', '1 1 0%', '1 1 0%', '1 1 0%', '1 1 0%'],
        flexWrap: 'wrap',
        pb: [0, 0, 0, 0, 0, 0, 0, 0],
        pl: [2, 4, 0, 0, 0, 0, 0, 0],
        position: 'relative',
        pr: [2, 4, 0, 0, 0, 0, 0, 0],
        pt: [0, 0, 0, 0, 0, 0, 0, 0],
    },

    //* Services Styles
    sectionSlider: {
        alignItems: [null, null, null, 'center', , null, null],
        display: 'block',
        minHeight: [null, '1100px', '100vh', null, null, null, null, null],
        position: 'relative',
        scrollSnapType: 'y mandatory',
        zIndex: 3,
        px: [2, null, null, null, null, null, null, null],
        py: [6, null,null,null,0, null, null, null],
        scrollSnapAlign: [
            null,
            'start',
            'start',
            'start',
            'start',
            'start',
            'start',
            'start',
        ],
    },
    serviceSliderArticle: {
        pl: [0, 2, 0, 5, 5, 5, 5, 5],
        pr: [0, 2, 0, 0, 4, 5, 5, 5],
        py: [1, 2, 5, 4, 4, 4, 4, 4],
    },
    containerSlider: {
        maxWidth: [
            'container.6',
            'container.5',
            null,
            null,
            'container.4',
            null,
            null,
            null,
        ],
        // minHeight: '100%',
        position: 'relative',
    },

    // ? servicesSliderContainer, Slider elements as noted,

    serviceSlider: {
        ...serviceSliderCard,
        height: serviceSliderCard.height,
        display: ['block', null, null, null, null, null, null, null],
        position: ['relative', null, null, null, null, null, null, null],
        '.slick-list, .slick-slider, .slick-track': {
            height: serviceSliderCard.height,
        },
    },

    serviceSliderCard: {
        ...serviceSliderCard,
        height: serviceSliderCard.height,
        bg: 'surface',
        px: [4, 5, 5, 5, 5, 5, '83px', '100px'],
        // py: [4, 6, 5, 5, 5, 5],
        width: [
            '90vw',
            '90vw',
            '410px',
            '392px',
            '340px',
            '360px',
            '420px',
            '578px',
        ],
        borderRadius: 6,
        cursor: 'grab',
    },

    //* DevSkills Styles
    skillsSection: {
        overflow: 'hidden',
        minHeight: [
            'auto',
            'auto',
            'auto',
            '100vh',
            '100vh',
            '100vh',
            '100vh',
            '100vh',
        ],
        // minHeight: '100vh',
        position: [
            'relative',
            'relative',
            'relative',
            'fixed',
            'fixed',
            'fixed',
            'fixed',
            'fixed',
        ],
        py: [null, null, null, null, 0, 0, 0, 0],
        top: [null, null, null, null, 0, null, 0, null],
        left: [null, null, null, null, 0, null, 0, null],
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: [
                'block',
                'block',
                'none',
                'none',
                'none',
                'none',
                'none',
                'none',
            ],
        },
    },

    skillsContainer: {
        maxWidth: [
            'container.6',
            null,
            null,
            'container.6',
            null,
            'container.6',
            'container.6',
            'container.6',
        ],
    },
}
