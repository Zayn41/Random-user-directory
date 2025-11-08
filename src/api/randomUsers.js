import axios from "axios";

export const fetchData = async (count = 1) => {
    try {
        const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
        if(response.status !== 200) {
            console.log("Error fetching data:", response.status);
            return;
        }

        return response.data;

    } catch (err) {
        console.error("Internal server error:", err);
    }
};
