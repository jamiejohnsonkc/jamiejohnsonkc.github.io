/** @jsx jsx */
import { jsx, Link, Box } from 'theme-ui'
import React from 'react'

import Layout from '../components/product/templates/layouts/Layout'

import ProgressBar from '../gatsby-theme-jim-components/components/system/molecules/ProgressBar'
import animation from '../../../gatsby-theme-scroll-reveal/animation'

//
const Test = (props) => {
    return (
        <>
            <Layout>
                <Box
                    {...props}
                    // {...animation.slideUp1}
                    sx={{
                        width: '25vw',
                        mt: 6,
                        ml: 8,
                        '& > div': {
                            mt: 4,
                        },
                    }}
                >
                    <ProgressBar
                        done={50}
                        progressBar="red"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={35}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={25}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={90}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={75}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={65}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    </Box>
                    {/* <Box
                    {...props}
                    {...animation.slideUp1}
                    sx={{
                        width: '25vw',
                        mt: 6,
                        ml: 8,
                        '& > div': {
                            mt: 4,
                        },
                    }}
                >
                    <ProgressBar
                        done={40}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                        <ProgressBar
                        done={50}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={35}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={25}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={90}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={75}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={65}
                        progressBar="blue"
                        progressBarBg="gray"
                    /></Box> <Box
                    {...props}
                    {...animation.slideUp1}
                    sx={{
                        width: '25vw',
                        mt: 6,
                        ml: 8,
                        '& > div': {
                            mt: 4,
                        },
                    }}
                >
                    <ProgressBar
                        done={40}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                        <ProgressBar
                        done={50}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={35}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={25}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={90}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={75}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={65}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    </Box> <Box
                    {...props}
                    {...animation.slideUp1}
                    sx={{
                        width: '25vw',
                        mt: 6,
                        ml: 8,
                        '& > div': {
                            mt: 4,
                        },
                    }}
                >
                    <ProgressBar
                        done={40}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                        <ProgressBar
                        done={50}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={35}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={25}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={90}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={75}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={65}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={40}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    </Box> <Box
                    {...props}
                    {...animation.slideUp1}
                    sx={{
                        width: '25vw',
                        mt: 6,
                        ml: 8,
                        '& > div': {
                            mt: 4,
                        },
                    }}
                >
                        <ProgressBar
                        done={50}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={35}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={25}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={90}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={75}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={65}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={40}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                        <ProgressBar
                        done={50}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={35}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={25}
                        progressBar="blue"
                        progressBarBg="gray"
                    /></Box> <Box
                    {...props}
                    {...animation.slideUp1}
                    sx={{
                        width: '25vw',
                        mt: 6,
                        ml: 8,
                        '& > div': {
                            mt: 4,
                        },
                    }}
                >
                    <ProgressBar
                        done={90}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={75}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={65}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    <ProgressBar
                        done={40}
                        progressBar="blue"
                        progressBarBg="gray"
                    />
                    </Box> */}



            </Layout>
        </>
    )
}

export default Test
