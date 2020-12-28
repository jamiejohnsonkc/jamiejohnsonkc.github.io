/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import ProgressBar from '../../molecules/ProgressBar'

const LabeledProgressBar = ({ progressLabel, labelColor, done, ...props }) => (
    <Box
        className="labeledProgressBar"
        {...props}
        sx={{
            display: 'inline-grid',
            gridTemplateColumns: [
                '1fr',
                '1fr',
                '1fr',
                '1fr',
                '.83fr',
                '.83fr',
                '.83fr',
                '.83fr',
            ],
            // '1fr',
            // '1fr',
            // '1.25fr 2.75fr',
            // '1.25fr 2.75fr',
            // '1.25fr 2.75fr',
            // ],

            // '1.25fr 2.75fr',
            // '1.25fr 2.75fr',

            alignItems: 'center',
            width: '100%',
            pr: [2, 2, 0, 0, 0, 0, 0, 0],
            // gridColumnStart: 1,
            // gridColumnEnd: 3,
            gridTemplateRows: '.5fr 1fr',
        }}
    >
        <Text
            className="label"
            {...props}
            sx={{
                display: 'inline-grid',
                // width: '7em',
                fontFamily: 'caption',
                // fontVariant: 'all-small-caps',
                fontSize: ['10px', 1, 2, 2, 0, 0, 0, 0],
                // letterSpacing: 'lazy',
                color: `${labelColor}`,
                lineHeight: 1.2,
            }}
        >
            {progressLabel}
        </Text>
        <Box
            className="progressBarWrapper"
            {...props}
            sx={{
                display: 'inline-grid',
            }}
        >
            <ProgressBar done={done} />
        </Box>
    </Box>
)

LabeledProgressBar.propTypes = {
    LabelColor: PropTypes.any,
    done: PropTypes.any,
    progressLabel: PropTypes.any,
}

LabeledProgressBar.defaultProps = {
    // labelColor: (t) => `${theme.colors.muted}`,
    labelColor: 'muted',
    done: '50%',
    progressLabel: 'Progress',
}

export default LabeledProgressBar
