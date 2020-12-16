/** @jsx jsx */
import { jsx, Box, Divider, Container, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import Copyright from '../../../../../../gatsby-theme-jim-components/src/components/contentBlocks/Copyright'

// TODO update origin after edits

const BottomElement = (props) => (
    <Text
        color="primary"
        {...props}
        sx={{
            fontFamily: 'heading',
            fontSize: '10px',
            lineHeight: 1,
            display: ['flex', 'flex', 'inline-flex', null, null, null],
            letterSpacing: 'loose',

            // minHeight: ['1em', '1em', '4em', '4em', '4em', '4em'],
        }}
    />
)

const BottomContact = (props) => (
    <Box
        {...props}
        sx={{
            display: ['flex', 'flex', 'inline-flex', null, null, null],
            justifyContent: [
                'space-around',
                null,
                'space-between',
                null,
                null,
                null,
            ],
            minWidth: '14em',
            minHeight: '1em',
            order: [1, null, 2, null, null, null],
        }}
    />
)

const Bottom = ({
    bottomLayoutVariant,
    bottomTextVariant,
    bottomContent,
    ...props
}) => (
    <>
        {' '}
        <Box
            sx={{
                variant: `layout.${bottomLayoutVariant}`,
                // lineHeight: 1,
                flexDirection: ['column', 'column', 'row', 'row', 'row'],
                bg: 'black',
                display: 'flex',
                justifyContent: [
                    'center',
                    'center',
                    'space-between',
                    null,
                    null,
                    null,
                ],
                alignItems: 'center',
                height: '4em',
                px: [1, 2, 4, null, null, null],
            }}
        >
            <Copyright
                {...props}
                sx={{
                    color: 'primary',
                    display: ['flex', 'flex', 'inline-flex', null, null, null],
                    order: [2, null, 1, null, null, null],
                    minHeight: '1em',
                    lineHeight: 1,
                    letterSpacing: 'loose',
                    // textAlign: 'left',
                }}
            />
            <BottomContact>
                <BottomElement>jamiejohnsonkc@gmail.com</BottomElement>
                <BottomElement>
                    <>&#8226;</>
                </BottomElement>
                <BottomElement>913-207-6966</BottomElement>
            </BottomContact>
        </Box>
    </>
)

Bottom.propTypes = {
    bottomLayoutVariant: PropTypes.any,
    bottomTextVariant: PropTypes.any,
}

Bottom.defaultProps = {
    bottomLayoutVariant: 'bottom',
    bottomTextVariant: 'legal',
}

export default Bottom
