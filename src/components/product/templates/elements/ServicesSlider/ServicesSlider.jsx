/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import Slider from 'react-slick'
// import ServiceCard from '../../layout/ServiceCard/ServiceCard'
import { GoChevronRight } from 'react-icons/go'
import DesignCrd from '../serviceCards/DesignCrd'
import DevCrd from '../serviceCards/DevCrd'
import ContentCrd from '../serviceCards/ContentCrd'
import WpCrd from '../serviceCards/WpCrd'
import PlanningCrd from '../serviceCards/PlanningCrd'
import { GoChevronLeft } from 'react-icons/go'
// import EcomCrd from '../../elements/serviceCards/EcomCrd'
import './slick.css'

function NextArrow(props) {
    const { style, onClick } = props
    return (
        <Box
            className="nextArrow"
            {...style}
            {...props}
            sx={{
                display: 'block',
                position: 'absolute',
                zIndex: '5',
                top: ['unset', 'unset', '45%', '45%', '45%'],
                bottom: ['5%', '5%', 'unset', 'unset', 'unset'],
                right: ['8px', '36px', '-48px', '-48px', '-48px'],
                '& > svg': {
                    fill: 'primary',
                    height: ['2em', '2em', '2em', '2em', '2em'],
                    width: ['2em', '2em', '2em', '2em', '2em'],
                },
            }}
            onClick={onClick}
        >
            {/* <Icon iconName='ChevronRight' size='3em' /> */}
            <GoChevronRight />
        </Box>
    )
}

function PrevArrow(props) {
    const { style, onClick } = props
    return (
        <Box
            className="prevArrow"
            {...style}
            {...props}
            sx={{
                display: 'block',
                position: 'absolute',
                zIndex: '5',
                top: ['5%', '5%', '45%', '45%', '45%'],
                left: ['8px', '8px', '-48px', '-48px', '-48px'],
                '& > svg': {
                    fill: 'primary',
                    height: ['2em', '2em', '2em', '2em', '2em'],
                    width: ['2em', '2em', '2em', '2em', '2em'],
                },
            }}
            onClick={onClick}
        >
            {/* <Icon iconName='ChevronLeft' size='3em' /> */}
            <GoChevronLeft />
        </Box>
    )
}

const ServicesSlider = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        // speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                },
            },
        ],
    }
    return (
        <Slider
            className="slider"
            {...settings}
            {...props}
            sx={{
                variant: 'layout.serviceSlider',
            }}
        >
            <DevCrd />
            <WpCrd />
            <DesignCrd />
            <ContentCrd />
            <PlanningCrd />
            {/* <EcomCrd style={{ width: 400 }} /> */}
        </Slider>
    )
}

ServicesSlider.propTypes = {}

ServicesSlider.defaultProps = {}

export default ServicesSlider
