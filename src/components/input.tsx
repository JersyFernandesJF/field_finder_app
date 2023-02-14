import React from 'react'
import { TextInput, TextInputProps, StyleSheet } from 'react-native'
import { ButtonProps } from './button'
import { useTheme } from "~/hooks/theme";

export type IInput = TextInputProps & {
       type?:string
}

export const Input: React.FC<IInput> =({
    ...props
}) => {
    const { colors, fonts } = useTheme();
    const TextInputStyles = StyleSheet.flatten({
        borderWidth: 1, 
        height: 50, 
        borderRadius: 12,
        borderColor: colors.dark[2],
        paddingHorizontal: 44,
    })
     return (
         <TextInput style={TextInputStyles} {...props}/>
     )
}
 
