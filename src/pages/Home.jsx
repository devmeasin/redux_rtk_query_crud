import { Grid } from '@mantine/core';
import Layout from '@/components/Layout';
import { useGetStudentsDataQuery } from '@/services/studentsApi';
import StudentCard from '@/components/Shared/StudentCard';

const Home = () => {

    const { data, isLoading, isError, status } = useGetStudentsDataQuery();

    return (
        <Layout>
            <Grid>
                {
                    data?.map((student, ind) => (
                        <Grid.Col key={ind} xs={12} sm={6} md={4} lg={3}><StudentCard student={student} isLoading={isLoading} /></Grid.Col>
                    ))
                }
            </Grid>

        </Layout>
    )
}

export default Home;
