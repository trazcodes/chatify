import { create } from 'zustand';
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";


export const useChatStore = create((set) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/users");
            set({ users: res.data })
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUsersLoading: false });

        }
    },

getMessages: async (userId) => {
    console.log("➡️ Start fetching messages");
    set({ isMessagesLoading: true });

    try {
        const res = await axiosInstance.get(`/messages/${userId}`);
        console.log("✅ Fetched messages:", res.data);
        set({ messages: res.data });
    } catch (error) {
        console.error("❌ Error fetching messages:", error);
        toast.error(error?.response?.data?.message || "Failed to load messages");
    } finally {
        console.log("⬅️ End fetching messages (set loading false)");
        set({ isMessagesLoading: false });
    }
},

    //todo
    setSelectedUser: (selectedUser) =>set({selectedUser}),
}))