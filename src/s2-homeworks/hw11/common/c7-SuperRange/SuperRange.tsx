import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                maxWidth: '147px',
                '& .MuiSlider-rail': {
                    color: '#8B8B8B'
                },
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
                    },
                    '& .airbnb-bar': {
                        height: 9,
                        width: 9,
                        backgroundColor: 'red',
                        marginLeft: 1,
                        marginRight: 1,
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
