"use client";
import { useEffect, useState } from "react";

export const useApplications = (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams();
      if (query?.status) {
        params.append("status", query.status.toString());
      }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/application?limit=${limit}&page=${page}&${params}`
        );
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, limit, query?.status]);

  return { isLoading, data };
};
