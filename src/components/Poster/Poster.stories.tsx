import React from "react";
import { ComponentStory, ComponentMeta} from "@storybook/react";
import Poster, { PosterProps, defaultProps} from "./Poster";
import {BrowserRouter} from 'react-router-dom'

export default  {
    title: "Kitbash3D UI / Poster",
    component: Poster
} as ComponentMeta<typeof Poster>;

const Template: ComponentStory<typeof Poster> = (args:PosterProps ) => {
    return (
        <BrowserRouter>
            <Poster {...args} />
        </BrowserRouter>
    )
}

export const PosterComponent = Template.bind({})

PosterComponent.args = defaultProps;