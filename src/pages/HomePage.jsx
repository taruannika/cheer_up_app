import Container from "../components/Container";
import { auth } from "../config/firebase";

const HomePage = () => {
  const user = auth.currentUser;
  return (
    <Container>
      <div>
        <p>Logged in as {user.email}</p>
      </div>
    </Container>
  );
};

export default HomePage;
