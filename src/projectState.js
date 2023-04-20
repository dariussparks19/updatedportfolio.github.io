//Import Images
import musicplayer from './imgs/musicplayer.png';
import musicplayer2 from './imgs/musicplayer2.png';
import card from './imgs/card.jpeg'

export const ProjectState = () => {
    return [
        {
            title: "Wave Music Player",
            mainImg: musicplayer,
            url: "/projects/waveplayer",
            secondImg: musicplayer2,
            code: [
                {
                    coder: "Darius Sparks",
                    lang: "HTML, CSS, Javascript",
                    frontend: "React",
                    desc: "Fully-functioned music player with a library of songs. Functional buttons to skip forward, back, play and pause. Highlights current song state and switches to any song, anytime with automatic paused or play state. Prepopulates song length with matching linear gradient color input to the current song. Functional on any platform, desktop or phone."
                },
            ],
        },
        {
            title: "Frontend Mentor Practice",
            mainImg: card,
            url: "/projects/frontendmentor",
            secondImg: card,
            code: [
                {
                    coder: "Darius Sparks",
                    lang: "HTML, CSS, Javascript",
                    frontend: "React",
                    desc: "Practice in UI using only HTML & CSS."
                },
            ],
        },
        
    ]
}