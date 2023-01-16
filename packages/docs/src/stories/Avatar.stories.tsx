import type {StoryObj, Meta} from '@storybook/react'
import {Avatar, AvatarProps} from '@marcos-ignite-ui/react'

export default { 
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://avatars.githubusercontent.com/u/75809289?v=4',
        alt: 'Marcos Vinicius'
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            }
        }
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}