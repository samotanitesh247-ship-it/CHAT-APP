import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { users = [], getUsers, selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers = [] } = useAuthStore();

  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((u) => onlineUsers.includes(u._id))
    : users;

  return (
    <aside className="h-full w-80 bg-base-200 border-r border-base-300 flex flex-col">

      {/* TOP SECTION */}
      <div className="px-5 py-4 border-b border-base-300">
        <div className="flex items-center gap-2 text-base-content font-semibold">
          <Users size={18} />
          Contacts
        </div>

        <label className="flex items-center gap-2 mt-3 text-sm text-base-content cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-xs"
            checked={showOnlineOnly}
            onChange={(e) => setShowOnlineOnly(e.target.checked)}
          />
          Show online only
          <span className="text-xs opacity-60">
            ({onlineUsers.length-1} online)
          </span>
        </label>
      </div>

      {/* USER LIST */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        {filteredUsers.map((user) => {
          const isOnline = onlineUsers.includes(user._id);

          const avatar = user.profilePic
            ? `${user.profilePic}?v=${user.updatedAt || user._id}`
            : `https://api.dicebear.com/7.x/micah/svg?seed=${user._id}`;

          return (
            <div
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all mb-1
              hover:bg-base-300
              ${selectedUser?._id === user._id ? "bg-base-300" : ""}`}
            >
              <div className="relative">
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />

                {isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-success border-2 border-base-200 rounded-full"></span>
                )}
              </div>

              <div className="flex flex-col">
                <span className="font-medium text-base-content">
                  {user.fullName}
                </span>
                <span className="text-xs opacity-60">
                  {isOnline ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
