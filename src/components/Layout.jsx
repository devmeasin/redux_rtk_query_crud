import React from 'react';
import { MantineProvider, Container, LoadingOverlay, Button, Group } from '@mantine/core';
import { Navbar } from './Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Container size="95%">
                {
                    children
                }
            </Container>
        </div>
    )
}

export default Layout;
