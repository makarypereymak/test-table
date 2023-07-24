import axios from "axios";
import { MAIN_API } from "../../../shared/api/main";
import { POSTS_API } from "../api";

export const PostsController = {
  gettingPosts: async (controller: AbortController) => {
    const result = await axios.get(`${MAIN_API}/${POSTS_API}`, {
      signal: controller.signal
    });

    return result;
  }
};
