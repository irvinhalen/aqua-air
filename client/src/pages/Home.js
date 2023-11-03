import React, { useEffect, useState } from 'react';
import bgvid from '../media/bg-vid.mp4';
import elbow from '../media/macaroni-elbow.png';
import fusilli from '../media/macaroni-fusilli.png';
import ScrollRevealElement from '../ScrollRevealElement';

function Home(){
    const [hyphenCount, setHyphenCount] = useState(0);

    useEffect(() => {
        const countHyphens = () => {
        const textContent = document.body.textContent;
        const hyphenRegex = /-/g;
        const matches = textContent.match(hyphenRegex);

        if (matches) {
            setHyphenCount((matches.length)+1);
        }
    };

    countHyphens();
  }, []);

    return(
        <div>
            <div className="main-content">
                <video autoPlay loop muted>
                <source src={bgvid} type="video/mp4"/>
                </video>
                <div className="container container-content">
                <div className="content-in-vid">
                    <h1>Offshore Strategies</h1>
                    <p>I was thinking of calling it Off-brand Tactics for this practice project.<br />Now is the time to  take advantage, Philippines!</p>
                    <a href="https://www.facebook.com/people/Stuffed-Slice/61551555076645/"><button className="snd-btn btn py-3 px-5">CONTACT US</button></a>
                </div>
                </div>
            </div>
            <div className="additional-content container">
                <img className="elbow" src={elbow} alt="Elbow" height="250rem" />
                <img className="fusilli" src={fusilli} alt="Fusilli" height="250rem" />
                <ScrollRevealElement>
                <h4>THERE ARE <span className="bold-txt">{hyphenCount}</span> HYPHENS SATISFIED!</h4>
                </ScrollRevealElement>
                <ScrollRevealElement>
                <h4 className='text-primary'>WHY AQUA-AIR SEASIA?</h4>
                </ScrollRevealElement>
                <ScrollRevealElement>
                <h2>It has distinct personality</h2>
                </ScrollRevealElement>
                <ScrollRevealElement>
                <a href="https://www.facebook.com/people/Stuffed-Slice/61551555076645/"><button className='trd-btn btn'>SERVICE SAYS</button></a>
                </ScrollRevealElement>
            </div>
            <div className="add-on-content container">
            <ScrollRevealElement>
                <h4>GROW THY BUSY-NESS</h4>
            </ScrollRevealElement>
            <ScrollRevealElement>
                <h2>Consider offshore utility now</h2>
            </ScrollRevealElement>
                <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                <ScrollRevealElement>
                    <p>Bacon ipsum dolor amet exercitation beef commodo minim non sunt. Shankle in ad excepteur, spare ribs enim bacon sed elit est chislic pork loin. Rump hamburger incididunt short loin. Bresaola pork chop bacon shankle flank. Chicken jerky ribeye dolore landjaeger ullamco porchetta shank pariatur kielbasa sirloin sausage strip steak jowl boudin. Burgdoggen shank cupidatat ball tip filet mignon voluptate. Veniam eu capicola hamburger quis ham spare ribs nulla elit meatball.</p>
                </ScrollRevealElement>
                </div>
                <div className='col-2'></div>
                </div>
                <ScrollRevealElement>
                    <a href="https://www.facebook.com/people/Stuffed-Slice/61551555076645/"><button className='snd-btn btn'>CONTACT US</button></a>
                </ScrollRevealElement>
            </div>
        </div>
    )
}

export default Home;