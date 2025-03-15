import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono-client";

export const useGetGreetings = (slug: string) => {
	const query = useQuery({
		queryKey: ["greetings", slug],
		queryFn: async () => {
			const res = await client.api.hello[":id"].$get({
				param: { id: slug },
			});

			if (!res.ok) {
				throw Error("Failed to fetch response");
			}
			const data = await res.json();
			return data;
		},
		enabled: !!slug,
	});
	return query;
};
