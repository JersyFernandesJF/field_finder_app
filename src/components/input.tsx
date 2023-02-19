import React from 'react'
import { TextInput, TextInputProps, StyleSheet } from 'react-native'
import { useTheme } from "~/hooks/theme";
import { Block } from "./block"

export type IInput = TextInputProps & {
       type?:string, 
       left?: JSX.Element, 
       right?: JSX.Element
}

export const Input: React.FC<IInput> =({
    left, 
    right,
    ...props
}) => {
    const { colors, fonts } = useTheme();
    const TextInputStyles = StyleSheet.flatten({
        borderWidth: 0.5,
        borderColor: colors.dark[2],
        height: 52,
        borderRadius: 12,
        width: 315
    })
     return (
        <Block  row justifyContent='flex-start' alignItems='center' style={TextInputStyles} paddingHorizontal={16}>
             {left && left} 
             <TextInput {...props}/>
             {right && right}
        </Block>
     )
}
 
