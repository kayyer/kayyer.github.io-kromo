import { Stack } from "@fluentui/react"
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Display, SelectTabData, SelectTabEvent, Subtitle1, Subtitle2, Tab, TabList, TabValue, Text, Title1, Title2, Title3 } from "@fluentui/react-components"
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import 'react-slideshow-image/dist/styles.css'
import { ChevronRightRegular, HeartRegular } from '@fluentui/react-icons';
import { ChevronLeftRegular } from '@fluentui/react-icons';
import "./WorkInProgress.css";


const WorkInProgress = () => {
    const [pictures, setPictures] = useState(
        [
     
            {
                id: 1,
                image:
                    '/fotok/slideshow2.jpeg',
            },
            {
                id: 2,
                image:
                    '/fotok/slideshow3.jpg',
            },
            {
                id: 3,
                image:
                    '/fotok/slideshow5.jpg',
            },
        ]
    );
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = pictures.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, pictures]);

    // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 3000);
        return () => clearInterval(slider);
    }, [index]);


    return (
        <Stack gap-3 className="items-center justify-around gap-20 p-5 w-full" style={{backgroundColor: "rgb(251,243,235)"}}>
            <Stack className="h-1/3 items-center" style={{ maxHeight: "34%", overflow: "auto" }}>
                <section>
                    <div className="section-center">
                        {pictures.map((picture, personIndex) => {
                            const { id, image } = picture;
                            let position = "nextSlide";
                            if (personIndex === index) {
                                position = "activeSlide";
                            }
                            if (
                                personIndex === index - 1 ||
                                (index === 0 && personIndex === pictures.length - 1)
                            ) {
                                position = "lastSlide";
                            }
                            return (
                                <article key={id} className={position}>
                                    <img className="rounded" src={image} alt={id.toString()} />
                                </article>
                            );
                        })}

                    </div>
                </section>
            </Stack>
            <Stack className="items-center">
                <Stack className="items-start w-1/2 gap-10">
                    <Title1 style={{ fontSize: "40px", textAlign: "left" }}>Fodrászat</Title1>
                    <Subtitle1 style={{ textAlign: "justify" }}>
                        COMING SOON! <br />
                    </Subtitle1>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default WorkInProgress;