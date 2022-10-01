import { Modal } from '@mantine/core';
import StudentForm from '@/components/StudentForm';


const index = ({ modalOpened, setModalOpened }) => {

    return (
        <div>
            <Modal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                overlayOpacity={0.55}
                overlayBlur={3}
                centered
            >
                <StudentForm setModalOpened={setModalOpened}/>
            </Modal>
        </div>
    )
}

export default index;
