import React from 'react'

export default function Hero({children,hero}) {
    return (
        //passing props
        <header className={hero}>
            {children}
        </header>

    )
}
//passing default props
Hero.defaultProps = {
    hero:"defaultHero"
}
