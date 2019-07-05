import React, {Component} from 'react';
import {TweenMax, TimelineMax, Power1} from "gsap/TweenMax";
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class Experiment extends Component {
    state = {
        flightPath: {}
    };

    componentDidMount() {
        const flightpath = {
            entry: {
                curviness: 1.25,
                autoRotate: true,
                values: [
                    {x: 100, y: -20},
                    {x: 300, y: 10}
                ]
            },
            looping: {
                curviness: 1.25,
                autoRotate: true,
                values: [
                    {x: 510, y: 60},
                    {x: 620, y: -60},
                    {x: 500, y: -100},
                    {x: 380, y: 20},
                    {x: 500, y: 60},
                    {x: 580, y: 20},
                    {x: 620, y: 15}
                ]
            },
            leave: {
                curviness: 1.25,
                autoRotate: true,
                values: [
                    {x: 660, y: 20},
                    {x: 800, y: 130},
                    {x: window.innerWidth + 300, y: -100},
                ]
            }
        };

        const controller = new ScrollMagic.Controller();
        console.log(this.refs.plane);

        // create tween
        const tween = new TimelineMax()
            .add(TweenMax.to(this.refs.plane, 1.2, {
                css: {bezier: flightpath.entry},
                ease: Power1.easeInOut
            }))
            .add(TweenMax.to(this.refs.plane, 2, {
                css: {bezier: flightpath.looping},
                ease: Power1.easeInOut
            }))
            .add(TweenMax.to(this.refs.plane, 1, {
                css: {bezier: flightpath.leave},
                ease: Power1.easeInOut
            }));

        // build scene
            const scene = new ScrollMagic.Scene({triggerElement: "#trigger-scroll", duration: 500, offset: 100})
                .setPin("#target-scroll")
                .setTween(tween)
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

    }

    render() {
        return (
            <div>
                <div className={"spacer s2"} style={{minHeight: "2000px"}}></div>
                <div className={"spacer s0"} id="trigger-scroll"></div>
                <div id="target-scroll">
                    <img id="plane" src="https://scrollmagic.io/assets/img/example_bezier.png" ref={"plane"}/>
                </div>
                <div className={"spacer s2"} style={{minHeight: "2000px"}}></div>
            </div>
        );
    }
}

export default Experiment;