import AppTopbar from "./AppTopbar";
import Content from "./Content";
import NotificationSnackbar from "./infrastructure/NotificationSnackbar";

const Home = () => {
  return (
    <div>
      <NotificationSnackbar />
      <main>
        <AppTopbar />
        <>
          <Content />
        </>
      </main>
    </div>
  );
};

export default Home;
