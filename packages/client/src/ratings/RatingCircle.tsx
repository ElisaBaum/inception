import React from 'react';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';

const ratingCircleStyles = theme => ({
    container: {
        position: 'relative' as 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        transform: 'rotate(-90deg)',
    },
    bar: {
        strokeDasharray: dasharrayStr,
        strokeLinecap: 'round' as 'round',
        animation: 'progress 2s infinite alternate',
    },
    value: {
        position: 'absolute' as 'absolute',
        letterSpacing: '-0.05rem'
    },
    valuePreDecimal: {
        fontSize: '2.15rem'
    },
    valuePostDecimal: {
        fontSize: '1.45rem'
    },
});
type RatingCircleProps = { rating: number } & WithStyles<typeof ratingCircleStyles>;

/**
 * @source https://codepen.io/xgad/post/svg-radial-progress-meters
 */
export const RatingCircle = withStyles(ratingCircleStyles)(({rating, classes}: RatingCircleProps) => {
    const strokeDashoffset = getStrokeDashoffset(rating);
    const [preDecimal, postDecimal] = getDecimals(rating);

    return (
        <div className={classes.container}>
            <svg className={classes.circle}
                 width={circleSize}
                 height={circleSize}
                 viewBox={circleViewBox}>
                <defs>
                    <radialGradient id="backgr"
                                    cx="0.5"
                                    cy="0.5"
                                    r="0.8"
                                    fx="1"
                                    fy="0.5">
                        <stop offset="0%" stopColor="#FF53AA"/>
                        <stop offset="100%" stopColor="#492AED"/>
                    </radialGradient>
                </defs>
                <circle cx="50%"
                        cy="50%"
                        r={circleRadial}
                        fill="none"
                        stroke="#eeeff4"
                        strokeWidth="2"/>
                <circle className={classes.bar}
                        cx="50%"
                        cy="50%"
                        r={circleRadial}
                        fill="none"
                        stroke="url(#backgr)"
                        strokeDashoffset={strokeDashoffset}
                        strokeWidth={barStrokeWidth}/>
            </svg>
            <div className={classes.value}>
                <span className={classes.valuePreDecimal}>{preDecimal}</span>
                {postDecimal && <span className={classes.valuePostDecimal}>.{postDecimal}</span>}
            </div>
        </div>
    );
});

const additionalSpace = 3;
const barStrokeWidth = 5;
const circleSize = 120;
const circleViewBox = `0 0 ${circleSize} ${circleSize}`;
const circleRadial = (circleSize / 2) - Math.round(barStrokeWidth / 2) - additionalSpace;
const dasharray = 2 * Math.PI * circleRadial;
const dasharrayStr = String(Math.round(dasharray * 1000) / 1000);

const getStrokeDashoffset = rating => {
    const MAX_RATING = 10;
    return String(dasharray - (Math.round(rating / MAX_RATING * dasharray * 1000) / 1000));
};
const getDecimals = rating => String(rating).split('.');
