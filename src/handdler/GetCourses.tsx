/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function GetCourses() {
  if (typeof window === "undefined") return;
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const data = await axios.get(`${window.location.origin}/api/courses`);
      return data.data.data;
    },
  });
}
