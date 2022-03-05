import React from "react";

import { Container } from './styles';

export interface Props {
    /**
     * Cor usada para definir cor primaria / Cod de fundo / Cor de borda / Cor de texto sem hover
     */
    color?: string;
    /**
     * Cor usada para definir cor secundaria / Cor de texto / Cor de texto em hover
     */
    onColor?: string;
    /**
     * Style type
     */
    styleType?: "default" | "outline" | "text";
    elevated?: boolean; 
    className?: 'string';
}

export const Button: React.FC<Props> = ({
    color="#ffc864",
    onColor="#2a2a2a",
    styleType="default",
    elevated=false,
    ...args
}) => {
    return (
        <Container
            color={color}
            onColor={onColor}
            styleType={styleType}
            elevated={elevated}
            {...args}
        >
            {args.children}
        </Container>
    )
}