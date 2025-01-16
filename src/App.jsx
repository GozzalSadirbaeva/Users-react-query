import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import MyComponent from "./components/MyComponent/MyComponent";

const queryClient = new QueryClient();
const App = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <QueryClientProvider client={queryClient}>
      <MyComponent />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        // pauseOnFocusLoss
        draggable
        // pauseOnHover
        theme="dark"
      />
    </QueryClientProvider>
  );
};

export default App;
