"use client";

import { useGetGreetings } from "@/modules/get-greetings";
import { use } from "react";

type Params = Promise<{ slug: string }>;

export default function Page(props: { params: Params }) {
	const params = use(props.params);
	const slug = params.slug;

	const { data, isLoading, isError } = useGetGreetings(slug);

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error loading response</div>;

	return <main>{data}</main>;
}
