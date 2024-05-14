import { Layout } from "../components/Layout/Layout";
import { AppBar } from "../components/AppBar/AppBar";
import { TaskForm } from "../components/TaskForm/TaskForm";
import { TaskList } from "../components/TaskList/TaskList";

const ReduxPage = () => {
  return (
    <>
      <Layout>
        <h3>Test page</h3>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </>
  );
};

export default ReduxPage;
