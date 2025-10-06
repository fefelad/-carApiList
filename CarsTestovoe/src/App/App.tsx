import RenderCars from "@/Components/Main/RenderCars";
import styles from "./App.module.css";
import Layout from "@/Components/Layout/Layout";

function App() {
  return (
    <>
      <div className={styles.wrapper_app}>
        <Layout>
          <RenderCars />
        </Layout>
      </div>
    </>
  );
}

export default App;
