import React, { useEffect, useState } from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Text, Paper, Button, Divider, Stack, Center, LoadingOverlay } from '@mantine/core';
import { useAddStudentMutation } from '@/services/studentsApi';


const StudentForm = ({ setModalOpened }) => {

    const [visible, setVisible] = useState(false);
    const [addStudent, { isLoading, isSuccess }] = useAddStudentMutation();

    const form = useForm({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            fullName: (val) => (val.length <= 3 ? 'fullName should be least 3 characters' : null),
            phone: (val) => (val.length !== 11 ? 'phone should be least 11 characters' : null),
        },
    });

    const submitHandler = async () => {
        await addStudent({ id: Math.round(Math.random() * 100), ...form.values });
        setVisible(true);
    };
    
    useEffect(() => {
        if (isSuccess) {
            form.reset();
            setTimeout(() => {
                setVisible(false);
                setModalOpened(false);
            }, 1000)
        }
    }, [isLoading , isSuccess]);

    return (
        <div>
            <Paper radius="md" p="xl" style={{ padding: "10px" }}>
                <LoadingOverlay visible={visible} overlayBlur={2} />
                <Center>
                    <Text size="lg" weight={500}>
                        Put Your Student Info...
                    </Text>
                </Center>

                <Divider label="Happy Coding 🙃" labelPosition="center" my="lg" />

                <form onSubmit={form.onSubmit(submitHandler)}>
                    <Stack>

                        <TextInput
                            required
                            label="fullName"
                            placeholder="Enter your Name"
                            value={form.values.fullName}
                            onChange={(event) => form.setFieldValue('fullName', event.currentTarget.value)}
                            error={form.errors.fullName && form.errors.fullName}
                        />

                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            value={form.values.email}
                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                            error={form.errors.email && form.errors.email}
                        />

                        <TextInput
                            required
                            label="phone"
                            placeholder="+880180000000"
                            value={form.values.phone}
                            onChange={(event) => form.setFieldValue('phone', event.currentTarget.value)}
                            error={form.errors.phone && form.errors.phone}
                        />


                    </Stack>

                    <Center style={{ marginTop: "15px" }}>
                        <Button type='submit' variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} radius="md" size="md" compact>
                            Add Student
                        </Button>
                    </Center>
                </form>
            </Paper>
        </div>
    )
}

export default StudentForm;
