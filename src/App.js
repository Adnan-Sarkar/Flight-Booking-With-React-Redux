import { Provider } from "react-redux";
import BookingList from "./components/BookingList";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <InputForm />
      <BookingList />
    </Provider>
  );
}

export default App;
