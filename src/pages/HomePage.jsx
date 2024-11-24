import Container from "../components/Container";
import { auth } from "../config/firebase";

const HomePage = () => {
  const user = auth.currentUser;
  // const [compliments, setCompliments] = useState([]);

  // const getComplimentsList = async () => {
  //   try {
  //     const q = query(collection(db, "compliments"));
  //     const snapShot = await getDocs(q);
  //     const complimentsList = snapShot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setCompliments(complimentsList);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getComplimentsList();
  // }, []);
  return (
    <Container>
      <div className="container flex flex-col mt-20 bg-slate-100 ">
        <header className="px-4">
          <h2 className="text-center text-5xl">Let me cheer you up!</h2>
        </header>
        <div className="px-4 mt-20">
          <p>Logged in as {user.email}</p>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
