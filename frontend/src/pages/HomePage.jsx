import Sidebar from "../components/Sidebar";
import MessageContainer from "../components/MessageContainer";
import { useChatStore } from "../store/useChatStore";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-100 text-base-content">

      {/* space for navbar */}
      <div className="flex pt-16 h-full">

        <Sidebar />

        {!selectedUser ? (
          <div className="flex-1 flex items-center justify-center bg-base-100">

            <div className="flex flex-col items-center text-center">

              {/* icon */}
              <div className="w-16 h-16 rounded-full bg-base-300 flex items-center justify-center mb-6">
                <span className="text-3xl">💬</span>
              </div>

              {/* title */}
              <h1 className="text-2xl font-semibold mb-2">
                Welcome to Linkup!
              </h1>

              {/* subtitle */}
              <p className="opacity-60 text-sm">
                Select a conversation from the sidebar to start chatting
              </p>

            </div>

          </div>
        ) : (
          <MessageContainer />
        )}

      </div>
    </div>
  );
};

export default HomePage;
